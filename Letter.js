// Letter.js: Contains a constructor, Letter. This constructor should be able to either display
//  an underlying character or a blank placeholder (such as an underscore), 
//  depending on whether or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter 
//     has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, 
//     updating the stored boolean value to true if it was guessed correctly

// var underlyingChar = "";
// var guessedYet = false;
// var guess = process.argv[2];



function Letter(character) {
    this.character = character;
    // this.guessedYet = guessedYet; this is probably a method that takes a character ,it returns t/f based on if it's found
    this.characterReturn = function() {
        if (!guessedYet) {
            console.log(underlyingChar);
        } else {
            console.log("_");
        }
    }
    this.characterCheck = function() {
        if (underlyingChar === guess) {
            guessedYet = true;
        } else {
            guessedYet = false;
        }
    }
}

