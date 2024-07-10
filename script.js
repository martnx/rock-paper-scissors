let humanScore = 0;
let computerScore = 0;
let gameCount = 0;
let gameFinished;

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
        console.log("TIEEEE!!");
        gameCount++;
    } //Human Condition
    else if(humanChoice == 1 && computerChoice == 3){
        console.log("Human is Winner!");
        humanScore++;
        gameCount++;
    }
    else if(humanChoice == 2 && computerChoice == 1){
        console.log("Human Winner!!");
        humanScore++;
        gameCount++;
    }
    else if(humanChoice == 3 && computerChoice == 2){
        console.log("Human Winner!!");
        humanScore++;
        gameCount++;
    } //Computer Condition
    else if(humanChoice == 2 && computerChoice == 3){
        console.log("Computer Winner!!");
        computerScore++;
        gameCount++;
    }
    else if(humanChoice == 3 && computerChoice == 1){
        console.log("Computer Winner!!");
        computerScore++;
        gameCount++;
    }
    else if(humanChoice == 1 && computerChoice == 2){
        console.log("Computer Winner!!");
        computerScore++;
        gameCount++;
    }

    if(humanScore == 5 && computerScore == 5){
        gameFinished = true;
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Game Counts: " + gameCount)
}



function playGame(){
    


    do{
        playRound();
    }while(gameFinished==true);


    // if(humanScore == 5){
    //     console.log("HUMAAAAAAAAAN IS WINNER!!!!!!");
    // }
    // else if(humanScore == 5){
    //     console.log("COMPUTERRRRRRRRRR IS WINNER!!!!!!");
    // }
    
}

playGame();