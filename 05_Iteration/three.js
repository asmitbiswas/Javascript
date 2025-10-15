// for of

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10  , -  Infinity]

for (const num of myArr) {
    console.log(num)
}

let greetings = "Hello World!"

for (const greet of greetings) {
    console.log(` Every char is ${greet}`)
}

// Maps

const maps = new Map()
maps.set('Anime', "Japan")
maps.set('IND', "India")
maps.set('USA', "United States of America")
// console.log(maps)

for (const [key, value] of maps) {
    // console.log(key, ":-", value)

}

const myObject =  {
    game1: "Minecraft",
    game2 : "GTA SAN"
}

// for (const [key, value] of myObject) {
//         console.log(key, ":-", value)

// }
