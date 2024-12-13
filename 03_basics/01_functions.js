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
console.log(loginUserMessage("teja"))
