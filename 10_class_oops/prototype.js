let name = " sai     "
// console.log(name.truelength)

let myheroes = ['spiderman', 'batman', 'antman']
 let heropowers = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function() {
        console.log(`spidy power is ${this.spiderman}`)
    },

 }

 Object.prototype.sai = function() {
    console.log(`sai is present in all obj`);
    
 }

Array.prototype.heysai = function() {
    console.log(`sai says hello`)
}
//  myheroes.sai()
//  myheroes.heysai()
//  heropowers.heysai()


// inheritance 


const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true

}
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode                 "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"saiteja         ".trueLength()
name.trueLength()