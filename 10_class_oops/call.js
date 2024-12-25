function SetUserName(username) {
    this.username = username
    console.log(`fun is called`)
}

function CreateUser(username, email, pasword) {
    SetUserName.call(this, username)// by using call it will hold the reference and we know already execution context
    // will clear fun one after one executing so call will hold that reference and this need to be used for those parameters of
    this.email = email
    this.pasword = pasword
    // console.log(`${email}, ${username} , ${pasword}`)

}

const chaai = new CreateUser("chai", "chai@example.com", "1234567890")

console.log(chaai)
