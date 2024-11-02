let score = true

//console.log(typeof score); 

let valueInNumber = Number(score);

//console.log(typeof valueInNumber); 

//console.log(valueInNumber);

// "33" => 33 string convert to number
// "33abc" => NaN
// true => 1; false => 0 

let isLoggedIn = 1 

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false 
// "" => false  empty string 
// "salman" => true 
//we can change things in numbers and boolean 

let someNumber = 33 
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);


// Data type summary 

// 1 permitive 

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

// javascript is straitically type or dynamically type language

const score1 = 100
const scoreValue = 100.3

const isLoggedIn1 = false 
const outsideTemp = null 
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 35216486612186828615n


// 2 Reference (Non permitive) 

// Array, Objects, Functions
// Arrays
const heros = ["Quaide-Azam", "Alama-Iqbal", "Dr.Israr"];
// Objects
let myObj = {
    name: "salman",
    age: 29,
}
// Functions
const myfunction = function(){
    console.log("Hellow world!");
}