// Initialize two global variables for score!

let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let computerChoice;
    const num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            computerChoice = "Rock"
            return computerChoice;

        case 2:
            computerChoice = "Paper"
            return computerChoice;

        case 3:
            computerChoice = "Scissors"
            return computerChoice;

    }
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (Rock, Paper or Scissors): ").toUpperCase();
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "Rock" && humanChoice == "SCISSORS") computerScore++;
    else if (computerChoice == "Paper" && humanChoice == "ROCK") computerScore++;
    else if (computerChoice == "Scissors" && humanChoice == "PAPER") computerScore++;
    else if (computerChoice == "Scissors" && humanChoice == "ROCK") humanScore++;
    else if (computerChoice == "Rock" && humanChoice == "PAPER") humanScore++;
    else if (computerChoice == "Paper" && humanChoice == "SCISSORS") humanScore++;

}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();


playRound(computerChoice, humanChoice);

if (humanScore > computerScore) console.log("The user won!");
else if (computerScore > humanScore) console.log("The computer won!");
else console.log("It's a tie!");

