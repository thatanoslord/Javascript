// window is for manipulating the browser this object has all thing such as document or consol
window.alert('Hello world');
window.print();
// when I write document I will create and html document 
document.write('hello world');

// cosole is and object to controle consoles command such as giving error of trying to know a function does it work or not
console.log("Hello world");
console.error('test');

// N.B you can either use window or not it is your choice to 
// JavaScript has a process called automatic semicolon insertion which means after every function the compiler will add a semicolon to your code but does it mean I don't need to write semi colon after myfunction??
// No and biiiig no because if I compressed my code it all of it will be in one line and thats gonna make a mess

/*
 types of data ins Java script:
-String is a bunch of character and we write the between either single quote or double quoation '' or "",
-Number: is a number in js every number is number even decimals be aware that if u put a number betweeen "" it will be cosidered as a string
-boolean which is true or false 
-Null its type is Null but the browser will show u its type as object but js doesnt consider it as an object
-undefined is when a variable doesnt have a value 
*/
document.write(typeof"Hello");
document.write(typeof 1);
document.write(typeof"1");
document.write(typeof true);
document.write(typeof null);
let x;
document.write(typeof x);

/*
a variable is a space given to var in a memory 
we declare a variable by using either (var, let or const)
var and let has the same features 
but const is used to give a value for variables that aren't going to be changed in the future
*/

// concatenation is when you want to add to data types into each other there is two ways to do concatenation first one by using "+" second one is by using back tick ``

let f_name = "Moussa";
let l_name = "Sabbar";
let age = 27;

console.log("My name is" + f_name + " " + l_name + "and I am " + age)
console.log(`My name is ${f_name} ${l_name} and I am ${age}`)

// calculation = maths we have addition + , subtraction - , myltiplication * , devide / , moderation %,  exponentiation **
// NB: addition sign can be used to concatenate or to make addition but the others can not:
let numb1 =10;
let numb2 =2
console.log(numb1 + numb2);
console.log(numb1 - numb2);
console.log(numb1 * numb2);
console.log(numb1 / numb2);
console.log(numb1 % numb2);
console.log(numb1 ** numb2);
// there is a way to make it easier:
let num = 10;

num += 2;
console.log(num);
num -= 2;
console.log(num);
num *= 2;
console.log(num);
num /= 2;
console.log(num);
num %= 2;
console.log(num);
num **= 2;
console.log(num);

// In javascript you can turn a string into a number by using using either maths signs or by adding a math sign before the string
 let str = "10";
console.log(str + "10"); // this will concatenate the string with the number
console.log(str - "10"); // this will turn the string into a number and then subtract it
console.log(str * "10"); // this will turn the string into a number and then multiply it
console.log(str / "10"); // this will turn the string into a number and then divide 
// but if you want to turn a string into without making calculations you can use the sign before the string
console.log( typeof +str); // this will turn the string into a number
console.log( typeof -str); // this will turn the string into a number
console.log(  -null); // this will turn the null into a number which is 0
console.log(  -undefined); // this will turn the undefined into a number which is NaN (Not a Number)
console.log(  +true); // this will turn the string into a number because true is 1 and false is 0
console.log(  +false); // this will turn the string into a number because true is 1 and false is 0

