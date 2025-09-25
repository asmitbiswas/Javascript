// Primitive

// 7 types : string, null, boolean, number, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 4164541616541561654612314564874n
console.log(bigNumber);

//reference(non-primitive)

//  3type : Object, Array, Function

const heros = ["Sasuke", "Naruto"]

const villans = ["Madara", "Obito"] // these are reference types

let myObj = {
    name: "Asmit",
    age: 11,
    isLoggedIn: false,
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);

// console.log(typeof isLoggedIn);

// console.log(typeof scoreValue);

console.log(typeof villans);



 console.log( heros + villans );