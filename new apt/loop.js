

let names = ["ahmed", "ali", "sara", "john", "doe", "jane"]
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}
let cars = ["BMW", "Mercedes", "Toyota", "Honda", "Ford", "Chevrolet"]
let model =[1999, 2005, 2009, 2019, 2024 ]
let color = ["Red", "Blue", "Green", "Black", "White", "Silver"]

for (let i = 0; i < cars.length; i++){
    console.log(cars[i])
    for (let j = 0; j < model.length; j++){
        console.log(model[j])
    }
    for (let k = 0; k < color.length; k++){
        console.log(color[k])
    }
}

// now we are going to learn how to continue (eleminate) and break in a loop
// in order to eliminate or avoid a value in a loop you will use this:
let table = ["anas", "khalid" , "ali" ,1,2, "muhamed" ,3,4, "ibrahim"]
for (i=0 ; i < table.length; i++){
    if (typeof table[i] == "number"){
        continue; //this won't show the value that has number as its type
    }
    console.log(table[i]);
}
console.log("__________________________________")

// now let's see what does break do :
for (i=0 ; i < table.length; i++){
    if (typeof table[i] == "number"){
        continue; //this won't show the value that has number as its type
    }
    console.log(table[i]);
    
    if (table[i] == "muhamed"){
        break; //this will stop before the value of "ali"
    }
    

}
//break is used to stop the loop whenever you want but if I want the loop to give me the the value and stop i should put the if "break after"