// variabel to store the scores from user and computer on the global scope
humanScore = 0
computerScore = 0

// computer input using math random
function getComputerChoice(){
    const number = Math.random();
    if (number < 0.33) {
        return "rock";
    } else if (number < 0.66) { 
        return "paper";
    } else {
        return "scissor"; 
    }
}
// user input that is case-insensitive stored on "choice" variable, using .toLowerCase() 
function getHumanChoice(){
    const choice = prompt("Rock, Paper, or Scissor: ").toLowerCase();
    return choice;
}   

function playRound (humanSelection, computerSelection){
    if (humanSelection === "rock" && computerSelection === "scissor" || humanSelection === "paper" && computerSelection === "rock" || humanSelection == "scissor" && computerSelection == "paper"){
        humanScore += 1
        return "you win"
    } else if (computerSelection === humanSelection) {     
        return "its a draw"
    } else {
        computerScore += 1
        return "you lose";
        
    }
}

// loop the game 5 times by taking all the function we just created into 1 single play function
// i dunno how to use while loops
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();       
        const computerSelection = getComputerChoice();  
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
    }
    console.log("Final Score - You: " + humanScore,"and Computer: " + computerScore);
}

playGame();