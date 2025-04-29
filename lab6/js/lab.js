// index.js - lab 5
// author: rhys muth
// date: 04.24.25



// define variables + objects

var myTransport = [" car", " bus", " walk"];

var myMainRide = {
  make: "mini",
  model: "cooper countryman",
  color: "green",
  year: 2016,
  age: 9
}



// writing stuff out

document.writeln("my transport:" + myTransport + "<br>");

document.writeln("my main ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
