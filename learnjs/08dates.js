// Dates 
const log = console.log;
let myDate = new Date();

/*console.log(myDate.toString());
console.log(myDate.toDateString());
log(myDate.toLocaleString());
log(myDate.toISOString());
log(typeof myDate);*/

//let myCreatedDate = new Date(2024, 10, 11);
//let myCreatedDate = new Date(2024, 10, 11, 5, 3);
let myCreatedDate = new Date("2024-10-11");
//log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//log(myTimeStamp);

//log(myCreatedDate.getTime());

//log(Math.floor(Date.now()/1000));

let newDate = new Date();
log(newDate.getMonth() + 1);


//let dateTime = newDate.toLocaleString("default", {weekday: "long",})
//log(dateTime.toLocaleString());

newDate.toLocaleString("default", {
    weekday: "long", 
    
})
log(newDate.toLocaleString());