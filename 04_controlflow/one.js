const isUserLoggedIn = true
const temperature = 32

// if (temperature === 40) {
//     console.log("less than 50")
// } else console.log('greater than 50')

// console.log("execute")



// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`)
// }

// console.log(`User power : ${power}`) // error because poweris out of the scope


const balance = 1000
// implicit scope if we keep , for multiple lines
// if (balance> 500) console.log("test"),
// console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard) {
    console.log("allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in")

}