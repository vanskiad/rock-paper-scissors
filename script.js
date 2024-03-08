function getComputerChoice (){

    const choices = ['Rock', 'Paper', 'Scissors'];
    let length = choices.length;

      var randomChoice = choices[getRandomInt(length)];

      return randomChoice;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    playerSelection= playerSelection.toLowerCase();
    if (playerSelection=="rock") {
        if (computerSelection==="Rock")
            return "This round is a tie.";
        else if (computerSelection==="Paper")
            return "You lose this round! Paper beats Rock";
        else if (computerSelection==="Scissors") 
            return "You win this round! Rock beats Scissors";

    }
    else if (playerSelection=="paper") {
        if (computerSelection==="Rock")
            return "You win this round! Paper beats Rock";
        else if (computerSelection==="Paper")
            return "This round is a tie.";
        else if (computerSelection==="Scissors") 
            return "You lose this round! Scissors beats Paper";

    }

    else if (playerSelection=="scissors") {
        if (computerSelection==="Rock") 
            return "You lose this round! Rock beats Scissors";
        else if (computerSelection==="Paper")
            return "You win this round! Scissors beats Paper";
        else if (computerSelection==="Scissors") 
            return "This round is a tie.";

    }
}


let computerScore=0;
let playerScore=0;
let scoreDivText=document.querySelector('#score').textContent;

function playGame (buttonId){
    let playerSelection = buttonId;
    let computerSelection=getComputerChoice();
    
    let score=document.querySelector("#score");
        
        let outcome= playRound(playerSelection, computerSelection);
        if (outcome.includes("lose")){
            computerScore++;
        }
        else if (outcome.includes("win")){
            playerScore++;
        }

        score.innerHTML += "<p>"+outcome+"</p>";
        score.innerHTML += "<p>The score is: Computer:"+computerScore+" Player:"+playerScore+"</p>";
    
    if (playerScore>computerScore && playerScore===5)
        score.innerHTML +="<p>Player wins! This is the end of the game!</p>";
    else if (playerScore<computerScore && computerScore===5)
        score.innerHTML += "<p>Computer wins! This is the end of the game!</p>";
    

    if (playerScore===5 || computerScore===5){

        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
        let resetButton=document.createElement('button')
        resetButton.textContent="Reset"
        score.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);

    }
}

function resetGame(){
    computerScore=0;
    playerScore=0;
    score.textContent=scoreDivText;
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;

}

document.querySelector('#rock').addEventListener('click', function (){
    playGame("rock");
});
document.querySelector('#paper').addEventListener('click', function (){
    playGame("paper");
});
document.querySelector('#scissors').addEventListener('click', function (){
    playGame("scissors");
});
