function saymyName(){
    console.log("A")
    console.log("s")
    console.log("m")
    console.log("i")
    console.log("t")
}

// saymyName()

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2)
// }

function addTwoNumbers(Number1, Number2){
    // let result = Number1 + Number2
    // return result
     return Number1 + Number2
}

const result = addTwoNumbers(3,"2")

// console.log("Result:" , result)

 function loginUserMessage (username = "Madara"){
    if(!username){
        console.log("Enter a username '-'");
    }
    
    return`${username} just logged in`
 }

 console.log(loginUserMessage("Kaguya"))