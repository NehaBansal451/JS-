//two types on the basis of how we call and store the value 

//Primitive:7 categories=>call by value
/*String,Number,Boolean,Null,Undefined,Symbol,BigInt*/

//Non Primitive :call by reference
/*Array,Objects,Functions*/


//symbol gives different values 
const id=Symbol('123')
const anotherid =Symbol('123')
console.log(id == anotherid)

//array
const heros =["shaktiman","naagraj","doga"]

//objects
let myobj = {
    name:"neha",
    age:21,
}

//function
const myfunction=function(){
  console.log("hello world")
}


// non primitive ka datatype function hi hota hai but function ka objectfunction hota hai 
// nulll ka datatype object aata hai