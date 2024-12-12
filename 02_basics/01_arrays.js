// array

const myArr = [0,1,2,3,4,5,6]

// console.log(myArr[0])

const myArr2 = new Array(1,23,4,4)
// console.log(myArr2[1])
// console.log(myArr2.length)


// array methods

// myArr.push(7)// adds last
// myArr.push(8)
// myArr.pop() //remove last
// console.log(myArr);

// myArr.unshift(0) // adds start
// myArr.shift() // removes first 

// console.log(myArr.includes(8)) // is value there? false
// console.log(myArr.indexOf(25)); // -1 for any not visibile index 

// const newArr = myArr.join() // converted into string
// console.log(myArr);
// console.log(newArr); // 

// Slice , Splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // extract from index 1 to index 3 but dont include index 3 value but dont manipulate original array

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3) // it will manipulate the original array and removes the index values range also
console.log("c",myArr)
console.log(myn2);
