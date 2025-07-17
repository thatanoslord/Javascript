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

// also there is another way to turn a string into a number by using the Number() function or parseInt() or parseFloat() functions
// the difference between Number and parseInt is if the string has characters in it Number will return NaN but parseInt will return the number before the character
// but still parseInt will not work if the string start with a character or with decimals it will return the number before the decimal point
// thats why we have parseFloat() so the string will trun into decimal

console.log(Number("4"));
console.log(Number("4 str"));
console.log(parseInt("4 str"));
console.log(parseInt(" another str 4.5 str"));
console.log(parseFloat("4.5 "));

//Number is a objject that has many methods in it such isNaN(), Maxvalue, minvalue, issafeinteger(), isInteger()..
// isNaN() is a function that checks if the value is NaN or not
console.log(Number.isNaN("4 str"));
console.log(Number.isNaN("4 str" - 6)); // this will return false because the string will be converted to a number and then subtracted

// Maxvalue and minvalue are the maximum and minimum values that a number can have in javascript
console.log(Number.MAX_VALUE); // this will return the maximum value that a number can have in javascript
console.log(Number.MIN_VALUE); // this will return the minimum value that a number can have in

//maxsafeinteger and minsafeinteger are the maximum and minimum safe integers that a number can have in javascript
console.log(Number.MAX_SAFE_INTEGER); // this will return the maximum safe integer that a number can
console.log(Number.MIN_SAFE_INTEGER); // this will return the minimum safe integer that a number can have in javascript

//issafeinteger() is a function that checks if the number is a safe integer or not
console.log(Number.isSafeInteger(34567890854567)); // this will return false because 34567890854567 is not a safe integer

//issafeinteger() is a function that checks if the number is an integer or not
console.log(Number.isInteger(1667888908765)); // this will return true because 1667888908765 is an integer

//in order to tur a number into a string you have two ways to do it the first one is by using the object string() or by using the toString() method
let num1 = 10;
let num2 = 20;
console.log(typeof String(numb1)); // this will return a string
console.log(typeof num1.toString()); // this will return a string

//string is a sequence value of characters and it has many methods such as:
//repeat() which repeats the string a certain number of times
let str1 = "Hello";
console.log(str1.repeat(3)); // this will return HelloHelloHello

//length() which returns the length of the string
console.log(str1.length); // this will return 5

//access for this we use indexing which used by the square brackets []
// the first character is at index 0 and the last character is at index length -
console.log(str1[0]); // this will return H
console.log(str1[str1.length - 1]); // this will return o

//searching in a string we have three methods indexOf(), lastIndexOf() and charAt()
// indexOf(character, where to start) returns the index of the first occurrence of the string 
console.log(str1.indexOf("l")); // this will return 2
console.log(str1.indexOf("l", 3)); // this will return 3 because it will start searching from index 3
// lastIndexOf(character, where to start) returns the index of the last occurrence of the string
console.log(str1.lastIndexOf("l")); // this will return 3
console.log(str1.lastIndexOf("l", 2)); // this will return 2 because it will start searching from index 2
// charAt(index) returns the character at the specified index
console.log(str1.charAt(0)); // this will return H  
console.log(str1.charAt(str1.length - 1)); // this will return o
//the difference between charAt() and indexing is that charAt() will return an empty string if the index is out of range but indexing will return undefined

//slicing is a method that returns a part of the string
// slice(start, end) returns the part of the string from start to end (end is not included) which means if I write 3 at the end it will return the index 2
console.log(str1.slice(0, 3)); // this will return Hello
console.log(str1.slice(2, 4)); // this will return ll

// spliting is a method that splits the string into an array of strings
// split(separator, limit) returns an array of strings that are separated by the separator
let str2 ="Moussa Ahmed Ayoub Rachid Hassan";
console.log(str2.split(" ")); // this will return an array of strings that are separated by the space
console.log(str2.split(" ", 2)); // this will return only two values which are ["Moussa", "Ahmed"]
console.log(str2.split("")); // this will return an array of strings that are separated by the empty string which means it will return each character as a string