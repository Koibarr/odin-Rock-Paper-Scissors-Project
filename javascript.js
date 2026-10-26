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

function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!");
            humanScore++;
        } else {
            console.log("Computer wins!");
            computerScore++;
        }
        round++;
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Game over! Final score - You: " + humanScore + ", Computer: " + computerScore);
}

playGame();