//objects literals
const mySum = Symbol("key1")
const JsUser = {
    name : "neha",
    "full name" : "Neha bansal",
    [mySum]:"myKey1", // to access symbol we have to use square brackets
    age : 18,
    email : "Neha@google.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday" , "Saturday"]
}

//defined in 2 ways
console.log(JsUser.email) 
console.log(JsUser["email"]) //when we do not use dot operator then we take them as string
console.log(JsUser["full name"])//cannot access it using dot operator

// to access symbol we have to use square brackets
console.log(JsUser[mySum])

//to change or modify value
JsUser.name = "harshita";
console.log(JsUser.name) 

//to lock value , so that no one can change
//Object.freeze(JsUser)
JsUser.name = "Kiran bansal"
console.log(JsUser.name) 

JsUser.greetings = function(){
    console.log(`hello , i am ${this.name}`);
}

console.log(JsUser.greetings); //[Function (anonymous)] => You are logging the function itself, not calling it
console.log(JsUser.greetings());
