'use strict';

// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// score of player 1 at position 0 and player 2 at position 1.
let finalScores, currentScore, activePlayer, playing;

const reset = function () {
  finalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};

reset();
// getelementbyID is faster than query selector

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating a random dice roll from 1-6.
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    // 2. display the dice and update the current score on player 1.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;

    // 3. check for rolled 1: true, switch to the next player 2.
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      //Add dice to the current score but the current score of the active player.
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (diceRoll === 1) {
      // switch the player
      switchPlayer();
    }
  }
});

//adding functionality to the hold score button
// 1.Add current score to total score
btnHold.addEventListener('click', function () {
  if (playing) {
    finalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScores[activePlayer];
    // 2. current score should reset and player should switch
    // 3. if score >=100 then player wins else switch player
    if (finalScores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// resetting the game by clicking the New game button.
btnNew.addEventListener('click', reset);
