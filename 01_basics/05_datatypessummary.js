/* Datatypes in js is based on how data is stored and how we can acces 
   the respective data 

*Types:
#primitive : (--call by value--) String , Number ,Boolean ,null ,undefined ,symbol, BigInt

--examples--
        const score = 100
        const scoreValue = 100.3

        const isLoggedIn = false
        const outsideTemp = null
        let userEmail;

        const id = Symbol('123')
        const anotherId = Symbol('123')

        console.log(id === anotherId);
        const bigNumber = 3456543576654356754n
-----------------------------------------------------------------------        
#Non-primitive : (--call by reference--) Array ,Objects ,Functions

--examples--
    const heros = ["shaktiman", "naagraj", "doga"];
    let myObj = {
        name: "hitesh",
        age: 22,
    }

    const myFunction = function(){
        console.log("Hello world");
    }


***********************************************************************

#Return type of variables in JavaScript:

        1) Primitive Datatypes:
            Number => number
            String  => string
            Boolean  => boolean
            null  => object
            undefined  =>  undefined
            Symbol  =>  symbol
            BigInt  =>  bigint

        2) Non-primitive Datatypes:
            Arrays  =>  object
            Function  =>  function
            Object  =>  object



*/