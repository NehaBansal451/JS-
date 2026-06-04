const number = [1,2,3,4,5]
const number1 = [6,7,8,9,0]

// number.push(number1)
// console.log(number)

const all_number = number.concat(number1)
console.log(all_number);

// spread => each element ko alag alag karke new array me store karta hai
const all_new_number = [...number,...number1]
console.log(all_new_number)

//returns a new array with all sub-array elements concatenated into it recurively up to specific depth
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another = another_array.flat(Infinity)

//to check whether it is array not not
console.log(Array.isArray("Neha"))
//to make it in array
console.log(Array.from("Neha"))
//interesting
console.log(Array.from({name:"Neha"}))

//diffrent values in array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


