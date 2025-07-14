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









