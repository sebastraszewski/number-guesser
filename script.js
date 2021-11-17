let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
}
function compareGuesses(userGuess,computerGuess, secretNumber){
  getAbsoluteDistance(userGuess,computerGuess)
  return (Math.abs(secretNumber-userGuess)<=Math.abs(secretNumber-computerGuess)) ? true : false;
}
function updateScore(winner){
  if (winner==='human'){
    humanScore++;
  } else if (winner = 'computer'){
    computerScore++;
  }
}
function advanceRound(){
  currentRoundNumber++;
}

function getAbsoluteDistance(number1,number2){
  return Math.abs(number1-number2);
}


