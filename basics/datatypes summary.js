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



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and heap memory

let myJob = "Startup"

let anotherJob = myJob
anotherJob = "Freelancer"

console.log(myJob);
console.log(anotherJob);

let userOne = {
    email: "Asmit@gmail.com",
    upi: "Asmit@upi"
}

let userTwo = userOne
userTwo.email = "Asmitbiswas1308@gmail.com"

console.log(userOne);
console.log(userTwo);

// stack memory -> primitive type

// heap memory -> reference type

/* stack memory = does not allow to change the original value
it creates a new copy in the memory for the new value */


// heap memory = allows to change the original value. it alwaye gives a 
// reference of the original value
// not a copy of the original value