const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const userImageDisplay = document.getElementById('user-image-choice');
const computerImageDisplay = document.getElementById('computer-image-choice');

const possibleChoices = document.querySelectorAll('button');

const loader = document.getElementById('loader');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

    //Reset computer and result
    computerChoiceDisplay.innerHTML = "thinking...";
    computerImageDisplay.src = "assets/emptyImg.png";
    resultDisplay.innerHTML = "......";


    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = ` ${userChoice}`;
    userImageDisplay.src = `assets/${userChoice}.png`;

    loader.hidden = false;
    computerImageDisplay.hidden = true;

    setTimeout(generateComputerChoice, 3000);
    setTimeout(getResult, 3000);
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if(randomNumber === 1) {
        computerChoice = 'rock';
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if(randomNumber === 3) {
        computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
    computerImageDisplay.src = `assets/${computerChoice}.png`;

    computerImageDisplay.hidden = false;
    loader.hidden = true;
}

function getResult() {
    if(userChoice === "rock" && computerChoice === "scissors") {
        result = "You win!!";
    }
    else if(userChoice === "scissors" && computerChoice === "rock") {
        result = "You lose!!";
    }
    else if(userChoice === "rock" && computerChoice === "paper") {
        result = "You lose!!";
    }
    else if(userChoice === "paper" && computerChoice === "rock") {
        result = "You win!!";
    }
    else if(userChoice === "scissor" && computerChoice === "paper") {
        result = "You win!!";
    }
    else if(userChoice === "paper" && computerChoice === "scissors") {
        result = "You lose!!";
    }
    else if(userChoice === computerChoice) {
        result = "It's a draw!"
    }

    resultDisplay.innerHTML = result;
}

