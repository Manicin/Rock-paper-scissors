let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return "Draw!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    } 
    
    else {
        computerScore++;
        return "You lose!";
    }
}

function playGame(humanChoice) {

    const computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

const rk = document.querySelector("#rk");
const pr = document.querySelector("#pr");
const ss = document.querySelector("#ss");

rk.addEventListener("click", () => {
    playGame("rock");
});

pr.addEventListener("click", () => {
    playGame("paper");
});

ss.addEventListener("click", () => {
    playGame("scissors");
});