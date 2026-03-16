console.log("A game of Rock-Paper-Scissors")

// Getting user input
function getHumanChoice () {
    let user = prompt(" What's your decision?" ,"rock, paper or scisscors");

    if (user === null){
        return "Ready whenever you are"
    }
    else if (user === "rock"){
        return "Rock"
    }

    else if (user === "paper") {
        return "Paper"
    }
    
    else if (user === "scissors")
        return "Scissors"

    else {
        return "Enter your choice to begin."
    };
}

// getHumanChoice();


function getComputerChoice() {
    // we'll create the math.random function here. We need a normal random numver generator here

    function getRandomInt () {
    return Math.floor(Math.random() * 3);
    }

    // n is a placeholder for the randomly generated value
    const n = getRandomInt()
    if (n === 0){
        return "Rock";
    }

    else if (n === 1) {
        return "Paper";
    }

    else if (n === 2) {
        return "Scissors";
    }
 }


function getComputerChoice() {
    // we'll create the math.random function here. We need a normal random numver generator here
    function getRandomInt () {
    return Math.floor(Math.random() * 3);
    }
    // n is a placeholder for the randomly generated value

    const n = getRandomInt()
    if (n === 0){
        return "Rock";
    }

    else if (n === 1) {
        return "Paper";
    }

    else if (n === 2) {
        return "Scissors";
    }
 }

// getComputerChoice();

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Score board
function scores (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw";
    } else if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

// Example usage
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

if (humanChoice !== "Ready whenever you are" && humanChoice !== "Enter your choice to begin.") {
    let result = scores(humanChoice, computerChoice);
    console.log("Human choice:", humanChoice);
    console.log("Computer choice:", computerChoice);
    console.log("Result:", result);
    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}