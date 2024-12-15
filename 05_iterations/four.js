debugger
const myObject = {
    js : 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}


for (const key in myObject) {
    console.log(`${key}  is for ${myObject[key]}`);
}


// just for testing
const programming = ["js", "rb", "py"]
for (const key in programming) {
    console.log(programming[key])
} // used in the array
// for obj forin
// for arrays forof 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(key)
// }

// map is not iteratable so no loop needed in maps