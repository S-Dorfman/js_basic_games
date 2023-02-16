

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1
   
    if (randomNum === 1) {
        computerChoice = 'rock'
    }
    else if(randomNum === 2) {
        computerChoice = 'scissors'
    }
    else if(randomNum === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }    
    else if(computerChoice === 'rock' && userChoice === "paper") {
        result = 'You win!'
    }  
    else if(computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You win!'
    }  
    else if(computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win!'
    }  
    else {
        result = 'You lost:('
    }

    resultDisplay.innerHTML = result    
}

