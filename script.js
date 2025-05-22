// game.js

// Create Scores
let humanScore = 0;
let computerScore = 0;

// Function to get a random number for computer
function getComputerNumber() {
  const number = Math.floor(Math.random() * 10) + 1;
  console.log("Computer chose number:", number);
  return number;
}

// Function to get human number using prompt
function getHumanNumber() {
  const input = prompt("Enter a number between 1 and 10:");
  const number = parseInt(input);
  console.log("You chose number:", number);
  return number;
}

// Function to check if sum is odd or even
function checkOddOrEven(sum) {
  if (sum % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Main function to play one round
function playRound() {
  const computerNumber = getComputerNumber();
  const humanNumber = getHumanNumber();
  const sum = computerNumber + humanNumber;

  console.log("Sum of both numbers:", sum);

  const result = checkOddOrEven(sum);

  if (
    (computerNumber % 2 === 0 && result === "Even") ||
    (computerNumber % 2 !== 0 && result === "Odd")
  ) {
    console.log("Computer wins this round!");
    computerScore++;
  } else {
    console.log("You win this round!");
    humanScore++;
  }

  console.log("Current Score => Human:", humanScore, "| Computer:", computerScore);
}

// Play the game 5 times
function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log("Round", i + 1);
    playRound();
  }

  console.log("Final Scores => Human:", humanScore, "| Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Oops! Computer won the game.");
  } else {
    console.log("It's a tie!");
  }
}

// Start the game
playGame();

