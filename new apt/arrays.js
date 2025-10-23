//using function and arrays to create shopping list 

console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));


// lunch picker program 
const lunches= [];
function addLunchToEnd(arr, item){
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`)
  return arr
}
console.log(addLunchToEnd(lunches, "Tacos"))

function addLunchToStart(arr, item){
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`)
  return arr
}
console.log(addLunchToEnd(lunches, "Sushi"))  

function removeLastLunch(arr){
  let removedItem = arr.pop();
  
  if (arr.length == []){
 return console.log("No lunches to remove.")
}
else{console.log(`${removedItem} removed from the end of the lunch menu.`)}
return arr
}
console.log(removeLastLunch(lunches))
 
 