const TinderUser = new Object() // It is a Singleton object
const TinderUser2 = {}    // It is a Non-Singleton object


TinderUser.id = "123admin"
TinderUser.age = 18 
TinderUser.email = "xyz@abc.com"
TinderUser.isLoggedIn = false

// console.log(TinderUser);

const regularUser = {
    name : "random" ,
    age : 20 ,
    email : "some@gmail.com" ,
    isLoggedIn : true ,
    fullname :{ //nesting of object values
        username: "123123", 
        userfullname :{
            firstName :"mayur",
            lastName : "Rajput"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName); //acces of nested object values


const obj1 = {1:'q' ,2:'w' ,3:'e'}
const obj2 = {4:'r' ,5:'t' ,6:'y'}
const obj3 = {7:'u' ,8:'i' ,9:'o'}


const obj4 = {...obj1 ,...obj2 ,...obj3}
// console.log(obj4);




const newUser = [
    {
        user : 1,
        email : "m@gmail.com"
    },
    {
        user : 1,
        email : "m@gmail.com"
    },
    {
        user : 1,
        email : "m@gmail.com"
    },
]


newUser[1].email //accesing values by index as object takes values in a array 

//accesing the object and manipulate it into array :
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));//gives array of key:value pair separately in an array 