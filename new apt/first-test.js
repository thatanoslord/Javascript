//quizz
// 1 b , 2 b, 3 c , 4 c, 5 c

// exercise :1
function numbers() {
    let x = "100"
x = parseInt(x);
console.log(x);
x**= 2;
console.log(x);
console.log(isSafeInteger(x));
}

// exercise :2
function checkString() {

let str1 = "Hello world";
console.log(str1[0], str1[str1.length - 1]); 
console.log(str1.includes("a"));
console.log(str1.startsWith("Hello"));
console.log(str1.endsWith("world"));
}
// exercise :3
let names = ["Moussa", "Hassan", "Ayoub", "Rachid"];
names.unshift("Salah");
names.push("Ahmed");
names.splice(1, 1);
console.log(names.indexOf("Ayoub"));
names.sort();
names.reverse();

//exercise :4
let team = ["Ali", ["Samir", "Sara", ["Youssef", "Yasmine"]]];
console.log(team[1][2][1]);
console.log(team[1][0]);
console.log(team[1][2].length);

