// index.js - lab 12
// author: rhys muth
// date: 05.22.25
// requirements: needs jquery to run

// create a function sorter() that takes a string as an argument
function sorter(str) {
    // counts the letters in str and assigns it to a variable length
    let length = str.length;
    // uses modulus (% operator) to get the remainder
    let mod = length % 3;
    // mod will now be a value between 0 and 2
    // create a conditional that will return one of the results depending on mod value
    if (mod == 0) {
        result = "sea!";
    }
    else if (mod == 1) {
        result = "earth!";
    }
    else if (mod == 2) {
        result = "sky!";
    }
    return result;
}

// create an click listener attached to #button
$("#button").click(function() {
    // that gets the value of #input and assigns it to a variable name
    let name = $("#input").val();
    // runs sorter(name) and stores the result in a variable
    let nameResult = sorter(name);
    // appends a new styled paragraph to .output with the results
    $(".output").html('<p>congratulations! you are the ' + nameResult + '</p>');
});
