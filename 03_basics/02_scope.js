var a= 300;
let b= 400;
const c= 700;

if (true) {
    let b = 10
    var a = 4
    const c = 6

}

console.log(a) // var is globally scoped
console.log(b) // const and let are block scpoed 
console.log(c)

// so dont use var variable until some situations 