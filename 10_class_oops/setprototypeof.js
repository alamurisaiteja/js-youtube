let bike = {
    fuel : function() {
        console.log("fuel is using petrol")
    }
}

let car = {
    color: function() {
        console.log("the color is black")
    }
}


// Object.setPrototypeOf(bike, car)
Object.setPrototypeOf(car, bike)
// inherit any ones not both like above it will gives error 
// user object.assign to merge both



// bike.color()
car.fuel()



// or create a new object as shared property use as multiple inheritance