// Write code below 💖

console.log("Welcome to Rock, Paper, Scissors")
console.log("0 refers to Rock, 1 refers to Paper and 2 refers to Scissors")

let player = 2;
let computer = Math.floor(Math.random()*3);

if (computer == 0 && player == 0 ){console.log("Draw")} // Rock vs rock
else if(computer == 1 && player == 1 ){console.log("Draw")} // paper vs paper
else if(computer == 2 && player == 2 ){console.log("Draw")} // scissors vs scissors
else if (computer == 1 && player == 0){console.log("lose")} // paper vs rock
else if (computer == 2 && player == 0){console.log("win")} // scissors vs rock 
else if (computer == 0 && player == 1){  console.log("win")} // rock vs paper 
else {console.log("lose")} //rock vs scissors 

console.log(`This is what computer choose: ${computer}
and This is what player choose: ${player}`)