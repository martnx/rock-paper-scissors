
console.error("rock paper scissors game haha");

const humanScore = 0;
const computerScore = 0;

function getHumanChoice(){
    const input = parseInt(prompt("1 = Rock | 2 = Paper | 3 = Scissors? (Click OK to choice random)"));
        if(input > 3){
            console.warn("Choose 1-3 only!");
            getHumanChoice();
        }else{
            return input;   
        }
        
    // if(input > 3){
    //     console.log("Choose 1-3 only!");
    //     getHumanChoice();
    // }
    // else if(input === 1){
    //     return input;
    // }
    // else if(input === 2){
    //     return input;
    // }
    // else if(input === 3){
    //     return input;
    // } 
    // else{
    //     return;
    // }
}

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3)+1;
    //planning to use switch statement here
    return choice;
}

function playRound(humanChoice, computerChoice){
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    let hLabel;
    let cLabel;
    switch(humanChoice){
        case 1: hLabel = "Rock"; break;
        case 2: hLabel = "Paper"; break;
        case 3: hLabel = "Scissors"; break;
        default: hLabel = "Cancelled the Game";
    }
    switch(computerChoice){
        case 1: cLabel = "Rock"; break;
        case 2: cLabel = "Paper"; break;
        case 3: cLabel = "Scissors"; break;
    }
    console.log("Human = " + hLabel + "(" + humanChoice + ")");
    console.log("Computer = " + cLabel + "(" + computerChoice + ")");

    //1 = rock, 2 = paper, 3 = scissors
    //if else statement do it :0
    if(humanChoice == computerChoice){
        console.warn("Tie!!");
    }
    else if(humanChoice == 1 && computerChoice == 3){
        console.log("Human Winner!!");
    }
    else if(humanChoice == 2 && computerChoice == 1){
        console.log("Human Winner!!");
    }
    else if(humanChoice == 3 && computerChoice == 2){
        console.log("Human Winner!!");
    }
    else if(humanChoice == 2 && computerChoice == 3){
        console.log("Computer Winner!!");
    }
    else if(humanChoice == 3 && computerChoice == 1){
        console.log("Computer Winner!!");
    }
    else if(humanChoice == 1 && computerChoice == 2){
        console.log("Computer Winner!!");
    }
    else if(humanChoice == null || undefined){
        console.warn("Human cancelled the Game!");
    }

}

playRound();
