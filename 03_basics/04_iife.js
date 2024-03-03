// Immediately Invoked Function Expressions (IIFE)
// It is used to avoid pollution of globle scope variables (VVVIMP)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('mayur')