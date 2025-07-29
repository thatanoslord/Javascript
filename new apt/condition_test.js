// first exercise
let num1 = parseFloat(prompt("choose the first number that will be compared"));
let num2 = parseFloat(prompt("choose the second number that will be compared"));
let num3 = parseFloat(prompt("choose the third number that will be compared"));

if (num1 > num2 && num1 > num3){
    document.write(num1);
}
else if (num2 > num1 && num2 > num3){
    document.write(num2);
}
else { 
document.write(num3);
};

//second exercise
let username = prompt("username: ");
let password = prompt("password: ");

if ( username === "admin" && password === "1234"){
    document.write("<br>تم تسجيل الدخول بنجاح");
}
else{
    document.write("<br>اسم المستخدم أو كلمة السر غير صحيح");
}

// exercise 3
let letter = prompt("Enter one letter: ").toLowerCase();
switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("<br>هذا حرف صوتي")
        break;
    default :
        document.write("<br>هذا حرف ساكن")
        break;
};

//exercise 4
let day = prompt("Enter a day: ").toLowerCase();
switch(day){
    case "monday":
        document.write("<br>work")
        break;
    case "tuesday":
        document.write("<br>Normal day")
        break;
    case "wednesday":
        document.write("<br>Normal day")
        break;
    case "thursday":
        document.write("<br>Normal day")
        break;
    case "friday":
        document.write("<br>Weekend prep")
        break;
    case "saturday":
         document.write("<br>Rest")
        break;
    case "sunday":
        document.write("<br>Rest")
        break;
    default:
        document.write("<br>Invalid day")
        break;
};

//exercise 5
let age = parseInt(prompt("Enter your age: "));

if (age < 13){
    document.write("<br>طفل")
}
else if (age <= 17){
    document.write("<br>مراهق")
}
else if (age <= 65){
    document.write("<br>راشد")
}
else {
    document.write("<br>مسن")
};