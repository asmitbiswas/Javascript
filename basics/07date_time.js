// Date = object in JavaScript is used to work with dates and times.

let date = new Date()

console.log(date.toString());

console.log(date.toDateString());

console.log(date.toTimeString());

console.log(date.toLocaleString());

console.log(date.toJSON());
// line 13 and 15 are same
console.log(date.toISOString());

console.log(typeof date);

//let specificDate = new Date('2029-08-13 04:54:44');
let specificDate = new Date('2029-08-13 00:00:00');
console.log(specificDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp.toString());

console.log(date.getTime());
console.log(Date.now());

// console.log(Math.floor(Date.now()/1000 ));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
// for adding +1 the month and the day are same
console.log(newDate.getDay()+ 1);

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))



