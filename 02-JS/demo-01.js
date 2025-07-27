// All References
// https://www.w3schools.com/js/js_es6.asp
// https://www.w3schools.com/js/js_let.asp
// https://www.w3schools.com/js/js_const.asp
// https://www.w3schools.com/js/js_datatypes.asp
// https://www.w3schools.com/js/js_typeof.asp
// https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/
// https://www.w3schools.com/js/js_hoisting.asp
// https://www.w3schools.com/js/js_destructuring.asp
// https://www.w3schools.com/react/react_es6_spread.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_rest
// https://www.w3schools.com/js/js_best_practices.asp


x=5;
console.log(x);
{
    var x;
}

var y = 6;
var z = x + y;
console.log(z);

// var is deprecated

// let 
// const

let zz;
zz = 8;
console.log(zz);


{
    let r = 7;
    console.log(r);
}
const COUNT = 5;


// COUNT = 8;


// Hoisting


// Object Destructuring

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// let {firstName:firstName, lastName:lastName,age:age} = person;
let {firstName, lastName,age} = person;
console.log(firstName);

// person['firsname'] = "jjjj"



// passing by value
let n1 = 5;
let n2 = n1;
n1 = 7; // passing by value
console.log(n1);
console.log(n2);

// passing by ref
let arr1 = ["Razan", "Mohammad"];
// let arr2 = arr1; // passing by ref
let arr2 = [...arr1];
arr1.push('Sultan');
console.log(arr1);
console.log(arr2);

// Spread operator
// ...

// 1. Copying Arrays & Objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 }; // Creates a new object
obj2.age = 30;
console.log(obj1);

// 2. Merging Arrays & Objects
const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];
const mergedArr = [arr11, arr22];
// arr22.push(7);
console.log(mergedArr);

// 3. Adding Elements to Arrays
const arr = [1, 2, 3];
const newArr = [0, ...arr, 4];
console.log(newArr);

// 4. Converting Strings to Arrays
const str = "Hello";
const charArray = [...str];
console.log(charArray);