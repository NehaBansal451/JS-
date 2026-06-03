const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); //after decimal point digits

const otherNumber =  23.8966
console.log(otherNumber.toPrecision(2)); // decimal se phele 2 digits . same as round off

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));//amount to represent in india commas value

//////////////*********MATH***********////////////// /
console.log(Math);
console.log(Math.abs(-4)); //negative change into +ve
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.round(4.2))
console.log(Math.min(4.2,5.6,7.8))
console.log(Math.max(4.2,8.9,5.9))

console.log(Math.random()); // always get number between 0 and 1
