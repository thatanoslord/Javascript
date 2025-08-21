// Write code below 💖

console.log("Welcome to Rock, Paper, Scissors");
console.log("0 = Rock, 1 = Paper, 2 = Scissors");

let player = parseInt(prompt("Choose your sign (0, 1, or 2): "));
let computer = Math.floor(Math.random() * 3);

if (player < 0 || player > 2 || isNaN(player)) {
  console.log("Please choose a valid number between 0 and 2.");
} else if (computer === player) {
  console.log(`Computer chose: ${
    computer === 0 ? "Rock" : computer === 1 ? "Paper" : "Scissors"
  }
Player chose: ${player === 0 ? "Rock" : player === 1 ? "Paper" : "Scissors"}
It's a Draw.`);
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  console.log(`Computer chose: ${
    computer === 0 ? "Rock" : computer === 1 ? "Paper" : "Scissors"
  }
Player chose: ${player === 0 ? "Rock" : player === 1 ? "Paper" : "Scissors"}
You Win!`);
} else {
  console.log(`Computer chose: ${
    computer === 0 ? "Rock" : computer === 1 ? "Paper" : "Scissors"
  }
Player chose: ${player === 0 ? "Rock" : player === 1 ? "Paper" : "Scissors"}
You Lose!`);
}

console.log(`This is what computer chose: ${computer}
And this is what player chose: ${player}`);
