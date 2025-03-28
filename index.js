/**
 * Returns rock paper scissors
 * 
 *  A few ways to go about this is basically
 *  1 - Rock
 *  2 - Paper
 *  3 - Scissors
 *  Essentially assign a random number and return the results based on the number, or using Arrays (going the array route is a lot more elegant)
 */

const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function getHumanChoice() {
    let choice = null;

    do {
        choice = prompt("Enter rock, paper or scissors");
        choice = choice.toLowerCase();
    } while (!CHOICES.includes(choice));

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "paper" && computerChoice === "rock") ||
        (humanScore === "rock" && computerScore === "scissors") ||
        (humanScore === "paper" && computerScore === "scissors")) {
        humanScore++;
    }
    else {
        computerScore++;
    }

    if (humanScore === 5) {
        console.log("You win!");
    }
    else {
        console.log("The computer won!")
    }
}

