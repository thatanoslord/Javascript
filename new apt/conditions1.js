/*there is another way to create a condition statement, is by using switch element 
    switch has mostly the same function as if statement, but is more readable and easier to use 
    the differece is switch can use only == for comapring the values, and it can compare only one variable at a time
    the switch statement is used to perform different actions based on different conditions.
    how to use switch statement:
    switch (expression){
        case value1:
            code the will be executed if the expression matches value1
            break; is used to stop the execution of the switch statement
        case value2:
            the code that will be executed if the first case is not matched
            break;
        default:
            the code will execute if case 1 and case 2 are not matched
    }
*/

let day = prompt("Enter a day of the week: ").toLowerCase();
switch(day){
    case "monday":
        document.write("<br>this is chest day");
        break;
    case "tuesday":
        document.write("<br>this is back day");
        break;
    case "wedensday":
        document.write("<br>this is legs day");
        break;
    case "thursday":
        document.write("<br>this is rest day");
        break;
    case "friday":
        document.write("<br>this is shoulders day");
        break;
    case "saturday":
        document.write("<br>this is recap day");
        break;
    default:
        document.write("<br>this is rest day");
        break;
}