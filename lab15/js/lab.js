// index.js - lab 15
// author: rhys muth
// date: 06.02.25
// requirements: needs jquery to run

// making a number generator for all the pokemon
function randomNum() {
    return Math.floor(Math.random() * 1025) + 1;
}

// making a number generator for all the pokemon
function randomNum() {
    return Math.floor(Math.random() * 1025) + 1;
}

// make function that chooses a random pokemon using the api
function randomPokemon() {
    // grab random number to use as the pokemon id
    let pokeId = randomNum();
    // ajax link
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/"+pokeId,
        // data: {id: pokeId},
        type: "GET",
        dataType: "json"
    })
    // if success
    .done(function(data) {
        console.log("success!");
        console.log(data);
        // get and name data from site
        let pokeName = data.name;
        let imgURL = data.sprites.front_default;
        // formatting image for html
        let pokeImg = "<img src=" + imgURL +">";
        // output to html
        $(".output").html("<p>your pokemon is " + pokeName + "!</p>");
        $(".output").append(pokeImg);
    })
    // if failure
    .fail(function( xhr, status, errorThrown ) {
        console.log(errorThrown + "status: " + status);
    })
}

// make button
$("#button").click(function() {
    console.log("click!");
    randomPokemon();
})