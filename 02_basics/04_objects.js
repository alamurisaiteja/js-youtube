// const zomatouser = new Object()// single ton obj
const zomatouser = {} // non single ton obj

 zomatouser.id = "123cda"
 zomatouser.name = "sai"
 zomatouser.isLoggedIn = false;
// console.log(zomatouser)


const regularUser = {
    email: "some@gmail.com",
    fullName : {
        userFullname :{
            firstName: "sai",
            lastName : 'tej'
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {6: "c", 5: "d"}

// const obj3 = Object.assign({},obj1, obj2,obj4) // first empty is target and remaining all sources

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "sai@gmail.com"
    },
    {
        id: 1,
        email: "sai@gmail.com"
    },
    {
        id: 1,
        email: "sai@gmail.com"
    },
    {
        id: 1,
        email: "sai@gmail.com"
    },   
]

users[1].email
console.log(zomatouser)

console.log(Object.keys(zomatouser));// if we write only Object.keys() it cant idendify which obj i need to retrun or get
console.log(Object.values(zomatouser));
console.log(Object.entries(zomatouser));

console.log(zomatouser.hasOwnProperty('isLoggedIn')) // it will checks whether the given property is there or not by hasownproperty()