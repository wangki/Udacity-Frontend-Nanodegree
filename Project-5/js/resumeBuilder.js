/*
This is empty on purpose! Your code to build the resume will go here.
 */


function appender(div,Item) {
    $(div).append(Item)
}
function prepender(div,Item) {
    $(div).prepend(Item)
}



var bio = {
    "name" : "WK",
    "role" : "Developer",
    "welcomeMessage": "Hello!",
    "contacts" : {
        "mobile": "010-2222-1120",
        "email": "wk@me.com",
        "github": "wangki",
        "twitter": "wangki",
        "location": "Seoul",
        "blog" : "thisiswk.com"

    },

    "skills": ["javascript","html"],
    "biopic": "./images/fry.jpg",
    "display": function (){
        prepender("#header",HTMLheaderRole.replace("%data%",bio.role));
        prepender("#header",HTMLheaderName.replace("%data%",bio.name));
        appender("#header",HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
        appender("#header",HTMLbioPic.replace("%data%",bio.biopic));
        appender("#header",HTMLskillsStart);
        bio.skills.forEach(function (element, index) {
            var 	formattedSkills=		HTMLskills.replace("%data%",bio.skills[index]);
            appender("#skills",formattedSkills);
        });
        jQuery.each(bio.contacts, function (index, value) {
            var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%",index).replace("%data%",value);
            appender("#topContacts",formattedContactGeneric);

        });

    }

};



var work = {
    "jobs": [{
            "employer" : "JANDI",
            "title" : "ProductManager",
            "location" : "Seoul",
            "dates" : "Jan, 2017",
            "description" : "Mangaing Product"
        }, {
            "employer" : "JANDI",
            "title" : "ProductManager",
            "location" : "Seoul",
            "dates" : "Jan, 2017",
            "description" : "Mangaing Product"


    }],
    "display" : function () {
        work.jobs.forEach(function (element,index) {
            appender("#workExperience",HTMLworkStart);
            appender(".work-entry:last",HTMLworkEmployer.replace("%data%",element.employer));
            appender(".work-entry:last",HTMLworkTitle.replace("%data%",element.title));
            appender(".work-entry:last",HTMLworkDates.replace("%data%",element.dates));
            appender(".work-entry:last",HTMLworkDescription.replace("%data%",element.description));
            appender(".work-entry:last",HTMLworkLocation.replace("%data%", element.location));
        });


    }



};



var education = {
    "schools": [{
            "name": "University of The People",
            "location": "Pasadena",
            "degree": "Bachelor's degree",
            "majors": ["Compsci"],
            "dates": "2019-02-13",
            "url": "www.uopeople.edu"
        },
        {
            "name": "University of The People",
            "location": "Pasadena",
            "degree": "Bachelor's degree",
            "majors": ["Compsci"],
            "dates": "2019-02-13",
            "url": "www.uopeople.edu"
        }

    ],
    "onlineCourses": [{
            "title" : "Front-End",
            "school" : "Udacity",
            "dates" : "2017-06-01",
            "url" : "www.udacity.com"
        },
        {
            "title" : "Front-End",
            "school" : "Udacity",
            "dates" : "2017-06-01",
            "url" : "www.udacity.com"

        }
    ],
    "display" : function () {
        appender("#education", HTMLschoolStart);
        education.schools.forEach(function (element, index) {
            appender(".education-entry", HTMLschoolName.replace("%data%", element.name));
            appender(".education-entry", HTMLschoolDates.replace("%data%", element.dates));
            appender(".education-entry", HTMLschoolLocation.replace("%data%", element.location));
            appender(".education-entry", HTMLschoolMajor.replace("%data%", element.majors));
            appender(".education-entry", HTMLschoolDegree.replace("%data%", element.degree));
        });

    }
};

var projects = {
    "projects": [{
        "title": "build an app",
        "dates": "2017-02-01",
        "description": "built an app",
        "images": "./images/197x148.gif"
        },
        {
            "title": "build an app",
            "dates": "2017-02-01",
            "description": "built an app",
            "images": "./images/197x148.gif"
        }
    ],
    "display": function () {
        appender("#projects", HTMLprojectStart);
        projects.projects.forEach(function (element, index) {
            appender(".project-entry",HTMLprojectTitle.replace("%data%",element.title));
            appender(".project-entry",HTMLprojectDates.replace("%data%",element.dates));
            appender(".project-entry",HTMLprojectDescription.replace("%data%",element.description));
            appender(".project-entry",HTMLprojectImage.replace("%data%","./images/197x148.gif"));

        });
        appender(".education-entry",HTMLonlineClasses);
        education.onlineCourses.forEach(function (element, index) {
            var formattedOnlineTitle =HTMLonlineTitle.replace("%data%",element.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",element.school);
            appender(".education-entry",formattedOnlineTitle +formattedOnlineSchool );
            appender(".education-entry",HTMLonlineDates.replace("%data%",element.dates));
            appender(".education-entry",HTMLonlineURL.replace("%data%",element.url));

        });

    }

};

function showMe() {
    //this function is bundled up all the functions.
    appender("#mapDiv",googleMap);
    bio.display();
    work.display();
    projects.display();
    education.display();
}

showMe();