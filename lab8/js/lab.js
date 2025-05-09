// index.js - lab 8
// author: rhys muth
// date: 05.08.25

// making variables + functions 
var array = [1, 2, 3, 4, 5];
function multiply(num) {
    return num * 2;
}

// using callbacks
array.map(multiply);
array.map(function(num) {
    return num ** 2;
})

// assigning result variable
var mapResults = array.map(multiply);

// print multiply map function
console.log("results: ", mapResults)