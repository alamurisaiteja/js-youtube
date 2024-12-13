function sayMyName() {
    console.log("a")
    console.log("b")
    console.log("c")
    console.log("d")
    console.log("e")
    console.log("f")
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//    console.log( number1+ number2)
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    
    // return result 
     // after return no code will works inside the fun
     return number1 + number2
 }

// const result = addTwoNumbers(2 ,5)

// console.log("result: ", result);

// function loginUserMessage(username) {
//     if(username===undefined) {
//         console.log("pls enter username")
//         return // if we dont want to print below retrun statment we can return directly
//     }
//     return `${username} justlogged in`
// }


function loginUserMessage(username = "sai") {
    if(!username) {
        console.log("pls enter username")
        return // if we dont want to print below retrun statment we can return directly
    }
    return `${username} justlogged in`
}


// console.log(loginUserMessage("saiteja"))
// console.log(loginUserMessage("teja"))

function calculateCartPrice(val1,val2,...num1) {
    return num1
}

console.log(calculateCartPrice(4,3,4,2))

// const user = {
//     username: "sai",
//     price: 100
// }

function us(obj) {
    console.log(`username is ${obj.username} and price is ${obj.price}`)
}

// us(user) // we  mention obj name in it 
us({username: "hai",price: 233}) // we can directly pass obj also 

const myArray = [100, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([100, 200, 300, 400]))

