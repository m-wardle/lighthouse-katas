// Set-up variables

let prompt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * 100); // Limited to numbers from 0-100.

let answer = Number(prompt("Guess a number between 0 and 100: "));

let guesses = []; // Array to track previous guesses and number of guesses.

let success = false;

// Function to check if input is a finite number.

let isNumber = value => {
 return typeof value === "number" && isFinite(value);
}

// Function to check if input is a repeat guess.

let repeatEntry = (value) => {
  for (var i = 0; i < guesses.length; i++) {
    if (value === guesses[i]) {
      return true;
    } 
  }
}

// Main function to check input against the random number and provide appropriate results.

let checkAnswer = value => {
  if (value == randomNumber && guesses.length === 0) {
    console.log("Wow!! You got it on your first try! Nice job!");
    success = true;
  } else if (value == randomNumber) {
    guesses.push(value);
    console.log("You got it! You took " + guesses.length + " attempts!");
    success = true;
  } else if (repeatEntry(value) === true) {
    console.log("Already Guessed!");
    answer = Number(prompt("Guess a number between 0 and 100: "));
  } else if (value < 0 || value > 100) {
    console.log("Make sure your number is between 0 and 100!");
    answer = Number(prompt("Guess a number between 0 and 100: "));
  } else if (value < randomNumber) {
    console.log("Too low!");
    guesses.push(value);
    answer = Number(prompt("Guess a number between 0 and 100: "));
  } else if (value > randomNumber) {
    console.log("Too high!");
    guesses.push(value);
    answer = Number(prompt("Guess a number between 0 and 100: "));
  }
}

// Loop to check each input until a successful guess.

while (success == false){
  if (isNumber(answer) === false) {
    console.log('Not a number! Try again!');
    answer = Number(prompt("Guess a number between 0 and 100: "));
  } else if (isNumber(answer) === true) {
    checkAnswer(answer);
  }
}
