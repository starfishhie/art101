// index.js - lab 16
// author: rhys muth
// date: 06.05.25
// requirements: needs jquery to run

// comic obj
const comicObj = {
    url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
    // data: {
        // api_key: "DEMO_KEY",
    // },
    type: "GET",
    dataType: "JSON"
}

// button listener
$("#button").click(function(){

    // call ajax
    $.ajax(comicObj)

    // success callback
    .done(function(comicObj){
        console.log(comicObj);
        // pull out data from results
        let title = comicObj.title;
        let alt = comicObj.alt;
        let imgURL = comicObj.img;
        // put data in output
        $(".output").html(`<h2>${title}</h2>`);
        $(".output").append(`<img src='${imgURL}'>`);
        $(".output").append(`<p class='date'>${alt}</p>`);
    })
    // fail callback
    .fail(function(xhr, status, error) {
        console.log(error + "status: " + status);
    })
})