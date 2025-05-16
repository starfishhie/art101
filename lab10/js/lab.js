// index.js - lab 10
// author: rhys muth
// date: 05.15.25
// requirements: needs jquery to run

// dialogue function
function generateRandomText() {
    const text = "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // get a random starting index to slice the lorem ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // generate the random lorem ipsum-like text
    return text.slice(randStart, randStart + randLen);
};
  
// button listener
$("#make-convo").click(function(){
    console.log("click!");
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to the output div
    $(".output").append('<div class="text"><p>' + newText + '</p></div>');
});

