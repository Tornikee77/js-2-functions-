
let player1 = prompt("chose:Rock,Paper, or Scissors") .toLowerCase();
let player2 = prompt("chose:Rock,Paper, or Scissors").toLowerCase();

function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "it's a tie!";
  } else if (player1 === "rock") {
    if (player2 === "scissors") return "player1 wins!";
  } else if (player1 === "scissors") {
    if (player2 === "paper") return "player1 wins!";
  } else if (player1 === "paper") {
    if (player2 === "rock") return "player1 wins!";
  }
  if (player2 === player1) {
    return "it's a tie!";
  } else if (player2 === "rock") {
    if (player1 === "scissors") return "player2 wins!";
  } else if (player2 === "scissors") {
    if (player1 === "paper") return "player2 wins!";
  } else if (player2 === "paper") {
    if (player1 === "rock") return "player2 wins!";
  }
}

console.log(rockPaperScissors(player1, player2));
