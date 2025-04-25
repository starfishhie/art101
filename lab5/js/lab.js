// index.js - lab 5
// author: rhys muth
// date: 04.24.25

// defining variables
const make = "mini";
const model = "cooper countryman";
const color = "green";
const carYear = 2016;
const currentYear = 2025;
let ownIt = false;

// calculation
let carAge = currentYear - carYear;

// output
document.writeln("make: " + make + "<br>");
document.writeln("model: " + model + "<br>");
document.writeln("color: " + color + "<br>");
document.writeln("year: " + carYear + "<br>");
document.writeln("do i own it? " + ownIt + "<br>");
document.writeln("age: " + carAge + " years<br>");
