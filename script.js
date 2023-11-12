'use strict';

let secretNumber = Math.round(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setTheScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// event listener for the Check! button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('🛑 No Number!');
  } else if (score > 1) {
    //When player wins
    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');

      //highScore implementation
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //Winning styles
      setBackgroundColor('#60b347');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      //When guess is wrong
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low');
      setTheScore(--score);
    }
    //Game Over
  } else {
    setTheScore(--score);
    displayMessage('😑 Game Over');
  }
});

// event listener for the Again! button
document.querySelector('.again').addEventListener('click', function () {
  //restore initial values of the score and number variables
  score = 20;
  setTheScore(score);
  secretNumber = Math.round(Math.random() * 20);
  //resets the winning styles to its initial values
  setBackgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // resets initial values of the message, score and guess input field
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
