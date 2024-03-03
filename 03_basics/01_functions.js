




//  Function definition =>
function myName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("R");
}

//function reference =>
// myName


//function execution =>
// myName()




function additionOfNumbers(number1 , number2){
    const result = number1 + number2
    return result 
}

const result =  additionOfNumbers(3 ,5)
// console.log(result);
// console.log(typeof result);

function loginUserMessage(userName ="User"){
    return `${userName} just logged in!!`
}

// console.log(loginUserMessage("Mayur"));


function anotherfunc(val1 ,val2 ,...num){
    // ...num takes multiple arguments as an array 
    return num
}

// console.log(anotherfunc(200 ,300 ,400 ,600 ,8000 ,23)); => returns [400 ,600 ,8000 ,23]


//function as object =>
const user ={
    username : "user123" ,
    password : "pass#123"
}

function handleObject(anyobject){
    return `Username is ${anyobject.username} and password is ${anyobject.password}`
}

// console.log(handleObject(user));
// console.log(
//     handleObject({
//     username :"mayur" ,
//     password : "123##mayur"
// }));


//function as array =>
//write a program to return the second index of any array if present
const myArray = [2000 ,300 ,600 ,800]

function myNewArray(anyArray){
    return anyArray[2]
}

console.log(myNewArray(myArray));
