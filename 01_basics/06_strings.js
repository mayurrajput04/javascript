const name = "mayur"
const age = 20

console.log(name+"age is"+age);
//Do not use above syntax bcoz it is not the correct way to concatinate a string

//new way to concatinate the string is :
console.log(`My Name is ${name} and my age is ${age}`);

//another way to represent a string is:
const FirstName = new String("Mayur");

const strPrim = "hello"; // A literal is a string primitive
const strPrim2 = String(1); 
const strPrim3 = String(true);

const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"

console.log(typeof strObj); // "object"
console.log(typeof FirstName);//"object"
