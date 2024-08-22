let humanScore = 0;
let computerScore = 0;
let gameCount = 0;
let gameFinished;

let humanInput;

let winnerText;

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

//Get the computer input using Math random
const getComputerInput = function(){
    const computerInput = Math.floor(Math.random()*3)+1;
    return computerInput;
}

const allBtn = document.querySelector(".all-btn");
    allBtn.addEventListener("click", (e) =>{
    let target = e.target
    switch(target.id){
        case "rock-btn": {
            humanInput = 1;
        }; break;
        case "paper-btn": {
            humanInput = 2;
        }; break;
        case "scissor-btn": {
            humanInput = 3;
        }; break;
    }
});

//Make the submit button here.
const startBtn = document.querySelector("#start-btn").addEventListener("click", () =>{
    console.log(`Human input: ${humanInput}`);
    playRound();
});

const playRound = function(){
    let humanChoice = humanInput;
    let computerChoice = getComputerInput();


    if(humanChoice == computerChoice){
        gameCount++;
        winnerText = "TIE!!"
    } //Human Condition
    else if(humanChoice == 1 && computerChoice == 3){
        humanScore++;
        gameCount++;
        winnerText = "Human Winner";
    }
    else if(humanChoice == 2 && computerChoice == 1){
        humanScore++;
        gameCount++;
        winnerText = "Human Winner";
    }
    else if(humanChoice == 3 && computerChoice == 2){
        humanScore++;
        gameCount++;
        winnerText = "Computer Winner";
    } //Computer Condition
    else if(humanChoice == 2 && computerChoice == 3){
        computerScore++;
        gameCount++;
        winnerText = "Computer Winner";
    }
    else if(humanChoice == 3 && computerChoice == 1){
        computerScore++;
        gameCount++;
        winnerText = "Computer Winner";
    }
    else if(humanChoice == 1 && computerChoice == 2){
        computerScore++;
        gameCount++;
        winnerText = "Computer Winner";
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Game Counts: " + gameCount)

    //Paragraph DOM text
    const winnerTxtDOM = document.querySelector('#winnerTxtDOM');
    const gameCountDOM = document.querySelector('#gameCountDOM');
    const humanScoreDOM = document.querySelector('#humanScoreDOM');
    const computerScoreDOM = document.querySelector('#computerScoreDOM');
    //Winner text
    winnerTxtDOM.textContent = `Winner: ${winnerText}`;
    gameCountDOM.textContent = `Game Count: ${gameCount}`;
    humanScoreDOM.textContent = `Winner: ${humanScore}`;
    computerScoreDOM.textContent = `Winner: ${computerScore}`;

}

//Display dom paragraph here
//Text Dom