// index.js - lab 12
// author: rhys muth
// date: 05.22.25
// requirements: needs jquery to run

// create a function sorter() that takes a string as an argument
function nameSorter(str) {
    // counts the letters in str and assigns it to a variable length
    let length = str.length;
    // uses modulus (% operator) to get the remainder
    let mod = length % 3;
    // mod will now be a value between 0 and 2
    // create a conditional that will return one of the results depending on mod value
    if (mod == 0) {
        nameResult = "sea!";
    }
    else if (mod == 1) {
        nameResult = "earth!";
    }
    else if (mod == 2) {
        nameResult = "sky!";
    }
    return nameResult;
}

function imgSorter(str) {
    let length = str.length;
    let mod = length % 3;
    if (mod == 0) {
        imgResult = "<img src='img/sea.jpg'>";
    }
    else if (mod == 1) {
        imgResult = "<img src='img/earth.jpg'>";
    }
    else if (mod == 2) {
        imgResult = "<img src='img/sky.jpg'>";
    }
    return imgResult;
}

// create an click listener attached to #button
$("#button").click(function() {
    // that gets the value of #input and assigns it to a variable name
    let name = $("#input").val();
    // runs sorter(name) and stores the result in a variable
    let resultText = nameSorter(name);
    let resultImg = imgSorter(name);
    // appends a new styled paragraph to .output with the results
    $(".output").html('<p>congratulations! you are the ' + resultText + '</p>');
    $(".output").append(resultImg);
});
