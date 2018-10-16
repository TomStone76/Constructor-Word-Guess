var inquirer = require("inquirer");

var arr = ['Alabama','Alaska', 'Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia', 'Florida',
'Georgia', 'Hawaii', 'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina',
'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island', 'South Carolina','South Dakota','Tennessee','Texas','Utah',
'Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

var randState = arr[Math.floor(Math.random() * arr.length)];

// for (var i = 0; i < arr.length; i++) {

// }

console.log(randState);