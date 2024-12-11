// primitive datat types  ;call by value

// 7 types : String Number , Boolean , null , undefined, BigInt 

const score = 23
const scoreValue = 23.03
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id === id2)

const bigNum = 3444444444444444322n



// reference type datatypes(NON primitive)

// Array, Objects, Functions 

const heros =["shaktiman" , "nagraj" , "doga"]

let obj={
    name:"sai",
    age:27,

}

// const my = function() {
//     console.log("hello world")
// }


// console.log(typeof outsideTemp);
// console.log(typeof my)

// https://262.ecma-international.org/5.1/#sec-11.4.3



//   ********************

// stack (primitive) , heap (non-primitive)

let myyt = "sai"
let otheryt =myyt

otheryt = "bye"
console.log(otheryt)
console.log(myyt)

let userOne = {
    email : "com@gmail.com",
    pass : 123457

}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email) // userTwo@gmail.com
console.log(userTwo.email) // same as above because it reference