const score = 545;
console.log(score);


const balance = new Number(100.5);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));// the num give 1 decimal and zeros written in the brackets

const otherNumber = 12.212;

console.log(otherNumber.toPrecision(2));//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundreds = 100000;

console.log(hundreds.toLocaleString()); // "100,000"
        //notes//
// max value of num is 1.7976931348623157e+308
// min value of num is 5e-324
// min safe integer is -(2**53 -1) or -9007199254740991
// max safe integer is 2**53 -1 or 9007199254740991

//+++++++++++++++++ Maths++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-15145456));// negative to positive ~ but positive to positive X '_'

console.log(Math.round(4.2));    

console.log(Math.ceil(4.7));// chooses upper value
console.log(Math.floor(4.7));// chooses lower value

console.log(Math.min(4,5,6,7,8,9,-10,-11,-12));// gives the min value
console.log(Math.max(4,5,6,7,8,9,-10,-11,-12));// gives the max value
console.log(Math.random());// gives random value between 0 and 1

console.log(Math.floor((Math.random()*10 )+ 1));// gives random value between 1 and 10

const min = 10;
const max = 20;

//Secret formula  starts //
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// secret formula ends //
