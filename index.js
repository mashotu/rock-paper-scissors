/**
 * Returns rock paper scissors
 * 
 *  A few ways to go about this is basically
 *  1 - Rock
 *  2 - Paper
 *  3 - Scissors
 *  Essentially assign a random number and return the results based on the number, or using Arrays (going the array route is a lot more elegant)
 */
function getComputerChoice() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)]
}
