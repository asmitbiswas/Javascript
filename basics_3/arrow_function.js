const user = {
    username:"Asmit",
    price: 664,

    Welcomemessage: function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
    
    
}
// user.Welcomemessage()
// user.username = "Madara"
// user.Welcomemessage()
console.log(this);

/* if this is written in global object, so that is empty object, but if the same thing was done in browser, that will show window */

// function chai(){
//     console.log(this)
// }
// // we can't use this in function. so we have to make a function in a object
// chai()

const chai = () => {
    let username = "Sung Jin Woo"
    console.log(this.username);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)
// if {} is given, we have to write return
// const addTwo = (num1, num2) =>  (num1 + num2). it is used in react.js

const addTwo = (num1, num2) => {{username:"Hitesh"}}

console.log(addTwo(78,100))


// const myArr = [2, 4, 9, 10]

// myArr.forEach()

