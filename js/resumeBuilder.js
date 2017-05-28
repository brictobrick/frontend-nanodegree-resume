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
  "skills": ["Markeintg", "Javascript", "Html"],
  "biopic": "images/fry.jpg",
  "display": "function"
}

// header
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedHeaderRole);

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedHeaderName);

// topContacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

// header
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

// skills
$("#header").append(HTMLskillsStart);

bio.skills.forEach(function(skill) {
  var formattedSkills = HTMLskills.replace("%data%", skill);
  $("#skills").append(formattedSkills);
});


var work = {
	"jobs": [
    {
			"employer": "EC Company",
			"title": "Analyst",
			"location": "Seoul",
			"dates": "in Progress",
			"description": "is a analyst of EC Company."
		},
    {
  			"employer": "ABC Securices",
  			"title": "Intern",
  			"location": "Seoul",
  			"dates": "2016-01-01 ~ 2016-12-31",
  			"description": "worked as an intern."
  		}
    ],
  "display": ""
}

//work
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


var projects = {
	"projects": [{
			"title": "plan",
			"dates": "2017-01-01",
			"description": "plan project",
			"images": ["url1", "url2", "url3"]
		}],
  "display": "function"
}

//projects
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


var education = {
  "schools": [{
      "name": "Sogang University",
      "location": "Seoul",
      "degree": "Master",
      "dates": "2017-01-01",
      "url": "schoolurl",
      "majors": ["business","economics"]
    }],
  "onlineCourses": [{
      "title": "Computer Science",
      "school": "K University",
      "dates": "2016-01-01",
      "url": "CSurl"
    }],
  "display": "function"
}

//school
$("#education").append(HTMLschoolStart);

education.schools.forEach(function(school) {
  var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
  $(".education-entry").append(formattedSchoolName);
  $(".education-entry").append(formattedSchoolDegree);
  $(".education-entry").append(formattedSchoolDates);
  $(".education-entry").append(formattedSchoolLocation);
  school.majors.forEach(function(major) {
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
    $(".education-entry").append(formattedSchoolMajor);
  });
});

//Online
$("#education").append(HTMLonlineClasses);
