const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("ASYNC task 1")
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise completed")
})

// or

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("ASYNC task 2")
        resolve()
    },1000)
}).then(() => {
    console.log("ASYNC task taken")
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username:"Asmit", email:"Asmit@expFN.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
   setTimeout(() => {
     let err = true
     if (!err) {
        resolve({username:"Asmit", password:"*****5456*****"})
     }else{
        reject('ERR: "You are writing wrong code dude"')
     }
   }, 1000)

})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((usern) => {
    console.log(usern)
})
.catch((err) => {
    console.log(err)
})
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise((resolve, reject) => {
     setTimeout(() => {
     let err = true
     if (!err) {
        resolve({username:"Asmit", password:"***64545456*****"})
     }else{
        reject('ERR: "JS went wrong;"')
     }
   }, 1000)

})

async () => {
    try {
        const response = await promiseFive 
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(res)

//         const data = await res.json()
//     }
//     catch(error){
//         console.log("E:", error)
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/asmibiswas')
.then((res) => {
    return res
})
.then((data) => console.log(data))
.catch((error) => console.log(error))