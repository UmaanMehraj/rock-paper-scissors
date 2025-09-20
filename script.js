


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
    if (humanScore > computerScore) console.log("The user won!");
    else if (computerScore > humanScore) console.log("The computer won!");
    else console.log("Game Tied!");
}


// // Call playgame funcion!
// playGame();

const scores = document.querySelector('#scores')
const player = document.createElement('div');
const comp = document.createElement('div');
scores.appendChild(player);
scores.appendChild(comp);


function updateScore(player, comp) {
    player.innerText = `Player score is: ${humanScore}`;
    comp.innerText = `Computer Score is: ${computerScore}`;


}


const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => {
    const humanChoice = e.target.innerText.toUpperCase();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    updateScore(player, comp);
})


const paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => {
    const humanChoice = e.target.innerText.toUpperCase();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    updateScore(player, comp);
})


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', (e) => {
    const humanChoice = e.target.innerText.toUpperCase();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    updateScore(player, comp);
})

