let myStr = "Hello World";
console.log(myStr)
let myStruppered = myStr.toUpperCase();
console.log(myStruppered)
console.log(myStruppered.replace(/O/g, "Y"))
let revstr = myStruppered.split("").reverse().join("")
console.log(revstr)
console.log(`${myStr}
    ${myStruppered}
    ${myStruppered.replace(/O/g, "Y")}
    ${revstr}`)