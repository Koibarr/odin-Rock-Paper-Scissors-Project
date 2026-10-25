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

console.log(getComputerChoice());
console.log(getHumanChoice());