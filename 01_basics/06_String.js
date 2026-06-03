const name = "neha"
const number = 20

//OUTDATED => console.log(name + number + "value");

console.log(`Hello , my name is ${name} and my number is ${number} `)

const gameName = new String('Neha-Bansal-com');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);

const newStringOne = "   neha   "
//trim just remove spaces
console.log(newStringOne.trim());

//sometime in browser , in our url if we give spaces then browser replace it with like this %20
// then we can use this
const url = "https://neha.com/neha%20bansal"
console.log(url.replace('%20','-'));
console.log(url.includes('neha'));

// to split the string into array
console.log(gameName.split('-'));