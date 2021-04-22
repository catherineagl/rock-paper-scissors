//global variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('comp-score');
const choices = document.getElementById('choices');
const game = document.getElementById('game');
const playAgain = document.getElementById('play-again');
const userColor = document.querySelector('.user-color');
const compColor = document.querySelector('.comp-color');
const btn = document.querySelectorAll('.btn');
let userWin = 0;
let compWin = 0;


//FUNCTIONS

const computerSelection = () => {
    let randomNumber = Math.floor(Math.random() *3)
    if(randomNumber === 0) {
        return "rock"
    } else if(randomNumber === 1){
        return 'paper'
    } else {
        return 'scissors'
    }
}

choices.addEventListener('click', (e) => {
    let userChoice = e.target.id;
    playRound(userChoice);
})


const win = (userChoice, compChoice) => {
    userWin++;
    result.textContent = `You choice ${userChoice} and computer choice ${compChoice}. You win!`;
    userScore.textContent = userWin;
    userColor.classList.add('winner');
    compColor.classList.add('loser');
    userColor.addEventListener('transitionend', ()=> {
        userColor.classList.remove('winner');
        compColor.classList.remove('loser');
    })
    btn.forEach(item => {
        if(item.id === userChoice) {
            item.classList.add('border-change')
        }
        setTimeout(()=>{
            item.classList.remove('border-change')
        },1000)
    })
    
    if (userWin > compWin && userWin >= 5) {
        endGame(userWin, compWin);
    }
}

const lose = (userChoice, compChoice) => {
    compWin++;
    result.textContent = `You choice ${userChoice} and computer choice ${compChoice}. You lose!`;
    computerScore.textContent = compWin;
    userColor.classList.add('loser');
    compColor.classList.add('winner');
    userColor.addEventListener('transitionend', ()=> {
        userColor.classList.remove('loser');
        compColor.classList.remove('winner');

    })
    btn.forEach(item => {
        if(item.id === userChoice) {
            item.classList.add('border-lose')
        }
        setTimeout(()=>{
            item.classList.remove('border-lose')
        },1000)
    })
    if (compWin > userWin && compWin >= 5) {
        endGame(userWin, compWin);
    }
}

const tie = (userChoice, compChoice) => {
    result.textContent =  `You choice ${userChoice} and computer choice ${compChoice}. It is a tie`
}


const playRound = (userChoice) => {
    let compChoice = computerSelection();
    if(userChoice === compChoice) tie(userChoice,compChoice);
    else if(userChoice === "rock") {
        if(compChoice == "scissors") win(userChoice,compChoice);
        else lose(userChoice,compChoice);
    } else if(userChoice === "paper") {
        if (compChoice === "rock") win(userChoice,compChoice);
        else lose(userChoice,compChoice)
    } else if(userChoice === "scissors") {
        if (compChoice === "paper") win(userChoice,compChoice);
        else lose(userChoice,compChoice)
    }
}

const endGame = (userWin, compWin) => {
    if (userWin > compWin) {
        game.textContent = "Congratulations you win the game!"
    } else game.textContent = "Oh no! the computer won. You wanna play again?"
    choices.classList.add('hidden-btn')
    result.classList.add('hidden-btn')
    playAgain.classList.remove('hidden-btn')
    
}

playAgain.addEventListener('click', () => {
    result.textContent = "Thanks for playing again.";
    game.textContent = "Make your move!";
    userWin = 0;
    compWin = 0;
    userScore.textContent = userWin;
    computerScore.textContent = compWin;
    choices.classList.remove('hidden-btn')
    result.classList.remove('hidden-btn')
    playAgain.classList.add('hidden-btn')
})