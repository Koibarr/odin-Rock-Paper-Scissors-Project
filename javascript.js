var humanScore = 0;
var computerScore = 0;
var round = 0;

function getComputerChoice() {
    ranNum = Math.random();

    if (ranNum < 0.34) {
        return "rock";
    } else if (ranNum <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    userChoice = prompt("Please choose rock, paper, or scissors.");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (round < 4){
        if (humanChoice === computerChoice) {
            resultsDiv.textContent  = "It's a tie!";
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissors" && computerChoice === "paper")) {
            resultsDiv.textContent = "You win!";
            humanScore++;
        } else {
            resultsDiv.textContent = "Computer wins!";
            computerScore++;
        }
        round++;
    } else {
        resultsDiv.textContent = `Game over! Final score - You: ${humanScore}, Computer: ${computerScore}`;
    }
}

const body = document.querySelector('body');

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');

rockButton.textContent = 'ROCK';
paperButton.textContent = 'PAPER';
scissorsButton.textContent = 'SCISSORS';

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})

const resultsDiv = document.createElement('div');
body.appendChild(resultsDiv);