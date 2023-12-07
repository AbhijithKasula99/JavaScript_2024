'use strict';

// Selecting the elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // Alternative and a quicker one than above
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

/* // Starter position of the elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden') */

// Scores
const scores = [0,0];
let activePlayer = 0;
let currentScore = 0; // As it will tend to change as the game goes on
let playing = true; 

const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');    
    player1El.classList.add('player--active');    
    player1El.classList.remove('player--active');    
    const scores = [0,0];
    let activePlayer = 0;
    let currentScore = 0; // As it will tend to change as the game goes on
    let playing = true;
}
init();

// Switching Player Function
const switchPlayer = function () {
    // Switch turns
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            currentScore = 0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
}


// Rolling button functionality
btnRoll.addEventListener('click', function() {
    if(playing) {
        // 1. Role the dice
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        // 2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for 1 and if it is 1 then switch 
        if (dice !== 1) {
        // Add dice to the score 
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
        switchPlayer();
        }
    } 
});

btnHold.addEventListener('click', function (){
    if(playing) {
        // 1. Add currentscore to active player score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. check if playerscore is >= 100
        if(scores[activePlayer] >= 100) {
            // Finish the Game
            diceEl.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`)
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`)
        } else {
            // Switch the player 
            switchPlayer();
        }
    }
})

// Resetting the game
btnNew.addEventListener('click', function () {
    init();
})