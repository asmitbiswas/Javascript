const myObject = {
    js:"Javascript",
    cpp:"C++",
    py:"Python",
    rb:"Ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "java", "python", "Html", "Css"]

for (const key in programming) {
    // console.log(programming[key])
}


// const maps = new Map()
// maps.set('Anime', "Japan")
// maps.set('IND', "India")
// maps.set('USA', "United States of America")
// // console.log(maps)

// for (const key in maps) {
//     console.log(key)
// } // doesn't work