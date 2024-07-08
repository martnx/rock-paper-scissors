
console.log("rock paper scissors game haha");

const humanScore = 0;
const computerScore = 0;

function getHumanChoice(){
    const input = parseInt(prompt("1 = Rock | 2 = Paper | 3 = Scissors? "));
    if(input > 3){
        console.log("Choose 1-3 only!");
        getHumanChoice();
    }
    else if(input === 1){
        return input;
    }
    else if(input === 2){
        return input;
    }
    else if(input === 3){
        return input;
    }
    else{
        return;
    }
}

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3)+1;
    //planning to use switch statement here
    return choice;
}

function playRound(humanChoice, computerChoice){
    
    let humanChoice = humanChoice;
    let computerChoice = computerChoice;

    //if else statement do it :0
}

let x = getHumanChoice();
let y = getComputerChoice();

console.log("X = " + x + " Y = " + y);

playRound(x,y);
