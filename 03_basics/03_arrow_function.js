const user = {
    username :"mayur",
    price :299,

    welcomeUser: function(){
        console.log( `Hello ${this.username} , welcome to website !!`);
        console.log(this); 
        // above will give reference of user
    }   
}

// user.welcomeUser()
// user.username = "suraj"
// user.welcomeUser() 
// console.log(this); //this will give empty object


//_____________________________arrow_function_____________________________

//basic syntax :() => {}


const randomFunction = () => {
    username :"mayur"
    console.log(this);
}
// randomFunction()

//explicit return =>
// const addNum = (num1 ,num2)=>{
//     return num1+ num2
// }

// console.log(addNum(3 ,5));

//Implicit return =>
const addNum = (num1 ,num2)=> num1+ num2
//or
const addNum1 = (num1 ,num2) => ( num1 +num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})