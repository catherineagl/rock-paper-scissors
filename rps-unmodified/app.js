const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const choices = document.querySelector('.choices')
const result = document.querySelector('.result')



const computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice = ["rock","paper","scissors"];
    return computerChoice[randomNumber];
}


let userScore =  0;
let computerScore = 0;

//let playerSelection = prompt("make your choose").toLowerCase();

const win = (playerSelection,computerSelection) => {
    userScore++ 
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
}

const lose = (playerSelection,computerSelection) => {
    computerScore++;
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
}

const tie = () => {
    console.log("it is a tie")
}

const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    switch(playerSelection+computerSelection) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            tie();
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerSelection,computerSelection);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(playerSelection,computerSelection);
            break;
        }
}
/*
const game = () => {
    for (let i = 0; i < 5; i++) {
        //playerSelection = prompt("make your choose");
        computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        console.log(`User:${userScore} - ${computerScore} comp`)
    }
    if (userScore > computerScore) {
        console.log(`User score ${userScore} - ${computerScore} Computer score. You win the game!`)
    } else {
        console.log(`score ${userScore} - ${computerScore}. You Lose the game!`)
    }

}
    
*/

choices.addEventListener('click', playerSelection = (choice) => {
    playerSelection(choice.target);
})

    
playRound(playerSelection)





