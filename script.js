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

const scores = document.querySelector('#scores')
const player = document.createElement('div');
const comp = document.createElement('div');
scores.appendChild(player);
scores.appendChild(comp);

const update = document.createElement('div');
scores.appendChild(update);

// PlayRound function to check the winner
function playRound(computerChoice, humanChoice) {
    if (computerChoice == "Rock" && humanChoice == "SCISSORS") {
        computerScore++;
        update.innerText = `Computer won, ${computerChoice.toUpperCase()} beats ${humanChoice} `;
    }
    else if (computerChoice == "Paper" && humanChoice == "ROCK") {
        computerScore++;
        update.innerText = `Computer won, ${computerChoice.toUpperCase()} beats ${humanChoice}`;
    }
    else if (computerChoice == "Scissors" && humanChoice == "PAPER") {
        computerScore++;
        update.innerText = `Computer won, ${computerChoice.toUpperCase()} beats ${humanChoice}`;

    }
    else if (computerChoice == "Scissors" && humanChoice == "ROCK") {
        humanScore++;
        update.innerText = `User won, ${humanChoice} beats ${computerChoice.toUpperCase()}`;
    }
    else if (computerChoice == "Rock" && humanChoice == "PAPER") {
        humanScore++;
        update.innerText = `User won, ${humanChoice} beats ${computerChoice.toUpperCase()}`;

    }
    else if (computerChoice == "Paper" && humanChoice == "SCISSORS") {
        humanScore++;
        update.innerText = `User won, ${humanChoice} beats ${computerChoice.toUpperCase()}`;

    }
    // Tie case
    else if (computerChoice.toUpperCase() == humanChoice) {
        update.innerText = "It's a tie";
    }

}


function updateScore(player, comp) {
    player.innerText = `Player score is: ${humanScore}`;
    comp.innerText = `Computer Score is: ${computerScore}`;


}

const win = document.createElement('div');


// PlayGame function 
function playGame() {
    if (humanScore > computerScore && humanScore >= 5) {
        win.innerText = "You won!";
        scores.appendChild(win);


    }
    else if (computerScore > humanScore && computerScore >= 5) {
        win.innerText = "You lost!"
        scores.appendChild(win);
    }
}



const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => {
    const humanChoice = e.target.innerText.toUpperCase();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    updateScore(player, comp);
    playGame();
})


const paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => {
    const humanChoice = e.target.innerText.toUpperCase();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    updateScore(player, comp);
    playGame()
})


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', (e) => {
    const humanChoice = e.target.innerText.toUpperCase();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    updateScore(player, comp);
    playGame();
})

