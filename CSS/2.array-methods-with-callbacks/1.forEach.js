const { dogs } = require('./data.js');

// For Loop:
// 1. Create function which has a for loop that console.logs each ELEMENT. 

// Invoke the function using the dogs array as its parameter
// const forLoopLog = (arr) => {
//     for(let i=0; i<arr.length;i+=1){
//         console.log('element', arr[i]);
//     }
// }
// forLoopLog(dogs);

// 2. Create a function which pushes the dog name into an empty array. 
// After the for loop has finished, console.log the array which was previously empty and now has a list of names

// Invoke the function using the dogs array as its parameter
// const names = [];

// const forLoopNames = (arr) => {
//     for(let i=0;i<arr.length;i+=1){
//         names.push(arr[i].name);
//     }
//     console.log(names)
// }

// forLoopNames(dogs);


// The forEach() method executes a provided function once for each array element.
// the forEach method accepts a function as a parameter. This is the callback function. 
// The call back function has the following arguments 
// [].forEach(( 1. element, 2. index, 3. array ) => {})
// Element argument represents the array's element value
// Index argument represents the array's index value (optional)
// Array arguement represents the array's value (optional and rarely ever used)

// forEach():
// const forEachElementAndIndex = (arr) => {
//     arr.forEach((element, index) =>{
//         console.log(element, index);
//     })
// }

// forEachElementAndIndex(dogs)




// Create a function which pushes the dog name into an empty array. 
// After the forEach has finished, console.log the array which was previously empty and now has a list of names

// Invoke the function using the dogs array as its parameter


// const names = [];

// const forEachNames = (arr) => {
//     arr.forEach((element, index) => {
//         names.push(element.name);
//     })

//     console.log(names)

// }

// forEachNames(dogs)




// Using for each to push into an empty array 2 properties


// const nameAndAge = [];


// const addingNameAndAge = (arr) => {
//     arr.forEach((element, index) => {
//         nameAndAge.push({ name: element.name, age: element.age})
//     });

//     console.log(nameAndAge)
// }


// addingNameAndAge(dogs)