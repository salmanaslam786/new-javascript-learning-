// Objects 
// when we use literals it can't become singleton 
// but if we use constructors it can become singleton (object.create)


// object literals 
const mySym = Symbol();
const JsUser = {
    name: "Salman",
    age: 30,
    location: "Lodhran",
    "email": "Salmanldhr@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"],
    [mySym]:  "mykeys1"
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser);
//console.log(typeof mySym);
//console.log(JsUser[mySym]);

JsUser.email = "only7777@gmail.com";

//console.log(JsUser.email);
//object.freez(JsUser);

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

//console.log(JsUser.greetingTwo());

