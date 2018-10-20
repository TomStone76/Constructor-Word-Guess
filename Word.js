var letter = require("./Letter");

function Word(lettersOfWord) {
    this.lettersOfWord = lettersOfWord.split("");
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

