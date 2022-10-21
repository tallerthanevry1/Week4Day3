const { dogs } = require('./data.js');

// map()
// 1. Create a function that return an array of dog names using the map method.
// Invoke the function using the dogs array as its parameter

// const mapNames = (arr) => {
//     let names = arr.map((element, index) => {
//         return element.name
//     });
//     return names;
// }

// console.log(mapNames(dogs))


// 2. Create a function that return an array of objects with hold the property dog names and age using the map method.
// Invoke the function using the dogs array as its parameter

// const mapNamesAndAges = (arr) => {
//     let namesAndAges = arr.map((element, index) => {
//         return {name: element.name, age: element.age}
//     });
//     return namesAndAges;
// }

// console.log(mapNamesAndAges(dogs));


// 3. Create a function that adds an 'id' property using the index arguement using the map method.
// Invoke the function using the dogs array as its parameter

// const obj = { name: 'odell beckham jr'}
// obj.position = 'wide reciever'
// console.log(obj);

const addingIds = (arr) => {
    let addedId = arr.map((element, index) => {
        element.id = index + 1;
        return element;
    });

    return addedId;
}
console.log(addingIds(dogs));


 

