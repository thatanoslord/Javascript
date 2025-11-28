//functions are use to avoid doing repeatitive codes in other words hard coding and functions are simpling your code and make it easy to read
//how to write a function?? what is its syntax
//function name(parameter, para..){}
//parameter looks like a variable but depends on every function for example

// hard code

// let product = price + tax;
// let result = product + ads;
// if I want to measure another product I need to repeat the same calcul which is not good that's why we have the module function

function final_product(price, tax, ads) {
  let product = price + tax;
  result = product + ads;
  return result;
}
console.log(`this is the price of product x: ${final_product(100, 2.5, 10)}`);

//return is a function keyword that stores the result of the function we created,
//N.B return is the last word we put in the function what comes after it it won't be red by the console

// example

function person(age) {
  let days = age * 365;
  return days;
}
let x = person(28);
console.log(`your Age in days is: ${x}`);

function personhours(age) {
  let hours = x * 24;
  return hours;
}
console.log(`your Age in hours is: ${personhours()}`);

// Function of a loan Qualification checker

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

// Celsius to Fahrenheit

function convertCtoF(celsius){
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}
console.log(convertCtoF(15))

//CHECK IF THE YEAR IS A LEAP YEAR FUNCTION 

let year = 2024;
function isLeapYear(a){
  if( a % 400 ==0 || (a % 4 == 0 && a % 100 !==0 )){
    return `${a} is a leap year.` 
  }
  else {
    return `${a} is not a leap year.` 
  }
}
let result = isLeapYear(year);
console.log(result)

// Implement the Truncate a String Algorithm

function truncateString(a , b){
  if (a.length > b){
    let sentence = a.slice(0,b);
    let sentence1 = sentence.concat("...")
    return sentence1;
  }
  else{
    return a;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// a Confirm ending tool without using endsWith() method

function confirmEnding(a, b){
  let sentence = a.slice(-b.length)
  if (sentence ==  b){
    return true
  }
  else{
    return false
    } 
  
}
console.log(confirmEnding("Congratulation", "on"))

// showLunchMenu
function showLunchMenu(arr){
if (arr === 0){
  return console.log(`Menu items: ${arr.join(", ")}`)
}
else{return "The menu is empty." }

}
console.log(showLunchMenu(arr))


//Golf score translatore
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(a,b){
  if (a >=b && b ===1){
   return names[0]
  }
  else if(b<=a-2){
    return names[1]
  }
  else if(a-1 ===b ){
    return names[2]
  }
  else if(a === b  && a >= 3){
    return names[3]
  }
  else if(a - b ===-1 && a >= 3 ){
    return names[4]
  }
  else if(a - b ===-2 && a >= 3 ){
    return names[5]
  }
  else if(a - b ===-4 && a >= 3 ){
    return names[6]
  }
 
}
console.log(golfScore(3,2))

//what is an object and jason in JS
//object is a data structure that can store multiple values in terms of key value pairs
// jason is a data format that is used to store and exchange data
// how to create an object
//syntax
// let object_name = {key1: value1, key2: value2, key3: value3}
// example
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// this is a mini project made for checking recipeces while using object functions and if else statements

const recipes = [];

const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

function getAverageRating(ratings) {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
  return total / ratings.length;
}

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return 'easy';
  } else if (cookingTime <= 60) {
    return 'medium';
  } else {
    return 'hard';
  }
}

const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating);

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients)
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime)

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)

const recipe3AverageRating = getAverageRating(recipe3.ratings);
console.log(recipe3AverageRating);

const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(recipe3TotalIngredients);

const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe3DifficultyLevel);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)

console.log(recipes)


// getting random answer for question using function and objects 



let questions =[{
  category: "country",
  question: "If you could live in any country for a year, which one would you choose and why?",
  choices: ["Japan", "France", "USA"],
  answer: "Japan"}, {
  category: "inventions",
  question: "What invention do you think changed the world the most?",
  choices: ["phones", "internet", "cars"],
  answer: "internet"}, {
  category: "animals",
  question: "If animals could talk, which one do you think would be the funniest to have a conversation with?",
  choices: ["monkies", "cats", "possom"],
  answer: "cats"}, {
  category: "space or ocean",
  question: "Would you rather explore outer space or the deep ocean?",
  choices: ["ocean", "space", "land"],
  answer: "space"}, {
  category: "skills",
  question: "What’s one skill you wish you could instantly master?",
  choices: ["focusing", "learning", "breathing"],
  answer: "focusing"}];

           
function getRandomQuestion(arrquest){
  let randomQuest = arrquest[Math.floor(Math.random()*arrquest.length)]
  return randomQuest;
}

let randomQuest = getRandomQuestion(questions)
let choice = randomQuest.choices
console.log(randomQuest)
console.log("==============================")


function getRandomComputerChoice(arrChoice){
  return arrChoice[Math.floor(Math.random()*arrChoice.length)]
}
console.log(getRandomComputerChoice(choice))
console.log("==============================")

function getResults(quest, compAnswer){
  if(quest.answer === compAnswer){
    return "The computer's choice is correct!"
  }
  else{return `The computer's choice is wrong. The correct answer is: ${quest.answer}` }
}

console.log(getResults(randomQuest, getRandomComputerChoice(choice)))  

// Build a Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords (records, id, prop, value){
  if (value === ""){
    delete  records[id][prop]
    return records
  }
  else if (prop != "tracks" && value != ""){
    records[id][prop] = value;
    return records
  }
  else if(prop === "tracks" && value != "" && !records[id].tracks){
    records[id].tracks = [value]
    return records
  }
  else if (prop ==="tracks" && value !== ""){
    records[id].tracks.push(value)
    return records
  }
} 

// a sentence analyzer that will take a sentence and get the count for the number of words, vowels,
 function getVowelCount(sentence){
  let number = 0;
  for (let letter of sentence.toLowerCase()){
    if( letter === "a"|| letter === "e"|| letter === "u"|| letter === "i"|| letter === "o"){
      number++
    }
  }
  return number;
}
console.log(getVowelCount("Apples are tasty fruits"))
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`)
