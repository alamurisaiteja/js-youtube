var a= 300;
let b= 400;
const c= 700;

if (true) {
    let b = 10
    var a = 4
    const c = 6

}

// console.log(a) // var is globally scoped
// console.log(b) // const and let are block scpoed 
// console.log(c)

// so dont use var variable until some situations



// nested scope

function one() {
    const username = "sai"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website) // here error occurs due to website variable is only avail in that code block so the variable is killed after the block


    two()
}

// one()


if (true) {
    const username = "sai"
    if (username == "sai") {
        const website = " youtube"
        // console.log(username+website)
    }
    // console.log(website)// not able to scope 
}

// console.log(username);// scope also ended abouve



// *************interesting ****************

console.log(addone(5))

function addone(num) {
    return num + 1

}



// addTwo(0) error canot able to access before initilization
const addTwo = function(num) {
    return num + 2
}

