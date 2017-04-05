var gulp = require('gulp'),
    responsive = require('gulp-responsive-images'),
    clean = require('gulp-clean'),
    vfs = require('vinyl-fs'),
    minifyhtml = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    processhtml = require('gulp-processhtml');




//directory
var src = './src',
    dist = './dist';

//tasks
//make small cover image
gulp.task('cover', function () {
    vfs.src(src+'/images/cover.jpg')
        .pipe(responsive({
            '*.jpg': [{
                width: 1600,
                suffix: '-1600'
            }, {
                width: 1140,
                suffix: '-1140'
            }, {
                width: 800,
                suffix: '-800'
            }, {
                width: 480,
                suffix: '-480'
            }]
        }))
        .pipe(gulp.dest(dist+'/images'));
});

//make small card image
gulp.task('card', function () {
    vfs.src(src+'/images/card*.jpg')
        .pipe(responsive({
            '*.jpg': [{
                width: 780,
                height: 500,
                suffix: '-780',
                crop: true

            }, {
                width: 550,
                height: 300,
                suffix: '-550',
                crop: true
            }, {
                width: 400,
                height: 200,
                suffix: '-400',
                crop: true
            }, {
                width: 300,
                height: 120,
                suffix: '-300',
                crop: true
            }]
        }))
        .pipe(gulp.dest(dist+'/images'));
});

//make clean the image folder in dist dir


gulp.task('clean', function () {
    return gulp.src('dist/images', {read: false})
        .pipe(clean());
});
opts = { /* plugin options */ };


// build html to load min files

gulp.task('process', function () {
    return gulp.src(src+'/*.html')
        .pipe(processhtml(opts))
        .pipe(minifyhtml())
        .pipe(gulp.dest(dist));
});


//minify html
gulp.task('minhtml', function () {
    return gulp.src(src+'/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest(dist));
});

//minify css
gulp.task('mincss', function () {
    return gulp.src(src+'/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest(dist+'/css'));
});

//minify js
gulp.task('minjs', function () {
    return gulp.src(src+'/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(dist+'/js'));
});




gulp.task('image', ['card','cover']);

gulp.task('build', ['mincss','minjs','minhtml']);

gulp.task('allbuild', ['clean','image','build']);