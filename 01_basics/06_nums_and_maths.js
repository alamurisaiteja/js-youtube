const score = 500
// console.log(score)
const balance = new Number(100)

// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(5));// for 100.00000 decimal values 

const otherNumber = 18.807

// console.log(otherNumber.toPrecision(3)); // for round of value


const hundreds = 100000000000
// console.log(hundreds.toLocaleString('en-IN')); // for indian values


// *****************Maths *************************
// console.log(Math);
// console.log(Math.abs(-4)); //reverse - to + 
// console.log(Math.round(4.6)); //round of to 4.3 
// console.log(Math.ceil(4.2)); // upper to value 5 
// console.log(Math.floor(4.9)); // lower  to value 4 any decimal values 
// console.log(Math.min(4,3,6,8,9));
// console.log(Math.max(4,32,2.2,3.4))


console.log(Math.random()); // randomly but 0 or 1 in between comes
console.log(Math.floor(Math.random()*10) + 1); // one value will shift 



const min = 10
const max = 20 


console.log(Math.floor(Math.random() * (max - min + 1))+ min)
