const rps = ["rock", "paper", "scissors"];
let playerCount,
  computerCount = 0;

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * Math.floor(rps.length));
  return rps[randomNumber];
}

function playerPlay(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "tie";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "player";
  } else return "computer";
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerPlay(playerSelection, computerSelection));
