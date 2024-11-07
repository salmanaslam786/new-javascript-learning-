const name = "salman"
const repoCount = 5 

// how to concatinate these 
//console.log(name + repoCount + " value");

//console.log(`Hello m name is ${name} and my repo count is ${repoCount}`);
// string interpolation modren way to write code

const gameName = new String("Salman-Pc");
//methods of string 
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(3));
//console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4);
// substring is a part of string we can use this method
//console.log(newString);

const anotherString = gameName.slice(-8, 4);
// we can slice a string with given method, we can start 
// with negatice numbers 
//console.log(anotherString);

const newStingOne = "     salman    "
//trim removes the extra spaces in the string
console.log(newStingOne.trim());

const url = "https://salman.com/salman%20aslam";

//console.log(url.replace("%20", "-"));

//console.log(url.includes("salman"));

console.log(gameName.split("-"));