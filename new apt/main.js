// // window is for manipulating the browser this object has all thing such as document or consol
// window.alert('Hello world');
// window.print();
// // when I write document I will create and html document 
// document.write('hello world');

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

//Also there is other ways to search in a string such as includes() and startsWith() and endsWith()
// includes(character, where to start) returns true if the string contains the character and false if
 console.log(str1.includes("l")); // this will return true
console.log(str1.includes("l", 3)); // this will return false because it will start searching from index 3
// startsWith(character, where to start) returns true if the string starts with the character and
console.log(str1.startsWith("H")); // this will return true
console.log(str1.startsWith("H", 1)); // this will return false because it
//endsWith(character, where to start) returns true if the string ends with the character and false if not
console.log(str1.endsWith("o")); // this will return true
console.log(str1.endsWith("o", 4)); // this will return false because it



//slicing is a method that returns a part of the string
// slice(start, end) returns the part of the string from start to end (end is not included) which means if I write 3 at the end it will return the index 2
console.log(str1.slice(0, 3)); // this will return Hel
console.log(str1.slice(2, 4)); // this will return l
//Nb for slicing we also have substring(start, end) which is similar to slice but it doesn't accept negative values and it will return the part of the string from start to end (end is not included) which means if I write 3 at the end it will return the index 2
// and substr(start, length) which is similar to slice but it accepts negative values and it will return the part of the string from start to start + length (length is included) which means if I write 3 at the end it will return the index 2
console.log(str1.substring(0, 3)); // this will return Hello
console.log(str1.substring(-1, -3)); // this will return nothing because substring doesn't accept negative values
console.log(str1.substr(0, 3)); // this will return Hello
console.log(str1.substr(-3, 2)); // this will return ll because it will start from the end of the string and return the next two characters

// spliting is a method that splits the string into an array of strings
// split(separator, limit) returns an array of strings that are separated by the separator
let str2 ="Moussa Ahmed Ayoub Rachid Hassan";
console.log(str2.split(" ")); // this will return an array of strings that are separated by the space
console.log(str2.split(" ", 2)); // this will return only two values which are ["Moussa", "Ahmed"]
console.log(str2.split("")); // this will return an array of strings that are separated by the empty string which means it will return each character as a string



/* arrays is a collection of values that are stored in a single variable
we can create an array by using the array constructor or by using the array literal notation
*/
 let arr1 = ["hassan", "moussa", "ayoub", "rachid", ["ahmed", "salah", "mohamed", [1, 2, 3]]];
console.log(arr1); // this will return the array
// we can access the values of the array by using the index of the value
console.log(arr1[0]); // this will return hassan
console.log(arr1[4][0]); // this will return ahmed
console.log(arr1[4][3][0]); // this will return 1
// we can also use the length property to get the length of the array
console.log(arr1.length); // this will return 5
console.log(arr1[4].length); // this will return 4
console.log(arr1[4][3].length); // this will return 3   
//we can also replace the value of the array by using the index of the value
// for example I want arr1[4][1] to be changed from salah to "Yahya"
//arr1[4][1] = "Yahya";
arr1[4][1] = "Yahya";
console.log(arr1[4][1]);

// we can also add values to the array by using the push() method or unshift() method
// push() method adds the value to the end of the array
let arr2 = ["hassan", "moussa", "ayoub", "rachid"];
arr2.push("ahmed");
console.log(arr2); // this will return ["hassan", "moussa", "ayoub", "rachid", "ahmed"]
// unshift() method adds the value to the beginning of the array
arr2.unshift("salah");
console.log(arr2); // this will return ["salah", "hassan", "moussa", "ayoub", "rachid", "ahmed"]
// we can also remove values from the array by using the pop() method or shift() method
// pop() method removes the value from the end of the array 
arr2.pop();
console.log(arr2); // this will return ["salah", "hassan", "moussa", "ayoub", "rachid"]
// shift() method removes the value from the beginning of the array
arr2.shift();
console.log(arr2); // this will return ["hassan", "moussa", "ayoub", "rachid"]

// slice and splice are two methods that are used to manipulate arrays
// slice(start, end, ) returns a part of the array from start to end (end is not included)
console.log(arr2.slice(0, 2)); // this will return ["hassan", "moussa"]

// splice(start, deleteCount, item1, item2, ...) removes the values from the array starting from start and removes deleteCount values and adds item1, item2, ... to the array
//  N.B: splice will change the original array and also it is considered as the most powerful method in arrays
// deleteCount is the number of values to be removed from the array you if you don't want to remove any values you can put 0
console.log(arr2.splice(0, 2, "ahmed", "salah")); // this will remove the first two values from the array and add "ahmed" and "salah" to the array
console.log(arr2); // this will return ["ahmed", "salah", "ayoub", "rachid"]

//for searching in an array we have three methods indexof, lastindexof and includes they take an item and start (item, start)
// the first to gives you the index of the first occurrence of the item
console.log(arr2.indexOf("ayoub")); // this will return 2
console.log(arr2.indexOf("ayoub", 3)); // this will return -1 because it will start searching from index 3
console.log(arr2.lastIndexOf("ayoub")); // this will return 2
console.log(arr2.lastIndexOf("ayoub", 1)); // this will return -1 because it will start searching from index 1

//includes(item, start) returns true if the item is in the array and false if not
console.log(arr2.includes("ayoub")); // this will return true
console.log(arr2.includes('fatima', 1)) // this will return false because there is no name such as fatima in the array

//sort() method will organize your array in ascending order and also it will change the original array
// it will sort the array based on the unicode of the characters so if you have numbers in your array it will sort them based on the unicode of the characters
let arr3 = [1, 2, 4, 5, 7, 6, 8, 9, 3];
arr3.sort();
console.log(arr3); // this will return [1, 2, 3, 4, 5, 6, 7, 8, 9]

//reverse() method will reverse the order of the array and also it will change the original array
console.log(arr3.reverse()); // this will return [9, 8, 7, 6, 5, 4, 3, 2, 1]

//there is 2 ways to concat two arrays or more the first one is by using + but this will not change the original arrays it will create a new array and its type is going to be a string 
let arr4 = ["hassan", "moussa", "ayoub"];
let arr5 = ["rachid", "ahmed", "salah"];
arr5 += arr4; // this will return "rachid,ahmed,salah,hassan,moussa,ayoub"
console.log(arr5); // this will return "rachid,ahmed,salah,hassan,moussa,ayoub"
// the second one is by using the concat() method which will change the original array and it will return a new array
console.log(arr5.concat(arr4)); // this will return ["rachid", "ahmed", "salah", "hassan", "moussa", "ayoub"]

// the difference between the two methods is that the first one will return a string and the second one will return an array
// also there is a method called join() which will join the array into a string and you can also change the separator
console.log(arr4.join(" - ")); // this will return "rachid - ahmed - salah - hassan - moussa - ayoub"


//some usefull methods in js 
//first one is toUppercase() this will help you it the string was lowercase will be uppercased
 x = 'moussa'
 console.log(x.toUpperCase); //this will turn 'moussa' to "MOUSSA"

 //we also have toLowerCase() this will go the opposite of uppercasing 
 let y = 'AYOUB';
 console.log(y.toLowerCase); // the string is going to be lowercased

 // we also have trim(method) this will remove space in the beginning and the end of strings 
 let askemail = prompt().toLowerCase().trim();
 let email = "sabbarmoussa@gmail.com";

 console.log(email == askemail);

 //comparing values and datatypes
 // in order to compare between two or more values, datatypes there are some signs that will lead you to do this 
 // the first one is ' == ' this gives you the right to ask if "a" == "b" but it works only for values it doesnt care about data types
 let a = 10;
 let b = "10";
 console.log(a == b); // this will show you true even if the data type of variable "b" is string
// but there is another sign wich is " === " this makes it comparing values and data types 
console.log( a === b); // this will show you false because a's data type is number and b is a string
console.log(a === 10); // this will show true because they are numbers and they have the same value

// there is also bigger than > and lower than < which give you the ability to compare between two values 
console.log(a < 10); //this will show false because the values are equale
console.log(a > 9); // this will show true because a's value is bigger than 9 

// there is also bigger than or equal >= and lower than or equal <= 

console.log(a <= 10); //this will show true  because one the conditions which is = is true 
console.log(a >= 9); // this will show true because a's value is bigger than 9 

// != this means doesn't equal 
console.log(a != 9); // this will show true that 10 doesnt equal 9
console.log(a != 10); // this will show false because a has the same value o  10 

