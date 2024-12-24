const user = {
    username :'sai',
    logincount : 8,
    signedIn : true,

    getuserdetails : function() {
        // console.log("got user details from database")
        console.log(`username${this.username}`);
        console.log(this)
        
    }
}



// console.log(user.signedIn)
// // console.log(user.getuserdetails())
// console.log(this)

// new is constructure function
// const promiseOne = new Promise()
// const date = new Date()



function user1(username, logincount, isLoggedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    return this
}
// here if we dont use new key word (constructor) (means it will create new instance) then the values will be overrided and becomes the latest value it would be a mess
const userOne = new user1('sai', 3, true)
const userTwo = new user1('chaiaurcode', 11, false)

console.log(userOne);
console.log(userTwo);


// new creates empty object called instances
// step2 : it will call constructor function because new
// step3 : what we have arguments will be injected into this
// step4 : directly comes inside fun