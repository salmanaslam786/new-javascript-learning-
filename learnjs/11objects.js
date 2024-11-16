// Objects 
// when we use literals it can't become singleton 
// but if we use constructors it can become singleton (object.create)


// object literals 

const JsUser = {
    name: "Salman",
    age: 30,
    location: "Lodhran",
    email: "Salmanldhr@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"],
    mysym:  "mykeys1"
}

console.log(JsUser.email);
//console.log(JsUser);