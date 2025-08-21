// Write code below 💖

let rating = Math.floor(Math.random()*3+1);
if (rating === 1){
  console.log("🌟 is worth walking to.")
}
else if (rating === 2){
  console.log("🌟🌟 is worth driving to.")
}
else if (rating === 3){
  console.log("🌟🌟🌟 is worth flying to.")
}
else{
  console.log("Invalid.")
}



// which day 
// Write code below 💖
let day = Math.floor(Math.random() * 7) + 1;
if (day === 1 || day === 2 || day === 3 || day === 4){
  console.log("Not Friday, yet!")
}
else if (day === 5){
  console.log("TGIF 🕺")
}
else if (day === 6 || day === 7){
  console.log("Yay, weekends! 🙌")
}
else{console.log("Wait, what day is it?")}