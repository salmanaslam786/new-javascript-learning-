// singleton object 
// const fbUser = new object();
const fbUser = {}

fbUser.id = "123abc";
fbUser.name = "salman";
fbUser.isLoggedIn = false;

//console.log(fbUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Salman",
            lastname: "Aslam"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 1,
        email: "S@gmail.com"
    }
]


//console.log(users[1].email);

//console.log(fbUser);

//console.log(Object.keys(fbUser));
//console.log(Object.values(fbUser));
//console.log(Object.entries(fbUser));


console.log(fbUser.hasOwnProperty('name'));