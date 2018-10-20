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
    this.lettersOfWord = lettersOfWord.split(""); //create array, implement methods in instructions
    this.letterArray = [];
    for (let i = 0; i < this.lettersOfWord.length; i++) {
        var newLetter = new letter (this.lettersOfWord[i]);
        this.letterArray.push(newLetter);
    }
    this.wordString = function() {
        var newString = "";
        for (let i = 0; i < this.letterArray.length; i++) {
            var char = this.letterArray[i].characterReturn();
            newString = newString + char
        }
        return newString;
    }
    this.cArg = function (char) {
        for (let i = 0; i < this.letterArray.length; i++) {
           this.letterArray[i].characterCheck(char);
        }
    }
}

module.exports = Word;

