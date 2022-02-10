function computerPlay() {
    let array = ['rock', 'paper', 'scissors'];    
    const element = array[Math.floor(Math.random() * array.length)];
    return element;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'Tie!';
        }
        else if (computerSelection == 'paper') {
            return `You lose: ${computerSelection} beats ${playerSelection}!`;
        }
        else if (computerSelection == 'scissors') {
            return `You win: ${playerSelection} beats ${computerSelection}!`;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return 'Tie!';
        }
        else if (computerSelection == 'scissors') {
            return `You lose: ${computerSelection} beats ${playerSelection}!`;
        }
        else if (computerSelection == 'rock') {
            return `You win: ${playerSelection} beats ${computerSelection}!`;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return 'Tie!';
        }
        else if (computerSelection == 'rock') {
            return `You lose: ${computerSelection} beats ${playerSelection}!`;
        }
        else if (computerSelection == 'paper') {
            return `You win: ${playerSelection} beats ${computerSelection}!`;
        }
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let choice = window.prompt(`Round ${i + 1}. What do you choose: rock, paper or scissors?`);
        result = playRound(choice, computerPlay() );
        console.log(result);
        if (result.toLowerCase().indexOf("tie") >= 0) {
            continue;
        }
        else if (result.toLowerCase().indexOf("lose") >= 0) {
            computerScore++;
            continue;
        }
        else if (result.toLowerCase().indexOf("win") >= 0) {
            playerScore++;
            continue;
        }
    }
    if (playerScore > computerScore) {
        console.log('You won more rounds than the computer!');
    }
    else if (computerScore > playerScore) {
        console.log('You lost more rounds than the computer...');
    }
    else {
        console.log(`It's a draw.`);
    }
}