function saymyName() {
  console.log("A");
  console.log("s");
  console.log("m");
  console.log("i");
  console.log("t");
}

// saymyName()

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2)
// }

function addTwoNumbers(Number1, Number2) {
  // let result = Number1 + Number2
  // return result
  return Number1 + Number2;
}

const result = addTwoNumbers(3, "2");

// console.log("Result:" , result)

function loginUserMessage(username = "Madara") {
  if (!username) {
    console.log("Enter a username '-'");
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage("Kaguya"));

//  ++++++++++++++++++2nd part++++++++++++++++++++++++
function calculateCartPrice(val, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 1531, 978645));


const obj = {
    username:"Asmit",
    ItemsSold: 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and he sold ${anyObject.ItemsSold} items`);
    
} 

    // handleObject(obj)
    handleObject({
        username: "Obito",
        ItemsSold:200000000
    })

    const mynewArr = [200, 355, 895, 700]

    function returnSecondValue(getArr){
        return getArr[2]
    }

    console.log(returnSecondValue([200, 4325, 545432]))