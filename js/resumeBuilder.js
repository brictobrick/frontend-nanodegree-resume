var bio = {
  "name": "Minchang Kim",
  "role": "Product Manager",
  "contacts": {
    "mobile": "010-1234-5678",
    "email": "minchang.k@abc.com",
    "github": "https://github.com/brictobrick",
    "twitter": "minkuli",
    "location": "Seoul"
  },
  "welcomeMessage": "Hi, it's good to see you",
  "skills": ["Markeintg", "Javascript", "HTML", "CSS"],
  "biopic": "images/fry.jpg",
  "display": function() {
    // header
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHeaderRole);
    $("#header").prepend(formattedHeaderName);
    // contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(".flex-box").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
    // header
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);
    // skills
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkills = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkills);
    });
  }
};

var work = {
	"jobs": [
    {
			"employer": "EC Company",
			"title": "Analyst",
			"location": "Seoul",
			"dates": "in Progress",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ornare placerat. Etiam hendrerit elit id rhoncus efficitur. Etiam accumsan erat erat, sed aliquam metus semper nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
		},
    {
  			"employer": "ABC Securices",
  			"title": "Intern",
  			"location": "Seoul",
  			"dates": "2016-01-01 ~ 2016-12-31",
  			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ornare placerat. Etiam hendrerit elit id rhoncus efficitur. Etiam accumsan erat erat, sed aliquam metus semper nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
  		}
    ],
  "display": function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);
      $(".work-entry").append(formattedWorkDates);
      $(".work-entry").append(formattedWorkLocation);
      $(".work-entry").append(formattedWorkDescription);
    });
  }
};

var projects = {
	"projects": [{
			"title": "plan",
			"dates": "2017-01-01",
			"description": "Duis rhoncus erat sed nibh feugiat, id ultricies enim sollicitudin. Nulla ac ipsum non dolor tristique vehicula. Sed finibus bibendum ligula tempus pretium. Cras auctor pharetra orci vitae congue. Proin id est vel nibh vehicula molestie. Mauris a erat ligula. Phasellus elementum enim et dolor blandit, sed consectetur lectus vestibulum.",
			"images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
		}],
  "display": function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry").append(formattedProjectTitle);
      $(".project-entry").append(formattedProjectDates);
      $(".project-entry").append(formattedProjectDescription);
      project.images.forEach(function(image) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry").append(formattedProjectImage);
      });
    });
  }
};

var education = {
  "schools": [
    {
      "name": "Sogang University",
      "location": "Seoul",
      "degree": "Master",
      "dates": "2017-01-01",
      "url": "www.school1.com",
      "majors": ["business","economics"]
    },
    {
      "name": "Seoul University",
      "location": "Seoul",
      "degree": "Bachelor",
      "dates": "2014-03-01",
      "url": "www.school2.com",
      "majors": ["economics"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Computer Science",
      "school": "K University",
      "dates": "2016-01-01",
      "url": "https://www.CSurl.com"
    }
  ],
  "display": function() {
    //school
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
      $(".education-entry").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry").append(formattedSchoolDates);
      $(".education-entry").append(formattedSchoolLocation);
      school.majors.forEach(function(major) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry").append(formattedSchoolMajor);
      });
    });
    //onlineCourse
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(onlineCourse) {
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
      var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
      var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url) ;
      $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
      $(".education-entry:last").append(formattedonlineDates);
      $(".education-entry:last").append(formattedonlineURL);
    });
  }
};

//googleMap
$("#mapDiv").append(googleMap);

//method
bio.display();
work.display();
projects.display();
education.display();
initializeMap();
