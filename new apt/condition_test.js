// first exercise
let num1 = prompt("choose the first number that will be compared");
let num2 = prompt("choose the second number that will be compared");
let num3 = prompt("choose the third number that will be compared");

if (num1 > num2 && num1 > num2){
    document.write(num1 +" is bigger than " + num2 +" and " + num3);
}
else if (num2 > num1 && num2 > num3){
    document.write(num1 +" is bigger than " + num2 +" and " + num3);
}
else { 
document.write(num3 +" is bigger than " + num1 +" and " + num2);
}

//second exercise
let username = prompt("username: ");
let password = prompt("password: ");

if ( username === "admin" && password === "1234"){
    document.write("تم تسجيل الدخول بنجاح");
}
else{
    document.write("اسم المستخدم أو كلمة السر غير صحيح");
}

// exercise 3
let letter = prompt("Enter one letter: ").toLowerCase;
switch(letter){
    case "a" || "e" || "i" || "o" || "u":
        document.write("هذا حرف صوتي")
        break;
    default :
        document.write("هذا حرف ساكن")
        break;
};

//exercise 4
let day = prompt("Enter a day: ").toLowerCase;
switch(day){
    case "monday":
        document.write("work")
        break;
    case "tuesday":
        document.write("Normal day")
        break;
    case "wedensday":
        document.write("Normal day")
        break;
    case "thursday":
        document.write("Normal day")
        break;
    case "friday":
        document.write("Weekend prep")
        break;
    case "saturday":
         document.write("Rest")
        break;
    case "sunday":
        document.write("Rest")
        break;
    default:
        document.write("Invalid day")
        break;
};
//exercise 5
let age = prompt("Enter your age: ");
if (age < 13){
    document.write("طفل")
}
else if (age <= 17){
    document.write("مراهق")
}
if (age <= 18){
    document.write("راشد")
}
else {
    document.write("مسن")
};