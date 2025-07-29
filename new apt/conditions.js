// to start condition statement we use the word if and it takes the condition and the code 
/*
if (condition){
    code
}
*/
// let num1 = prompt("choose the first number that will be compared").toLowerCase();
// let num2 = prompt("choose the second number ");
// if (num1 < num2){
//     document.write("number two is bigger than number one")
// }
// else if (num1 > num2){
//     document.write("number one is bigger than number two")
// }
// else{
//     document.write("the two numbers are equal")
// };

let role = prompt("Enter your role (admin/moderator/user):").toLowerCase();
if (role === "admin") {
    document.write("<br>Welcome, admin!");
}
else if (role === "moderator") {
    document.write("<br>Welcome, moderator!");
}
else if (role === "user") {
    document.write("<br>Welcome, user!");
}
else{
    document.write("<br> Please! choose your role");
}

/* another example of condition statement*/
let grade = prompt("Enter your grade (0-100):");
if (grade ==100){
    document.write("<br> Perfect score!");
}
else if (grade >= 90) {
    document.write("<br> Excellent!");
}
else if (grade >= 80) {
    document.write("<br> Very good!");
} 
else if (grade >= 70) {
    document.write("<br> Good!");
}
else if (grade >= 50) {
    document.write("<br> Pass!");
}
else{
    document.write("<br> Fail!");
}
// another to create a condition statement is by using the symbols ? and : , ? refers to the if statement and : refers to the esle statement
// also you can write the condition statement in one line or in multiple lines
let age = prompt("enter your age: ") 
age >= 18? document.write("<br>you have the access to the website") 
:document.write("<br>you are not allowed to access the website");