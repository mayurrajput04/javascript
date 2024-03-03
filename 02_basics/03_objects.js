//singleton : object.create method is used.

//defining a symbol data type in js 
const mySym = Symbol("key1")

//literal method of defining a object
const JsUser ={
    name : "Mayur" ,
    "full name" : "Mayur Rajput" ,
    age : 19 ,
    isLoggedIn : false ,
    location : "sambhajinagar" ,
    emailId : "mayurrajput@google.com" ,
    [mySym] : "newkey1" , //syntax for symbol data type 


}

//Following are the ways we can access the values in object :
//1 =>
// console.log(JsUser.name);
// // 2=>Use the following method mostly:
// console.log(JsUser["name"]);  
// console.log(JsUser["full name"]);// fulll name can be accessed by only this method
// console.log(JsUser[mySym])
// console.log(typeof mySym);


//we can manipulate (change) the value as following ;
JsUser.emailId ="rajputmayur@microsoft.com"

// TO stop the manipulation on a object we use :
// Object.freeze(JsUser) 

//now further changes cannot be applied to JsUser
// JsUser.name = "suraj" //this changes cannot be applied as we used object.freeze() method



JsUser.greetings = function () {
   console.log("Hello JsUser");
}

console.log(JsUser.greetings());

JsUser.greetingTwo = function(){
    console.log(`Hello , ${this.name}`);
}

console.log(JsUser.greetingTwo());
