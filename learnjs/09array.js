// Array 

const myArr = ["Salman", 0, 1, 2, 3, 4, 5];
const myHeros = ["Allama-Iqbal", "Qauide-Azam"];

//console.log(myArr[0]);
//console.log(myHeros.length);

const myArr2 = new Array(1, 2, 3, 4);

//console.log(myArr2.length);

//++++++++ Methods +++++++++++++//

//myArr.push(6);
//myArr.push(7);
//myArr.pop();
//myArr.unshift("what");
//myArr.shift();
//console.log(myArr.includes(7));
//console.log(myArr.indexOf(4));

//const newArr = myArr.join();
//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr);

// Slice, Splice 


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("c ", myArr); 
