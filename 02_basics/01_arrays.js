const myarr = [0 ,1 ,2 ,3 ,4 ,5 ]
// console.log(myarr);
// console.log(myarr[5]);

const myarr1 = new Array(1 ,2 ,3 ,4 ,5)
// console.log(myarr1[0]);


// Array Method :
// myarr1.push(7, 8 , 9)
// console.log(myarr1);
// myarr1.pop()
// console.log(myarr1);

// myarr.unshift(8)
// console.log(myarr);
// myarr.shift()
// myarr.shift()
// myarr.shift()
// console.log(myarr);

// const newarr = myarr.join()
// console.log(newarr);
// console.log(typeof newarr);

//slice and splice 

const Arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8)
console.log("A", Arr);


const new1 = Arr.slice(1 ,3) 
//Slice : It is used to cut out elements from an array. It does not affect the original array.
console.log("B", Arr);
console.log(new1);


const new2 = Arr.splice(1, 3)
// Splice : It is used to remove elements from an array or replace them.(it can manipulate the array and its elements )
console.log("C", Arr)
console.log(new2);
