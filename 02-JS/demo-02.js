// function decalration
// console.log('Sum=', geeksforGeeks(5, 5));

// function geeksforGeeks(paramA, paramB) {
//     return paramA + paramB;
// }

// expression

// let geeksforGeeks2 = function (paramA, paramB) {
//     return paramA + paramB;
// }

// console.log("Sum: ",geeksforGeeks2(5, 5));



// Function Expression
// const add = function (a, b) {
//     console.log(a + b);
// }
// add(2, 3);


// arrow functions
// const add2 = (a, b) => {
//        return (a + b);
// }
// console.log(add2(3, 5));


// let add = (a, b) => a + b;
// console.log(add(3, 2));


// const user1 = {
//     name: "Alice",
//     greet: function () {
//       console.log(`Hello, ${this.name}`);
//     },
//   };

//   user1.greet();

//   const user2 = {
//     name: "Alice",
//     greet: () => {
//       console.log(`Hello, ${this.name}`);
//     },
//   };

//   user2.greet();

// const user3 = {
//     name: "Alice",
//     greet: function () {
//       const inner = () => {
//         console.log(`Hello, ${this.name}`);
//       };
//       inner();
//     },
//   };

//   user3.greet();



// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this); // ✅ Refers to the button element
// });

// button.addEventListener("click", () => {
//   console.log(this); // ❌ Refers to the global `window` object (not the button)
// });


// Template Literals
// uses: 
// 1- String Interpolation with Expressions
// let x = 5;
// let y = 10;
// console.log('The sum of'+ x + 'and' + y + 'is' + (x+y));
// console.log('The sum of ${x} and ${y} is ${x + y}');
// console.log(`The sum of ${x} and ${y} is ${x + y}`);

// 2- Multi-line Strings with Template Literals
// const s = `This is a multi-line
// string that spans across
// several lines.`;
// console.log(s);

// const s2 = `This is a raza\`s bactick: ' and this is a dollar sign: `;
// console.log(s2);

// array iterations

// let people = ['Razan', 'Sherry', 'Abdulrahman', 'Aisha'];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }


// people.forEach(function(person,idx){
//   console.log(person);
//   console.log(index);
// })

// people.forEach((person,index)=>{
//   console.log(person);
//   console.log(index);
// })

// function peopleiteration(person,index) {
//     console.log(); 
// }
// people.forEach(peopleiteration)



// let numbers = [2, 3, 4, 5];
// let squares = numbers.map((item,idx)=>{
//   return item*item;
// });
// console.log(numbers);
// console.log(squares);


let people = [
  { name: "Atallah", role: "Dad" },
  { name: "Messina", role: "Mom" },
  { name: "Razan", role: "Kid" },
  { name: "Zaid", role: "Kid" },
];

// let names = people.map((person)=> person.name)

// let names = people.map((person,idx)=>{
// //   return person.name;
//   if (person.name === 'Atallah') {
//     return person.name;
//   }
// })

// console.log(names);

let numbers= [0,1,2,6,7,8];
let evens = numbers.filter((n,i)=>{
  if(n%2===0) { return n;}
})
console.log(numbers);
console.log(evens);