const { dogs } = require("./data.js");

// .filter()
// The filter() method creates a shallow copy of a portion of a given array
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
// [].filter(( 1. element, 2. index, 3. array ) => {})
// Element argument represents the array's element value
// Index argument represents the array's index value (optional)
// Array arguement represents the array's value (optional and rarely ever used)


// 1. Create an array with only of dogs under 5

// const underFive = dogs.filter((element, index) => {
//     return element.age < 5;
// });

// console.log(underFive);

// 2. Create an array with dogs that are in the even index position

// const even = dogs.filter((element, index) => {
//     return index % 2 === 0;
// })

// console.log(even)

// 3. Create an array with dogs that are in the odd index position

// const odd = dogs.filter((element, index) => {
//     return index % 2 !== 0;
// })

// console.log(odd)

// 4. Create an array with dogs with no owner

// const noOwner = dogs.filter((element, index) => {
//     return !element.owner;
// });

// console.log(noOwner)