console.log("Hello world")

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
    }
}

console.log(getHumanChoice());

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

 console.log (getComputerChoice())

