//if we are doing comparison in same datatype then there is no problem
console.log(2>3)
console.log(3==3)

// if we are doing comaprison in two different datatype then problem occur ,give inconsistent result
console.log(null>0)
console.log("2">1)

//=== is not only check equality but also check is datatype is same or not
console.log("2"===2) 