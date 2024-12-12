// Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("01-02-2003") // yymmdd latest dd-mm-yyy
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)


newDate.toLocaleString('default',{
    weekday:"long",
    
})