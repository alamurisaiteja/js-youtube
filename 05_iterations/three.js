// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)

}

const greetings = "hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log("not include")
        continue
    } 
    
    // console.log(`each char is ${greet}`);
    
}

// maps 
// values are unique and order also not changed
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ' :', value);
    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(`${key} : ${value}`);
    
// }
// error object is not iterable

