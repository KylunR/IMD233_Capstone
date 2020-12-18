// Array holding data for projects, will be rendered on page
// Allows for easy changing of projects data
var projectsData = [
    { title: "Famine Fighters", description: "Video Game (C#, Unity)", link: "https://kylunr.github.io/FamineFighters" },
    { title: "Movie Matchup", description: "Android App (Java, JavaScript)", link: "https://play.google.com/store/apps/details?id=edu.tacoma.uw.kylunr.moviematchup" },
    { title: "Learner", description: "Web App (React, JavaScript)", link: "https://learner-a57d8.web.app" },
    { title: "Suicide Data Analysis", description: "(Python Notebook)", link: "https://github.com/KylunR/SuicideRateDataAnalysis/blob/master/SuicideRateAnalysis.ipynb" },
    { title: "Calculator", description: "Web App (JavaScript)", link: "https://kylunr.github.io/JavaScript-Calculator" },
];


// When the page loads, render all projects in array 
// to page
$(document).ready(function() {

    // console.log("Document Ready!");

    projectsData.forEach(element => {
        $('.projects').append(
            "<div class='project'>" +
                "<p class='project-title'>" + element.title + "</p>" +
                "<p class='project-description'>" + element.description + "</p>" +
                "<a class='project-link' target=\"_blank\" href=" + element.link + ">Go To Project</a>" +
            "</div>"
        );
    });

    // console.log("Done Rendering Projets!");

});
