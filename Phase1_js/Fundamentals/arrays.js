//ARRAYS

let fruits = ["apple", "banana", "mango","orange"];

//Access Elemnts
console.log("First Fruits: "+ fruits[0]);
console.log("All Fruits: "+ fruits.join(", "));

console.log(" ");

//Add an element
fruits.push("grape");
console.log("After Push: "+fruits);

console.log(" ");

//remove last elements
fruits.pop();
console.log("After pop: "+fruits);

console.log(" ");

//Loop through arrays
for(let fruit of fruits){
    console.log("Fruit: "+fruit);
}

