let userScore = document.querySelector('#userScore');
let computerScore = document.querySelector('#computerScore');
let result = document.querySelector('#result');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let reset = document.querySelector('#reset');
let uScore = 0;
let cScore = 0;
let choices = ['rock','paper','scissors'];

rock.addEventListener('click',function(){
    let output = gameWinner('rock',computerChoice())
    finalOrNot(output)
    updateScore()
})
paper.addEventListener('click',function(){
    let output = gameWinner('paper',computerChoice())
    finalOrNot(output)
    updateScore()
})
scissors.addEventListener('click',function(){
    let output = gameWinner('scissors',computerChoice())
    finalOrNot(output)
    updateScore()
})

function computerChoice(){
    return choices[Math.floor(Math.random()*3)]
}
function updateScore(){
    userScore.textContent = uScore;
    computerScore.textContent = cScore;
}
function gameWinner(uChoice,cChoice) {
    if((uChoice=='rock'&&cChoice=='scissors') || (uChoice=='paper'&&cChoice=='rock') || (uChoice=='scissors'&&cChoice=='paper')) {
        return "user"
    }
    else {
        return "computer"
    }
}

function finalOrNot(output) {
    if(output=='user'){
        uScore+=1
    }
    else{
        cScore+=1
    }
    if (uScore>=5 || cScore>=5){
        if (uScore>=5) {
            winner = 'user'
        }
        else{
            winner = 'computer'
        }
        uScore,cScore = 0;
        let restart = alert(`game set ${winner} is the winner`)
        if (restart==undefined){
            location.reload()
        }
    }
}

reset.addEventListener('click',function(){
    location.reload()
})