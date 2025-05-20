// index.js - lab 11
// author: rhys muth
// date: 05.19.25
// requirements: needs jquery to run

// function that sorts the characters of a string in alphabetical order
function sortString(inputString) {
  // we have to convert our string to an array and back again to sort it
  return inputString.toLowerCase().split('').sort().join('');
}

// button event listener
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    $(".output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
})
