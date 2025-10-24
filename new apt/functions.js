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
let newArr = ["Burger", "Tacos", "Orange juice"]
lunches.push(newArr);
// showLunchMenu
function showLunchMenu(arr){
if (lunches.includes(arr)){
  return `"Menu items: ${arr.join(",")}`
}
else{return "The menu is empty." }

}
console.log(showLunchMenu(lunches))