const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");

let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = choices[Math.floor(Math.random() * choices.length)];

  if (userChoice === compChoice) {
    resultEl.textContent = `Draw! You both chose ${userChoice}.`;
    return;
  }

  const win = (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  );

  if (win) {
    userScore++;
    resultEl.textContent = `You win! ${capitalize(userChoice)} beats ${capitalize(compChoice)}.`;
  } else {
    compScore++;
    resultEl.textContent = `You lose! ${capitalize(compChoice)} beats ${capitalize(userChoice)}.`;
  }

  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
