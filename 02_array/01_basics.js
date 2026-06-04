const myarr = [0,1,2,3,4,5]
console.log(myarr);

const myarr2 = new Array(1,2,3,4,5)
console.log(myarr2[1]);

myarr.push(6)
myarr.push(7)
myarr.pop() //remove last element from array
console.log(myarr);
myarr.unshift(0) // to push element at front
console.log(myarr);
myarr.shift() // just remove element from first then then move each elemnet to left 
console.log(myarr);
console.log(myarr.includes(9))//to check whether this element present in array or not
console.log(myarr.indexOf(3));//to get the index of 3

const newArr = myarr.join() // join convert array into string
console.log(newArr)

//slice and splice
const newarr = myarr.slice(1,3) // 3 index is not included in this. it does not change array
console.log(newarr)
console.log(myarr);

const newarr2 = myarr.splice(1,3) // 3 index included in this. it will remove splice value from original array
console.log(newarr2)
console.log(myarr);