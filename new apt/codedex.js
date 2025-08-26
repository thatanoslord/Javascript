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
