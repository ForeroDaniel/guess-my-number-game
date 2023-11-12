'use strict';

let secretNumber = Math.round(Math.random() * 20);
let score = 20;
let highScore = 0;

// event listener for the Check! button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number!';
  } else if (score > 1) {
    //When player wins
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';

      //highScore implementation
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //Winning styles
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      //When guess is wrong
    } else if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low';
      document.querySelector('.score').textContent = --score;
    }
    //Game Over
  } else {
    document.querySelector('.score').textContent = --score;
    document.querySelector('.message').textContent = '😑 Game Over';
  }
});

// event listener for the Again! button
document.querySelector('.again').addEventListener('click', function () {
  //restore initial values of the score and number variables
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.round(Math.random() * 20);
  //resets the winning styles to its initial values
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // resets initial values of the message, score and guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
