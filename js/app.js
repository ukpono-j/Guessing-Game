let guess = document.getElementById('guess');
let submitGuess = document.getElementById('submitGuess');
let feedback = document.getElementById('feedback');

console.log('it works')

// generate random number
const rand = Math.floor(Math.random() * 20) + 1;
console.log("we good");

// // number of guess trial
let trial = 5;

function checkGuess() {
  let myGuess = guess.value;
  while (trial < 5) {
    if (myGuess === rand) {
      feedback.textContent = ("Yaay Correct!");
    } else if (myGuess > rand) {
      feedback.textContent = ("Yikes! " + myGuess + "Too high, Try Again!");
    } else if (myGuess < rand) {
      feedback.textContent = ("Yikes! " + myGuess + "Too low, Try Again!");
    }
  }
}
submitGuess.addEventListener('onclick', checkGuess);
console.log('working') 


