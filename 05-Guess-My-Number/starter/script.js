'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number 😝';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// When there is no input
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number provided');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🤩');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // changing the background in the body
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '20rem';

    //   if guess is too high
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.score').textContent = 0;
  }
});

// Reset everything
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  displayMessage('Start Guessing....');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
