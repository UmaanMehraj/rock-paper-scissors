// Initialize two global variables for score!

let humanScore = 0, computerScore = 0;

// Function to get user choice
function getComputerChoice() {
    let computerChoice;
    // Genrate a random number from 1 through 3
    const num = Math.floor(Math.random() * 3) + 1;

    // Run switch over the number and generate the corresponding computer choice
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

// Function to get human choice 
function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (Rock, Paper or Scissors): ").toUpperCase();
    return humanChoice;
}

// PlayRound function to check the winner
function playRound(computerChoice, humanChoice) {
    if (computerChoice == "Rock" && humanChoice == "SCISSORS") {
        computerScore++;
    }
    else if (computerChoice == "Paper" && humanChoice == "ROCK") {
        computerScore++;
        console.log(`Computer won,${computerChoice} beats ${humanChoice}`)
    }
    else if (computerChoice == "Scissors" && humanChoice == "PAPER") {
        computerScore++;
        console.log(`Computer won,${computerChoice} beats ${humanChoice}`)

    }
    else if (computerChoice == "Scissors" && humanChoice == "ROCK") {
        humanScore++;
        console.log(`User won, ${humanChoice} beats ${computerChoice}`);
    }
    else if (computerChoice == "Rock" && humanChoice == "PAPER") {
        humanScore++;
        console.log(`User won, ${humanChoice} beats ${computerChoice}`);

    }
    else if (computerChoice == "Paper" && humanChoice == "SCISSORS") {
        humanScore++;
        console.log(`User won, ${humanChoice} beats ${computerChoice}`);

    }
    // Tie case
    else if (computerChoice.toUpperCase() == humanChoice) {
        console.log("It's a tie");
    }

}



// PlayGame function that updates and runs playround function 5 times!
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);

    }
    if (humanScore > computerScore) console.log("The user won!");
    else if (computerScore > humanScore) console.log("The computer won!");
    else console.log("Game Tied!");
}


// Call playgame funcion!
playGame();