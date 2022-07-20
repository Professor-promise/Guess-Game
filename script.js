// Assignment variables from HTML classes
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const body = document.querySelector('body');
const number = document.querySelector('.number');

// variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

// Message Output
const getMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

// Score Output
const getScore = function (score) {
  return (document.querySelector('.score').textContent = score);
};

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Check if the input is empty
  if (!guess) {
    getMessage('⛔ No Number');

    // Check if the guess is correct
  } else if (guess === secretNumber) {
    getMessage('🎉 Correct Number');
    body.style.background = '#097c3f';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Check if the guess is incorrect
  } else {
    if (score > 1) {
      getMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      getScore(score);
    } else {
      getMessage('You loss the game 💥');
      getScore(0);
    }
  }
});

resetBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  body.style.background = '#222';
  number.textContent = '?';
  number.style.width = '15rem';
  getMessage('Start guessing...');
  getScore(20);
  document.querySelector('.guess').value = '';
});
