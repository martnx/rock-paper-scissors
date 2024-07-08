
console.log("rock paper scissors game haha");

const humanScore = 0;
const computerScore = 0;

function getHumanChoice(){
    const input = parseInt(prompt("1 = Rock | 2 = Paper | 3 = Scissors? "));
    switch(input){
        case 1: return input; break;
        case 2: return input; break;
        case 3: return input; break;
        default: console.log("Choose 1-3 only!"),getHumanChoice();
    }
}

function getComputerChoice(){

    const choice = Math.floor(Math.random() * 3)+1;
    //planning to use switch statement here
    return choice;

}

console.log(getHumanChoice());
console.log("computer choice: "+getComputerChoice());
