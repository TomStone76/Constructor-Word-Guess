function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.characterReturn = function() {
        if (this.guessed) {
            return this.character;
        } else {
            return "_";
        }
    }
    this.characterCheck = function(guess) {
        if (this.character === guess) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;

