// Write code below 💖

console.log("Welcome to Rock, Paper, Scissors");
console.log("0 refers to Rock, 1 refers to Paper and 2 refers to Scissors");

let player =  Number(prompt("Choose your sign: "));
console.log(typeof player)
let computer = Math.floor(Math.random() * 3);

if (computer == 0 && player == 0) {
  console.log(`Computer choosed: Rock
    Player choosed: Rock
    Draw.`);
} // Rock vs rock
else if (computer == 1 && player == 1) {
  console.log(`Computer choosed: Paper
    Player choosed: Paper
    Draw.`);
} // paper vs paper
else if (computer == 2 && player == 2) {
  console.log(`Computer choosed: Scissors
    Player choosed: Scissors
    Draw.`);
} // scissors vs scissors
else if (computer == 1 && player == 0) {
  console.log(`Computer choosed: Paper
    Player choosed: Rock
    Lose.`);
} // paper vs rock
else if (computer == 2 && player == 0) {
  console.log(`Computer choosed: Scissors
    Player choosed: Rock
    win.`);
} // scissors vs rock
else if (computer == 0 && player == 1) {
  console.log(`Computer choosed: Rock
    Player choosed: Paper
    Win.`);
} // rock vs paper
else if (computer == 0 && player == 2) {
  console.log(`Computer choosed: Rock
    Player choosed: Scissors
    lose.`);
} //rock vs scissors
else {
  console.log("Please choose between 0 and 2");
}

console.log(`This is what computer choose: ${computer}
and This is what player choose: ${player}`);
