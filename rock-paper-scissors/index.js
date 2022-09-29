const userChoiceEl = document.querySelector(".user-choice");
const computerChoiceEl = document.querySelector(".computer-choice");
const resultEl = document.querySelector(".result");
const choices = document.querySelectorAll(".btn");

let userChoice;
let computerChoice;
let result;

function setResult() {
    if (userChoice === computerChoice) 
        result = "It's a Draw!";
    else if ((userChoice === 'Rock' && computerChoice === 'Scissor') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')||
        (userChoice === 'Paper' && computerChoice === 'Rock')) 
        result = "You Win!";
    else
        result = 'You Lose!';

    resultEl.innerHTML = `<h2>Result</h2>${result}`;

}

function setComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    
    switch(random) {
        case 0:
            computerChoice = 'Rock'
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissor';
            break;
    }

    computerChoiceEl.innerHTML = `<h2>Computer's Choice</h2>${computerChoice}`;
    

    setResult();
}


function setUserChoice(event) {
    userChoice = event.target.innerText;
    userChoiceEl.innerHTML = `<h2>Your Choice</h2>${userChoice}`;
    setComputerChoice();
}

choices.forEach(choice => choice.addEventListener('click', setUserChoice))

