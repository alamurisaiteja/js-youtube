// Immediately invoked function expression
// immediately executed
// it avoids global scope pollution 
(function chai() { // named iife 
    console.log(`data base connected`)
}) (); // semicolon is included other wise it will dont execute any other invoked function

((name) => {
    console.log(`db connected twice ${name} `)
}) ('hai');

((name) => {
    console.log(`db connected thrice ${name}`)
}) ('hello');


// ex:
(() => {
    var count=0 // private variable inside iife 
    function increment() {
        count++;
        console.log(count)
    }
    increment();
}) ();

// console.log(count) //we not able to access because of we created iife to avoid pollution of global scope