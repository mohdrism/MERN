//Loops
let numbers = [1,2,3,4,5];

//For Loops
for(let i=0; i<numbers.length; i++) {
    console.log("For Loop: "+ numbers[i]);
}

//While Loop
let j=0;

while(j<numbers.length){
    console.log("While Loop: "+ numbers[j]);
    j++;
}

//FOR OF loop
//new point

for(let num of numbers){
    console.log("For-of loops: "+num); 
}