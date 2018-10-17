// Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user 
// is attempting to guess. That means the constructor should define:


// 1. An array of new Letter objects representing the letters of the underlying word

// 2. A function that returns a string representing the word. This should call 
// the function on each letter object (the first function defined in Letter.js) 
// that displays the character or an underscore and concatenate those together.

// 3. A function that takes a character as an argument and calls the guess function 
// on each letter object (the second function defined in Letter.js)

var letter = require("./Letter");

function Word(lettersOfWord) {
    this.lettersOfWord = lettersOfWord; //create array, implement methods in instructions
    this.letterArray = new Letters //iterate through this string; new up a letter object for each character in word you pass in (for loop)
    this.wordString = function() {
        let wordLetters = "";
    }
    this.cArg = function (char) {
        var c = process.argv;
        characterCheck(char);
    }
}

//Export word function (module.exports = word)
//Then, use it in index.js