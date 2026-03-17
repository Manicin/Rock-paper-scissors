console.log("A game of Rock-Paper-Scissors")

// Getting user input
function getHumanChoice () {
    let user = prompt(" What's your decision?" ,"rock, paper or scisscors").toLocaleLowerCase();

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

// Initialize scores
let humanScore = 0;
let computerScore = 0;

function playGame (){
    function playRound (humanChoice, computerChoice) {
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


    let round = 5;

    for (let i = 1; i <= round; i++){
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            console.log(playRound(humanChoice,computerChoice));
            console.log("humanChoice:", humanChoice);
            console.log("computerChoice:",computerChoice);
            console.log("humanScore:",humanScore);
            console.log("computerScore:", computerScore);
        }
    }



playGame()



