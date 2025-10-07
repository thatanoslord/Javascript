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
  return result
}
console.log(`this is the price of product x: ${final_product(100, 2.5, 10)}`);


//return is a function keyword that stores the result of the function we created, 
//N.B return is the last word we put in the function what comes after it it won't be red by the console

// example

function person(age){
    let days = age *365;
    return days

}
console.log(`your Age in days is: ${person(27)}`)