// to start condition statement we use the word if and it takes the condition and the code 
/*
if (condition){
    code
}
*/
let num1 = prompt("choose the first number that will be compared").toLowerCase();
let num2 = prompt("choose the second number ");
if (num1 < num2){
    document.write("number two is bigger than number one")
}
else if (num1 > num2){
    document.write("number one is bigger than number two")
}
else{
    document.write("the two numbers are equal")
};

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