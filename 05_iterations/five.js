const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach( function (val) {
//     console.log(`${val}`);
    
// } )

// coding.forEach((item) => {
//     console.log(item)
// })

// function print(value) {
//    console.log(value)
// }

// coding.forEach(print) // no need to add parenthisis bec we just need reference only not execute here

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        langName: "javascript",
        fileName: ".js",
    },
    {
        langName: "java",
        fileName: ".java",
    },
    {
        langName: "python",
        fileName: ".py",
    },
]

myCoding.forEach((item) => {
    console.log(item.fileName);
    
})