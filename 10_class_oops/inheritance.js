class User {
    constructor(username) {
        this.username = username
        // console.log(this)
    }

    logMe() {
        console.log(`usrname is ${this.username}`);
        
    }
}


// const user1 = new User('sai')
// console.log(user1.logMe())

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(` A new course was added by ${this.username}`)
    }

}


const chai = new Teacher("chai", "chai@Teacher.com", "123")
chai.addCourse()

const masalachai = new User("masalachai")

masalachai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
console.log(masalachai instanceof User)