// index.js - lab 7
// author: rhys muth
// date: 05.05.25

// making functionssss weeee
function revString(text) {
    return text.toLowerCase().split('').sort().join('');
}

// variables n stuff
let userName = prompt("please enter your name", "rhys");
let revName = revString(userName)

// typing the thingy
document.writeln("your sorted name is " + revName +"!");
