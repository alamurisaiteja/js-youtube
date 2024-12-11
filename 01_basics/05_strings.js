const name = "saiteja"
const repoCount = 10 

// console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is${repoCount}`);

const gameName = new String('sai-s---s')

console.log(gameName[2])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// location of char index mention



const newString = gameName.substring(0,3) // last index value is not include
console.log(newString);

const anotherString = gameName.slice(-8,4)

console.log(anotherString);

const newString1 ="   dssd     "

console.log(newString1.trim())// removes starting and ending space
const url = "www.google.22com"

console.log(url.replace('22','')) // it will removes the original one with another

console.log(url.includes('goo'))

console.log(gameName.split('s'))