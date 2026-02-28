let prices = [20000,50000,34000,67000]

for(let price of prices){
    if(price>35000){
    console.log( price +" -> Expensive");
    } 
    else{
     console.log(price + " -> Cheap"); 
    }   
}

console.log(" ");

prices.push(120000);
console.log("New prices: "+ prices);

