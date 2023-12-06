'use strict';

/* //DOM
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

// Manipulating the numbers via JS
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(`The manipulated number is ${document.querySelector('.number').textContent}`);
console.log(`The manipulated score is ${document.querySelector('.score').textContent}`);

// User-Input Value Manipulation
document.querySelector('.guess').value = 3;
console.log(document.querySelector('.guess').value);

// DOM on Button 
document.querySelector('.check').addEventListener
('click', function (){
    console.log(document.querySelector('.guess').value);
}) */

// Getting into the game logic 

// We need a number between 1 and 20 to be assigned and then the user input should match
let compNumber = Math.trunc(Math.random() * 20 + 1)
// console.log(`The number assigned by the computer is ${compNumber}`); 
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
('click', function (){
    const guess = Number ((document.querySelector('.guess').value));
    console.log(guess, typeof guess); // Storing the number and its type into a variable called guess.

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
        console.log('Input a relevant number');
    }

    // When the player guesses it right
    else if (guess === compNumber) {
        document.querySelector('.message').textContent = 'Congratulations!';

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = compNumber
        document.querySelector('.number').style.width = '30rem'

        //highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }    
    }

    // When the player's guess is high
    else if(guess > compNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost'
        }

    }

    // When the player's guess is low
    else if(guess < compNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost'
        }
    }
})

// Making the again button work

document.querySelector('.again').addEventListener ('click', function(){
    score = 20
    compNumber = Math.trunc(Math.random() * 20 + 1)
    document.querySelector('.message').textContent = 'Start Guessing'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
})    

// Implementing High Scores
// Assign a value to a variable high score and in the place where the player wins verify it