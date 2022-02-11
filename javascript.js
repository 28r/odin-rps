const results = document.querySelector('#results');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playRound(`rock`);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playRound(`paper`);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound(`scissors`);
});

playerScore = 0;
computerScore = 0;

function computerPlay() {
    let array = ['rock', 'paper', 'scissors'];    
    const element = array[Math.floor(Math.random() * array.length)];
    return element;
}

function playRound(playerSelection) {
    let xr = document.getElementById("results");
    if (xr.style.display == 'none') {
        xr.style.display = 'block';
    }
    computerSelection = computerPlay();
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Tie!';
            results.appendChild(content);
        }
        else if (computerSelection == 'paper') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `You lose: ${computerSelection} beats ${playerSelection}!`;
            results.appendChild(content);
            computerScore++;
        }
        else if (computerSelection == 'scissors') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `You win: ${playerSelection} beats ${computerSelection}!`;
            results.appendChild(content);
            playerScore++;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Tie!';
            results.appendChild(content);
        }
        else if (computerSelection == 'scissors') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `You lose: ${computerSelection} beats ${playerSelection}!`;
            results.appendChild(content);
            computerScore++;
        }
        else if (computerSelection == 'rock') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `You win: ${playerSelection} beats ${computerSelection}!`;
            results.appendChild(content);
            playerScore++;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Tie!';
            results.appendChild(content);
        }
        else if (computerSelection == 'rock') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `You lose: ${computerSelection} beats ${playerSelection}!`;
            results.appendChild(content);
            computerScore++;
        }
        else if (computerSelection == 'paper') {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `You win: ${playerSelection} beats ${computerSelection}!`;
            results.appendChild(content);
            playerScore++;
        }
    }
    if (playerScore == 5) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `You won the game!`;
        content.style.cssText = 'font-weight: bold';
        results.appendChild(content);
        content.scrollIntoView();
        results.appendChild(document.createElement("br"));
        computerScore = 0;
        playerScore = 0;
        return 0;
    }
    else if (computerScore == 5) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `You lost the game...`;
        content.style.cssText = 'font-weight: bold';
        results.appendChild(content);
        content.scrollIntoView();
        results.appendChild(document.createElement("br"));
        computerScore = 0;
        playerScore = 0;
        return 0;
    }
    else {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `You: ${playerScore} points. Computer: ${computerScore} points`;
        results.appendChild(content);
        content.scrollIntoView();
        return 0;
    }
}