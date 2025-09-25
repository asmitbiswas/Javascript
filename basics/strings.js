const name = "Asmit"
const repos = 3

// console.log( name + repo);

console.log(`Good Morning. My name is ${name} and I have ${repos} repos`);

const gameName = new String('gtasanandreas')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log( gameName.length);  // while accessing length property it will check in prototype

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(7));

console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,7)

console.log(new String);

const anotherString = gameName.slice(0,7)
console.log(anotherString);

const anotherString2 = gameName.split('a')
console.log(anotherString2);

const newStringOne = "   Hello World    "

console.log(newStringOne.trim());

const url = "https://www.google.com/Asmit%20Kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('google'));

console.log(url.includes('yahoo'));

console.log( 'bye');

// the whole output
/*

Good Morning. My name is Asmit and I have 3 repos
g
{}
13
GTASANANDREAS
gtasanandreas
n
8
[String: '']
gtasana
[ 'gt', 's', 'n', 'ndre', 's' ]
Hello World
https://www.google.com/Asmit-Kumar
true
false
*/











