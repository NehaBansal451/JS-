//dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

//interview
console.log(typeof myDate)

let mycreatedate1 = new Date(2023, 0 ,23) // month start from 0 in javascript
console.log(mycreatedate1.toDateString());
let mycreatedate2 = new Date(2023, 0 ,23 , 5 , 3) 
console.log(mycreatedate2.toDateString());
let mycreatedate3 = new Date("01-14-2023") // month start from 1 
console.log(mycreatedate3.toLocaleString());
  
//date is a object
console.log(mycreatedate1.getTime());//convert into milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{weekday :"long"}));

