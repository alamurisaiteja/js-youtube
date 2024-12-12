const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);


// const allheroes = marvel_heros.concat(dc_heros)
// console.log(allheroes);

const all_new_heroes =  [...marvel_heros,...dc_heros] // spread operator same like concatenation 

// console.log(all_new_heroes)

const anotherarray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array = anotherarray.flat(Infinity) // returns inside the arrays also : flat(depth)=like infinity inside the depth or any value
console.log(real_another_array); // it will spread out from anywhere without worring where it comes from

console.log(Array.isArray("saiteja")) // it will retrun true or false 
console.log(Array.from("saiteja")) // but this will convert into an array format 
console.log(Array.from({name:"saiteja"})) // interview ques

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // returns a new array from set of ele like var array ..etc