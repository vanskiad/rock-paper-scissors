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
            return "This is a tie";
        else if (computerSelection==="Paper")
            return "You lose! Paper beats Rock";
        else if (computerSelection==="Scissors") 
            return "You win! Rock beats Scissors";

    }
    else if (playerSelection=="paper") {
        if (computerSelection==="Rock")
            return "You win! Paper beats Rock";
        else if (computerSelection==="Paper")
            return "This is a tie";
        else if (computerSelection==="Scissors") 
            return "You lose! Scissors beats Paper";

    }

    else if (playerSelection=="scissors") {
        if (computerSelection==="Rock") 
            return "You lose! Rock beats Scissors";
        else if (computerSelection==="Paper")
            return "You win! Scissors beats Paper";
        else if (computerSelection==="Scissors") 
            return "This is a tie.";

    }
}

function playGame (){
    const numberOfRounds = 5;
    let computerScore=0;
    let playerScore=0;
    for (let i=1; i<=numberOfRounds; i++) {
        playerSelection = prompt ("This is round "+ i + ". What is your choice? Rock, Paper or Scissors?");
        computerSelection = getComputerChoice ();
        let outcome= playRound(playerSelection, computerSelection);
        if (outcome.includes("lose")){
            computerScore++;
        }
        else if (outcome.includes("win")){
            playerScore++;
        }

        console.log (outcome);
        console.log ("The score is: Computer:"+computerScore+" Player:"+playerScore);
    }
    if (playerScore>computerScore)
        console.log ("Player wins!");
    else
        console.log ("Computer wins!");
}

playGame ();