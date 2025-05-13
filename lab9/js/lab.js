// index.js - lab 9
// author: rhys muth
// date: 05.12.25

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>oooooo you wanna click this so bad</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


// add button to problems section
$("#problems").before("<button id='button-problems'>wait no please my secrets don't do it please</button>");

// add a click listener to the problems button
$("#button-problems").click(function(){
    // reveal text
    $("#problems").show();
});


// add button to results section
$("#results").before("<button id='button-results'>what sort of beast could this summon i wonder hmmmm</button>");

// add a click listener to the results button
$("#button-results").click(function(){
    // RELEASE THE BEAST
    $("#results").fadeIn("slow");
});