var inquirer = require("inquirer");
var Word = require("./Word");

var wordArr = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var guessesLeft = 10;

var randState = wordArr[Math.floor(Math.random() * wordArr.length)];
var word = new Word (randState);
var charOne = randState.charAt(0);

function game() {
    console.log("The first letter of the state is " + charOne + ".");
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Guess the name of the state."
    }, ]).then(function ask(choice) {
        if (choice.userGuess === randState) {
            console.log("Congratulations! You guessed correctly.");
            randState = wordArr[Math.floor(Math.random() * wordArr.length)];
            restart();
        } else if (choice.userGuess !== randState) {
            guessesLeft--;
            console.log("Sorry! Try again. You have " + guessesLeft + " guesses left.")
            game();
            if (guessesLeft === 0) {
                console.log("Game over!");
                restart();
            }
        }
    });
}

function restart() {
    inquirer.prompt([{
        type: "confirm",
        name: "end",
        message: "Would you like to play again? (Type yes or no.)"
    }, ]).then(function ask(endPrompt) {
        if (endPrompt.end) {
            randState = wordArr[Math.floor(Math.random() * wordArr.length)];
            charOne = randState.charAt(0);
            guessesLeft = 10;
            game();
        } else if (!endPrompt.end) {
            process.exit();
        }
    });
}

game();