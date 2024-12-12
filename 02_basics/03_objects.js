//singleton 
// Object.create  //constructor method

// object literals

const mySym = Symbol("key1")


const Jsuser = {
    name:"saiteja",
    "full name" : "saiteja",
    age : 18,
    [mySym]:"hai",
    location :"jaipur",
    email : "sai@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["mon","sat"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"]) // here with dot or directly we cannot accessible so we need to use []
// console.log(typeof Jsuser[mySym])

Jsuser.email = "sai@gpt.com"
// Object.freeze(Jsuser) // values will be freezed and not changed any more 
// console.log(Jsuser);
// Jsuser.email = "changed@gpt.com"
// console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("hello js user");
}
Jsuser.greeting2 = function() {
    console.log(`hello js user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());
