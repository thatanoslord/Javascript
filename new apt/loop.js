/* a loop is a function that is called repeatedly and of the foundation of coding
instead of repeating a code for 100 using hard code you do a loop so it will help you
    Right now we will use "for" loop to create a loop
    how does it work for (star , condition , steps)
*/ 
// example I want to repeat this sentence 5 times i can either do it hardly and also loop it
for (let i = 0; i < 5; i++) {
    console.log("Hello world");
} 
// this will print "Hello world" 5 times
// the first part is the start of the loop, the second part is the condition that must be true for the loop to continue, and the third part is the step that will be executed after each iteration

//lets reverse this code 

for (let i = 5; i>0 ;i--) {
    console.log(i);
} //this will print 5,4,3,2,1

//i++ means i = i +1 or i+=1 
//i-- means i = i -1 or i-=1

//another exercise:
for (let a= 0 ; a<=5 ; a++){
    console.log("Ahmed " + a)
}
// this will print "Ahmed 0", "Ahmed 1", "Ahmed 2", "Ahmed 3", "Ahmed 4", "Ahmed 5"

//lets do the loop on an array
let names = ["ayoub", "moussa", "ali", "khalid", "salah"];
for (let i = 0 ;i <names.length ; i++){
    console.log(names[i]);
    console.log("_______________________")
}
for (let i = names.length-1 ;i <0 ; i--){
    console.log(names[i]);
}
names= names.reverse()
for (let i = 0 ;i <names.length ; i++){
    console.log(names[i]);
}

//there is also a nested loop which is a loop that contains another loop in it
let cars = ["Honda", "Toyota", "Ford"];
let models=["1998", "2003", "2010","2020"];
let colors = ["Black", "White","Grey", "Dark Blue"]

for (c =0 ; c < cars.length; c++){
    console.log(`Cars: ${cars[c]}`);

    for (m = 0 ; m < models.length; m++){
        console.log(`Models: ${models[m]}`)
    };

    for(d = 0 ; d < colors.length; d++){
        console.log(`Colors: ${colors[d]}`)
    };
    console.log("_______________________________________");
}