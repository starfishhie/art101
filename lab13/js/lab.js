// index.js - lab 12
// author: rhys muth
// date: 05.26.25
// requirements: needs jquery to run



// makin the functionnnn
function fizzbuzzboom() {
    let numStr = "";
    for (num=1; num<=200; num++) {
        // 3, 5, and 7 make fizzbuzzboom
        if (num%3 == 0 & num%5 ==0 & num%7 == 0) {
            numStr += num + ": fizzbuzzboom<br>";
        }
        // 3 and 5 make fizzbuzz
        else if (num%3 == 0 & num%5 ==0) {
            numStr += num + ": fizzbuzz<br>";
        }
        // 3 and 7 make fizzboom
        else if (num%3 == 0 & num%7 == 0) {
            numStr += num +  ": fizzboom<br>";
        }
        // 5 and 7 make buzzboom
        else if (num%5 == 0 & num%7 ==0) {
            numStr += num + ": buzzboom<br>";
        }
        // 3 makes fizz
        else if (num%3 == 0) {
            numStr += num + ": fizz<br>";
        }
        // 5 makes buzz
        else if (num%5 == 0) {
            numStr += num + ": buzz<br>";
        }
        // 7 makes boom
        else if (num%7 == 0) {
            numStr += num + ": boom<br>";
        }
        // if none, just the number!
        else {
            numStr += num + "<br>";
        }
    }
    return numStr;
}


// button listener
$("#button").click(function() {
    let resultStr = fizzbuzzboom();
    $(".output").html(resultStr);
})