// index.js - connect 4 game and laundry instructions for lab 4
// Author: Rhys Muth
// Date: 4.21.25

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// how to make rosemary bread
  // collect all ingredients
    // 2 tsp active dry yeast
    // 2 tsp sugar
    // 1 cup warm water
    // 1 tbsp olive oil, plus a little extra for oiling the bowl and brushing on the bread
    // 2 tbsp dried rosemary
    // 2 1/2 cups all purpose flour, plus extra for dusting
    // 1 1/2 tsp kosher salt
  // create dough
    // mix yeast, sugar, and 1/4 cup warm water in a large bowl
      // let sit for 5 minutes, or until mixture becomes foamy
    // add 1 tbsp olive oil, 1 1/2 tbsp rosemary, all salt, remaining water, and all flour into the same bowl
      // mix until dough forms
    // remove dough from bowl and place on a cutting board dusted with flour
      // knead for 5 to 7 minutes
  // let dough sit and rise
    // coat the inside of another medium to large bowl with olive oil and put the dough in
    // cover bowl with plastic wrap or a towel and leave for 1 to 2 hours, or until dough has doubled in size
      // leaving the dough in a warm-ish environment helps it rise better!
    // remove dough from bowl and put on another floured surface
      // divide it in half and knead each half for 1 to 2 minutes
    // place both dough balls on a baking sheet lined with parchment paper
    // let dough sit uncovered for another 1 to 2 hours or until doubled in size again
  // bake
    // preheat oven to 400 degrees F
    // take baking sheet with the now doubled-in-size dough balls on it and bake in oven for 10 minutes
    // remove bread from oven, brush olive oil onto the tops, and sprinkle with salt and the remaining rosemary
    // place bread back in oven and bake for another 10 to 12 minutes
    // remove when done and let bread cool slightly before serving
  // enjoy!

// making a connect 4 game!
  // create the game board
    // 8 by 8 grid
  // set player1 color red and player2 color blue
  // game active
    // display the board as up to date with each new turn
    // switch players each turn
      // prompt user to choose a space to fill with their respective color
      // check if player move is valid
        // invalid if chosen spot is already filled
        // player moves fill the bottom-most available slot in any chosen collumn
      // if the move is valid:
        // execute player move
        // update board to reflect changes
        // check for wins
          // if win, game over
            // win when there are 4 slots of the same color filled in a straight line
              // can be vertical, horizontal, or diagonal
          // if no win, continue playing
        // switch to other player and repeat
      // if move is invalid, prompt player to choose another space
  // game over when:
    // win detected OR no more available spaces
    // if win, declare win
    // if no available spaces, declare draw
  // players can only choose the bottom-most available space in any given column
