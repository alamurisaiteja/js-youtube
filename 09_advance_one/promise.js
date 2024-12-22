const promiseOne = new Promise(function(resolve, reject) {
    // do any aync task
    // DB calls , cryptography, network 
    setTimeout(function() {
        console.log('async task is complete')
        resolve()
    },1000)
})


promiseOne.then(function() {
    console.log("Promise consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username:"sai", password: "12345"})
        } else {
            reject('ERROR : SOMETHING WENT WRONG')
        }
    },1000)
})

promiseFour.then( (user) => {
    console.log(user)
    return user.password
} ).then( (pass) => {
    console.log(pass)
} ).catch(function(err) {
    console.log(err)
}).finally(function() {
    console.log("The promise is either resolved or rejected")
})


const promiseFive = new Promise((resolve, reject)=> {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username:"javascript", password: "54321"})
        } else {
            reject('ERROR : javascript went wrong')
        }
    },1000)
})


async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive()



// async function getallUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//    console.log(data);
//   } catch (error) {
//     console.log("E: ", error)
//   }
  
// } 
// getallUsers()


fetch('https://api.github.com/users/alamurisaiteja')
.then((response)=> {
    return response.json()
})
.then((data)=>{console.log(data);
})
.catch((error)=> console.log(error))
// .finally( () => {
//     console.log("excuted either with or without error");
    
// }) 