//A function is a block of code that does a specific task. You can reuse it whenever you need. Think of it like a mini-machine: you give it some input, it does work, and maybe gives you output.

//Functions with parameters

function greet(name){
    return "Hello "+name+" !";
}

console.log(greet("Mohammed"));
console.log(" ");

//functions with Condition


function checkAge(age){
    if(age>18){
        return "Adult";
    }
    else{
        return "Minor"
    }
}

console.log(checkAge(21));
console.log(" ");

//Exercise 1

function everOrOdd(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd"
    }
}

console.log(everOrOdd(21));
console.log(" ");

//Exercise 2

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("Mohammed"));
console.log(" ");

//Exercise 3
console.log(square(4));
function square(num){
    return num*num;
}

console.log(square(4));
console.log(square(6));
console.log(" ");
