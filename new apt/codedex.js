// Write code below 💖

let rating = Math.floor(Math.random() * 3 + 1);
if (rating === 1) {
  console.log("🌟 is worth walking to.");
} else if (rating === 2) {
  console.log("🌟🌟 is worth driving to.");
} else if (rating === 3) {
  console.log("🌟🌟🌟 is worth flying to.");
} else {
  console.log("Invalid.");
}

// which day
// Write code below 💖
let day = Math.floor(Math.random() * 7) + 1;
if (day === 1 || day === 2 || day === 3 || day === 4) {
  console.log("Not Friday, yet!");
} else if (day === 5) {
  console.log("TGIF 🕺");
} else if (day === 6 || day === 7) {
  console.log("Yay, weekends! 🙌");
} else {
  console.log("Wait, what day is it?");
}

// coin flip
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}

// american years:
let year = 1925;

if (year >= 1920 && year <= 1929) {
  console.log("Roaring Twenties");
} else if (year >= 1930 && year <= 1939) {
  console.log("Dirty Thirties");
} else if (year >= 1940 && year <= 1949) {
  console.log("Fighting Forties");
} else if (year >= 1950 && year <= 1959) {
  console.log("Fabulous Fifties");
} else if (year >= 1960 && year <= 1969) {
  console.log("Swinging Sixties");
} else {
  console.log("Year out of range");
}

// exercising task:
let randomNumber = Math.floor(Math.random() * 4);

if (randomNumber === 0) {
  console.log("10 Push-ups");
} else if (randomNumber === 1) {
  console.log("10 Sit-ups");
} else if (randomNumber === 2) {
  console.log("10 Squats");
} else {
  console.log("10 Jumping Jacks");
}
/*
Now we are going to focus on while loop

*/

//goose or duck 

while (randomNumber !== 7) {
  console.log("Duck 🦆");
  randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");

// lucky number


const luckyNumber = 7

let guess = Math.floor(Math.random() * 10) + 1;
while (guess !== luckyNumber){
  console.log(`Nope, it isn't ${guess}`)
  guess = Math.floor(Math.random() * 10) + 1
}
console.log(`My lucky number is ${guess}`);

// not to tell lies


for (i = 0; i < 100; i++ ){
console.log("I Must Not Tell Lies")
};

// even and odds continue and break 

for (i=1; i < 50; i++){
  if (i==1){
    continue;
  }
  if (i==43){
    break;
  }
  console.log(i)
}

// based numbers 
// Write code below 💖

let myNumber = 27;
let binary ="";
for (myNumber ; myNumber > 0 ; myNumber = Math.floor(myNumber / 2)){
  let remainder = myNumber % 2;
  binary = remainder + binary
}
console.log("binary: " + binary)

// blast of 
// Write code below 💖
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("To infinity and beyond! 🚀");

//Swag Raffle

// Write code below 💖

let count = 0;
let targetNumber = Math.floor(Math.random()*100);
while(count < 10){
  let drawNumber = Math.floor(Math.random()*100);
  if ( drawNumber === targetNumber){
    count++
    console.log("Match")
  }
  else{
    console.log("No match")
  }
}
console.log(`The number ${targetNumber} was found 10 times.`)


//Odd cube:
// Write code below 💖

let limit = 5;

let total =0;
for (let i = 1; i <= limit; i+=2 ){
  let cube = i ** 3;
  total = total + cube 
}
console.log(total)

//fibonacci 
// Write code below 💖
let firstFib = 0;
let secondFib = 1;
console.log(firstFib)
console.log(secondFibFib)
for (let i = 2 ; i < 10; i ++){
  let nextFib = firstFib + secondFib;
  console.log(nextFib)
  firstFib = secondFib;
  secondFib = nextFib;
}
