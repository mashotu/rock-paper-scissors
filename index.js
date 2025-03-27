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


