// singleton object
//const tinder = new Object()

// non-singleton object
const tinder = {}
tinder.id = "123abc"
tinder.name = "Sammy"
tinder.isLoggedIn = false
console.log(tinder)

//nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


// to merge two object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// 1st method => ye object 1 ke andar store karega object 2 ko
//const obj3 = { obj1, obj2 }
// 2nd method
//const obj3 = Object.assign({}, obj1, obj2, obj4) // { saare object ek empty set me jaayege}
//3rd method
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinder);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor
//agr baar baar dot karke nhi likhna toh
const {courseInstructor: instructor} = course
console.log(instructor);


//api's in object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//api's in array
[
    {},
    {},
    {}
]