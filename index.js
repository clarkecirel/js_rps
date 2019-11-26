var userChoice;
var comp;

var winner = document.getElementById('winner');
var loser = document.getElementById('loser');
var tied = document.getElementById('tied');
var rock = document.getElementById("rock"); // rock button el
var paper = document.getElementById("paper"); // paper button el
var scissors = document.getElementById("scissors"); // scissors button el
var myChoice = document.getElementById("myChoice"); // user choice el
var cpuChoice = document.getElementById("cpuChoice"); // comp choice el
var verdict = document.getElementById("verdict"); // verdict el

// USER'S CHOICE
// *************
rock.addEventListener("click", function(){
  userChoice = 0;
  myChoice.innerHTML = "You chose: Rock";
  Computer();
  compare();
});
paper.addEventListener("click", function(){
  userChoice = 1;
  myChoice.innerHTML = "You chose: Paper";
  Computer();
  compare();
});
scissor.addEventListener("click", function(){
  userChoice = 2;
  myChoice.innerHTML = "You chose: Scissor";
  Computer();
  compare();
});

// COMP CHOICE
function Computer() {
  // generates a random number between 0-2 
  randomNum = Math.floor(Math.random() * 3);

  // generate a random number and assign it to one of the 3 choices
  if (randomNum === 0) { 
    comp = "Rock";
  } else if (randomNum === 1) { 
    comp = "Paper";
  } else { 
    comp = "Scissor";
  }
  cpuChoice.innerHTML = "Computer chose: " + comp;
  
}

// OUTCOMES
function resultsTie() {
  verdict.innerHTML = "We Tied.."; // tie
}
function resultsWinner() {
  verdict.innerHTML =  "You Win!"; // win
}
function resultsLoser() {
  verdict.innerHTML = "You Lose";
}

// COMPARISON
function compare() {
  // tie
  if (userChoice ===  randomNum) { 
    resultsTie();
  } 

  // user chooses rock
  if (userChoice === 0 && randomNum === 1) { 
    resultsLoser();
  } 
  else if (userChoice === 0 && randomNum === 2) { 
    resultsWinner();
  }

  // user chooses paper  
  if (userChoice === 1 && randomNum === 0) { 
    resultsWinner();
  }
  else if (userChoice === 1 && randomNum === 2) { 
    resultsLoser();
  }

  // user chooses scissor
  if (userChoice === 2 && randomNum === 0) { 
    resultsLoser();
  } 
  else if (userChoice === 2 && randomNum === 1) { 
    resultsWinner();
  }

}  
