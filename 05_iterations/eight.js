// reduce 
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, cuval) {
//     console.log(`acc: ${acc} and cuva: ${cuval}`);
//     return acc + cuval
// },0 )


// accumulator needed to get an initial val


const myTotal = myNums.reduce( (acc, cv) => (acc+cv),0 )

// console.log(myTotal)

const shopCart = [
    {
        itemName: "js course",
        price: 100
    },
    {
        itemName: "python course",
        price: 200
    },
    {
        itemName: "mobile dev course",
        price: 300
    },
    {
        itemName: "web course",
        price: 400
    },
    {
        itemName: "hacking course",
        price: 500
    },
]


const Total = shopCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(Total)