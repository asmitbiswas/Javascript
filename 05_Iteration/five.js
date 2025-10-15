const coding = ["js", "rb", "java", "python", "Html", "Css"]

// coding.forEach(function (val) { 
//     console.log(val)
// })

// coding.forEach( (val) => { 
//     console.log(val)
// })

//  function printMe (product) {
//     console.log(product)
//  }

//  coding.forEach(printMe)

// coding.forEach( (Item, index, arr) => { 
//     console.log(Item, index, arr)
//  })

const myCoding = [
    {
        languageName:"Javascript",
        FileName:"js"
    },
      {
        languageName:"Java",
        FileName:"java"
    },
      {
        languageName:"Python",
        FileName:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.FileName)
})