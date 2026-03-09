//Instead of seperate variables we group multiple related variables into an object

//Creating Objects

let car = {
    Name: "Toyota",
    Model: "Supra",
    Year: 1995
};

console.log("Car Model: ",car.Model);
console.log("Car Year: ", car.Year);

console.log(" ");


//adding Methods (Functions inside objects)

let student = {
    Name: "Mohammed",
    Age: 22,
    Course: "AI",

    Job: function(){
        console.log("Software Engineer");
    }
};

student.Job();

console.log(" ");

//Exercise 1 - Create an object for a book with properties like title, author, and year. Add a method to display the book's information.

let book = {
    Title: "Gatsby",
    Author: "F. Scott Fitzgerald",
    Year: 1925,

    displayInfo: function(){
        console.log("Title: "+ this.Title);
        console.log("Author: "+ this.Author);
        console.log("Year: "+ this.Year);
    }
};

book.displayInfo();
console.log(" ");


//Constructor Functions - When needed to create many objects of the same type, we can use constructor functions

function Lecturer(name, age){
    this.name=name;
    this.age=age;
}

let l1 = new Lecturer("Shaina", 28);
let l2 = new Lecturer("Zaky", 54);

console.log("Lecturer 1 name: ",l1.name);
console.log("Lecturer 2 age: ", l2.age);

//Exercise 1

let phone ={
    Brand: "Samsung",
    Model: "S23",
    Price: 235000
}

console.log("Phone Brand: ", phone.Brand);
console.log("Phone Model: ", phone.Model);
console.log("Phone Price: ", phone.Price);

//Exercise 2

let person = {
    Name: "Mohammed",
    Age: 22,

    Greet:  function(){
        console.log("Helloo my name is Mohammed");      
    }
}

//Exercise 3

function jeep(Brand,Model,Year){
    this.Brand=Brand;
    this.Model=Model;
    this.Year=Year; 
}

let j1 = new jeep("Toyota", "Land Cruiser",2008)
let j2 = new jeep("Jeep", "Wrangler", 2020)

console.log("Jeep 1 Brand: ", j1.Brand);
console.log("Jeep 2 Model: ", j2.Model);