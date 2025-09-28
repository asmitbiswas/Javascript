//array is an object
// An Array can have different eleements// Whic things are written in Array; these are called elements'-'

const myArr = [0, 1, 2, 3, 4, 5, 6, true, "Asmit"]

const heros = ["Tanjiro","Kanao", "Nezuko","Zenitsu", "Rengoku", " Inosuke", "Aoi", "Obanai", "Mitsuri", "Lord Murata", "Giyu", "Shinobu", "Tokito", "Tengen"] // '_'

const villans = ["Muzan", "Kokushibo", "Doma", "Akaza", "Nakime and Hantengu", "Gyokko", "Gyutaro and Daki",  ]

console.log(myArr[[0]]);

// array meethods

myArr.push(916165)
myArr.push(102.3)
myArr.push(541)
myArr.pop()
// myArr.pop(); pop removes the last value of the Array
myArr.unshift(7)// unshift adds the value given in the ().
myArr.shift()// this repairs the unshift '-'
console.log(myArr.includes(858567413));
console.log(myArr.indexOf(3));// output : 3
// if the indexof method finds the num written in the (); it will give the index but it can,t find that it will give -1
console.log(myArr.indexOf(9)); // output: -1
console.log(myArr);
