var inquirer = require("inquirer");
var Word = require("./Word");

var wordArr = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'D.C.', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var guessesLeft = 13;

var randState = wordArr[Math.floor(Math.random() * wordArr.length)];
var word = new Word(randState);
var charOne = randState.charAt(0);

function game() {
    console.log(word.wordString());

    function turn() {
        if (guessesLeft > 0) {
        inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: "Which U.S. state name (including D.C.) did the computer choose? Guess a letter!"
        }, ]).then(function ask(choice) {
            word.cArg(choice.userGuess);
            console.log(word.wordString());
            guessesLeft--;
            console.log("You have " + guessesLeft + " guesses left.");
            if (guessesLeft === 0) {
                console.log("Game over! The correct answer was " + randState + ".");
                restart();
            }
            if (randState === word.wordString()) {
                console.log("Congratulations! You guessed correctly.");
                restart();
            } else {
            turn();
            }
        });
    }
    }
    turn();
}

function restart() {
    inquirer.prompt([{
        type: "confirm",
        name: "end",
        message: "Would you like to play again?"
    }, ]).then(function ask(endPrompt) {
        if (endPrompt.end) {
            randState = wordArr[Math.floor(Math.random() * wordArr.length)];
            word = new Word(randState);
            guessesLeft = 10;
            game();
        } else if (!endPrompt.end) {
            process.exit();
        }
    });
}

game();