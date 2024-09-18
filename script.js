let humanScore = 0;
let computerScore = 0;
let gameCount = 0;
let gameFinished;

let humanInput;

let winnerText;

const mainContainer = document.querySelector('.main-container');

//Paragraph DOM text
const headerTxTDOM = document.querySelector('#rps-title');
const winnerTxtDOM = document.querySelector('#winnerTxtDOM');
const gameCountDOM = document.querySelector('#gameCountDOM');
const humanScoreDOM = document.querySelector('#humanScoreDOM');
const computerScoreDOM = document.querySelector('#computerScoreDOM');

//button DOM
// const rockBtn = document.querySelector('#rock-btn').addEventListener('click', () =>{
//     console.log("Rock button");
// });
// const paperBtn = document.querySelector('#paper-btn').addEventListener('click', () =>{
//     console.log("Paper button");
// });
// const scissorBtn = document.querySelector('#scissor-btn').addEventListener('click', () =>{
//     console.log("Scissor Button");
// });
const allBtn = document.querySelector(".all-btn");
    allBtn.addEventListener("click", (e) =>{
    let target = e.target
    console.log(target);
    switch(target.id){
        case "rock-btn": {
            humanInput = 'rock'; 
        }; break;
        case "paper-btn": {
            humanInput = 'paper'; 
        }; break;
        case "scissor-btn": {
            humanInput = 'scissor'; 
        }; break;
        case "reset-btn": {
            humanScore = 0;
            computerScore = 0;
        };
    }
    playRound();
});

//Get the computer input using Math random
const getComputerInput = function(){
    const computerInput = Math.floor(Math.random()*3)+1;
    let inputReturn
    
    switch(computerInput){
        case 1: inputReturn = 'rock'; break;
        case 2: inputReturn = 'paper'; break;
        case 3: inputReturn = 'scissor'; break;
    };
    return inputReturn;
}

const playRound = function(){
    let humanChoice = humanInput;
    let computerChoice = getComputerInput();
    let headerTxt;

    if(humanChoice == computerChoice){
        headerTxt = 'TIE TIE TIE!!';
    } //Human Condition
    else if(humanChoice == 'rock' && computerChoice == 'scissor'){
        humanScore++;
        winnerText = "Human Winner";
        headerTxt = "Human Win this round.";
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore++;
        winnerText = "Human Winner";
        headerTxt = "Human Win this round.";
    }
    else if(humanChoice == 'scissor' && computerChoice == 'paper'){
        humanScore++;
        winnerText = "Computer Winner";
        headerTxt = "Computer Win this round.";
    } //Computer Condition
    else if(humanChoice == 'paper' && computerChoice == 'scissor'){
        computerScore++;
        winnerText = "Computer Winner";
        headerTxt = "Computer Win this round.";
    }
    else if(humanChoice == 'scissor' && computerChoice == 'rock'){
        computerScore++;
        winnerText = "Computer Winner";
        headerTxt = "Computer Win this round.";
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper'){
        computerScore++;
        winnerText = "Computer Winner";
        headerTxt = "Computer Win this round.";
    }

    // console.log("Human Score: " + humanScore);
    // console.log("Computer Score: " + computerScore);
    // console.log("Game Counts: " + gameCount)

    //Winner text
    // winnerTxtDOM.textContent = `Winner: ${winnerText}`;
    headerTxTDOM.textContent = headerTxt;
    humanScoreDOM.textContent = `Human Score: ${humanScore}`;
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`;
    checkFinished();
}

function checkFinished(){
    if(humanScore == 5){
        headerTxTDOM.textContent = "Human Winner";
        allBtn.disabled = true;
        alert("Human is Winner");
        resetButton();
        
    }
    if(computerScore == 5){
        headerTxTDOM.textContent = "Computer Winner"
        allBtn.disabled = true;
        alert("Computer is Winner");
        resetButton();
        
    }
}

function resetButton(){
    const rockBtn = document.querySelector("#rock-btn");
    const paperBtn = document.querySelector("#paper-btn");
    const scissorBtn = document.querySelector("#scissor-btn");
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none';
    scissorBtn.style.display = 'none';

    const createResetBtn = document.createElement('button');
    createResetBtn.textContent = "Play Again!";
    createResetBtn.className = 'reset-btn';
    createResetBtn.addEventListener("click", () =>{
        humanScore = 0;
        computerScore = 0;
        createResetBtn.remove();
        rockBtn.style.display = '';
        paperBtn.style.display = '';
        scissorBtn.style.display = '';
    });
    allBtn.appendChild(createResetBtn);

}

//Create function here
//Check if the human and computer score is equal to 5 then disabled the button
//then temporary hide the button and make reset button
//

// const createResetBtn = document.createElement('button');
//     createResetBtn.textContent = "Play Again!";
//     allBtn.appendChild(createResetBtn);


//Make new fuction 