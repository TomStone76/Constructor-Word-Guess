var inquirer = require("inquirer");
var word = require("./Word");

var wordArr = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

// var randState = arr[Math.floor(Math.random() * arr.length)];

// for (var i = 0; i < arr.length; i++) {

// }

var guessesLeft = 9;

// var charOne = randState.charAt(0);

// console.log("The first letter of the state is " + charOne + ".");

function restart() {
    inquirer.prompt([{
        type: "confirm",
        name: "end",
        message: "Would you like to play again?"
    }, ]).then(function ask(endPrompt) {
        if (endPrompt.end) {
            game();
        } else if (!endPrompt.end) {
            process.exit();
        }
    });
}

var randState = wordArr[Math.floor(Math.random() * wordArr.length)];
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
                randState = wordArr[Math.floor(Math.random() * wordArr.length)];
                console.log("Game over!");
                restart
            }
        }
    });
}

game();