const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["batman" ,"superman" ,"flash"]

// marvel_heros.push(dc_heros)
//It will add our dc_heros as array at 4th index.
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
// Concat will merge both arrays in a new array
console.log(all_heros);

//to make merging of more than 2 array easier we use "spread" operator
const newhero = [...marvel_heros , ...dc_heros]
console.log(newhero);
//to write efficient code we use spread also known as "...Arrayname"

const newarray = [1, 2, 3, 4, 5, [6, 7, 8], 6, 9 ,[0, 10]]
const another_array = newarray.flat()//flat is used to make all elements independent in array of array
console.log(another_array)


console.log(Array.isArray("Mayur"));
console.log(Array.from('Mayur'));
console.log(Array.from({name : 'Mayur'})); //Gives an empty list . we have to declare whether we have to create array of key or value individually 

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1 ,score2 ,score3)); //return a array from set of different elements