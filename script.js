let humanScore
let computerScore;

const getHumanInput = function(){
    const humanInput = parseInt(prompt("1=Rock | 2=Paper | 3=Scissors"));
    if(humanInput > 3){
        console.clear;
        console.warn("Enter 1-3 Only!");
        getHumanInput();
    }
    return humanInput;
}

const getComputerInput = function(){
    const computerInput = Math.floor(Math.random()*3)+1;
    return computerInput;
}

const playRound = function(){
    let humanChoice = getHumanInput();
    let computerChoice = getComputerInput();

    if(humanChoice == computerChoice){
        console.warn("TIEEEE!!");
    } //Human Condition
    else if(humanChoice == 1 && computerChoice == 3){
        console.warn("Human is Winner!");
    }
    else if(humanChoice == 2 && computerChoice == 1){
        console.warn("Human Winner!!");
        humanScore++;
    }
    else if(humanChoice == 3 && computerChoice == 2){
        console.warn("Human Winner!!");
        humanScore++;
    } //Computer Condition
    else if(humanChoice == 2 && computerChoice == 3){
        console.warn("Computer Winner!!");
        computerScore++;
    }
    else if(humanChoice == 3 && computerChoice == 1){
        console.warn("Computer Winner!!");
        computerScore++;
    }
    else if(humanChoice == 1 && computerChoice == 2){
        console.warn("Computer Winner!!");
        computerScore++;
    }
}

playRound();