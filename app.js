//create secret #
var secretNum = 4;

//ask for a guess
var guess = prompt("guess a number");
console.log(guess);
var numGuess = Number(guess);
//check the guess
if (numGuess === secretNum) {
  console.log("nice guess");
} else if (numGuess < secretNum) {
  console.log("too low keep guessing");
} else if (numGuess > secretNum) {
  console.log("too high keep guessing");
}
