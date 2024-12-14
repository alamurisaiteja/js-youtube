const user = {
    username: "sai",
    pircea: 99,

    welcomemeesage: function() {
        console.log(`${this.username} ,welcome to website`);
        // console.log(this) // refers current value
    }

}


// user.welcomemeesage()
// user.username = "sam"
// user.welcomemeesage()

// console.log(this) // refer empty obj


// function chai() {
//     // let usname = "sai" // this will works in objects not in functions

//     console.log(this.usname) ;// node environment so much values will be print
// }

// chai()

const chai = () => {
    let username = "sai"
    console.log(this)
}

chai()

// explicit return 
const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(1,3))

// implicit no need to return
// for curly braces return statement is needed and for parenthesis no return also single line stat
const add2 = (num1, num2) =>  (num1 + num2)


console.log(add2(1,3))

// how to return obj then we need to wrap inside paranthesis
const add3 = (num1, num3) => ({usrname: "saiteja"})

console.log(add3(2,4))
