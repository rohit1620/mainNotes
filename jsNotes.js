// 🌟 What is ECMAScript?
// ECMAScript (ES) is the standard for JavaScript. It defines how the language should work. JavaScript follows this standard. New features are added in versions like ES5, ES6 (ES2015), ES7, and so on.

// 🔹 ES5 (2009)  ##########################################################################################
// 1. strict mode
// Theory:
// strict mode helps you write safe JavaScript code.
// It prevents common mistakes like using undeclared variables.
"use strict";
x = 10; // Error: x is not declared

// 2. Array.forEach()
// Theory:
// The forEach() method runs a function for every item in the array.
// It is used to loop through each element without returning anything.
const fruits = ["apple", "banana"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 🔹 ES6 (2015)  #############################################################################################
// 1. let and const
// Theory:
// let is used to declare variables that can be changed.
// const is used to declare variables that cannot be changed.
let age = 25;
const name = "John";

// 2. Arrow Functions
// Theory:
// Arrow functions are a shorter way to write normal functions.
// They also do not bind their own this value.
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// 3. Template Literals
// Theory:
// Template literals let you create strings using backticks.
// You can insert variables using ${} inside the string.
let name1 = "Rohit";
console.log(`Hello, ${name1}!`);

// 4. Default Parameters
// Theory:
// Default parameters set a value when no argument is passed.
// This helps avoid undefined values in functions.
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }
  greet(); // Hello, Guest

//   5. Destructuring
//   Theory:
//   Destructuring lets you take values from arrays or objects easily.
//   It saves time and makes your code shorter and cleaner.  
const person = { name2: "Rohit", age2: 24 };
const { name2, age2 } = person;
console.log(name2); // Rohit

// 6. Spread and Rest Operators
// Theory:
// Spread ... expands arrays or objects into separate elements.
// Rest ... collects multiple items into a single variable.
const nums = [1, 2, 3];
const newNums = [...nums, 4];

function sum(...args) {
  return args.reduce((a, b) => a + b);
}

// 7. Classes
// Theory:
// Classes are templates for creating objects.
// They make it easier to organize and reuse code
class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hi, I am ${this.name}`);
    }
  }
 
//   8. Promises
//   Theory:
//   Promises are used to handle asynchronous tasks.
//   They help you run code after something finishes, like loading data. 
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  promise.then(result => console.log(result));

//   🔹 ES8 (2017)  ##################################################################################
//   1. async / await
//   Theory:
//   async and await make working with promises easier.
//   They help write code that looks like normal synchronous code.  
async function getData() {
    return "Hello";
  }
  getData().then(data => console.log(data));

// 2. Object.entries() and Object.values()
// Theory:
// Object.entries() gives key-value pairs from an object.
// Object.values() returns only the values.
const user = { name: "Rohit", age: 24 };
console.log(Object.entries(user)); // [['name','Rohit'], ['age',24]]
console.log(Object.values(user)); // ['Rohit', 24]

// 🔹 ES9 (2018)    #############################################################################
// 1. Rest/Spread in Objects
// Theory:
// Spread ... can copy an object.
// Rest ... can collect remaining properties into a new object.
const person1 = { name: "Rohit", age: 24 };
const clone = { ...person1 };

// 2. Promise.finally()
// Theory:
// finally() runs after .then() and .catch().
// It is useful for cleanup tasks like hiding a loading spinner.
fetch("url")
  .then(res => res.json())
  .catch(err => console.error(err))
  .finally(() => console.log("Finished"));

//   🔹 ES10 (2019)    #######################################################################
//   1. flat() and flatMap()
//   Theory:
//   flat() makes nested arrays into a single-level array.
//   flatMap() does mapping and flattening in one step.  
const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]
const arr1 = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

// 2. trimStart() and trimEnd()
// Theory:
// These methods remove spaces from the start or end of a string.
// Useful when cleaning user input.
let name3 = "  Rohit  ";
console.log(name3.trimStart()); // "Rohit  "
console.log(name3.trimEnd());   // "  Rohit"

// 🔹 ES11 (2020)  ##############################################################################
// 1. Optional Chaining ?.
// Theory:
// ?. helps access deep object values safely.
// It prevents errors if a value is undefined or null.
const user1 = {};
console.log(user1?.profile?.name); // undefined

// 2. Nullish Coalescing ??
// Theory:
// ?? gives a default value if the left side is null or undefined.
// It does not replace values like 0 or false.
let name4 = null;
console.log(name4 ?? "Guest"); // Guest

// 🔹 ES12 (2021)  #################################################################################
// 1. Logical Assignment Operators
// Theory:
// These are shortcuts for assigning values using logic.
// Example: ??= sets a value only if it's null or undefined.
let a = null;
a ??= 5;
console.log(a); // 5

// 2. Numeric Separators
// Theory:
// Underscores make big numbers easier to read.
// It does not affect the value of the number.
let billion = 1_000_000_000;
console.log(billion); // 1000000000

// 🔹 ES13 (2022) ##################################################################################
// 1. at() Method
// Theory:
// The at() method returns the item at a specific index.
// You can also use negative indexes to count from the end.
const arr2 = [10, 20, 30];
console.log(arr2.at(-1)); // 30

// 2. Top-Level await (in modules)
// Theory:
// await can now be used directly at the top level in ES modules.
// It helps load data outside functions without using .then().
// Only works in modules
// const data = await fetch("api");

// 🔹 ES14 (2023)  ###################################################################################
// 1. Array.prototype.with()
// Theory:
// The with() method creates a copy of an array with one item changed.
// It does not change the original array.
const arr4 = [1, 2, 3];
const newArr = arr4.with(1, 99);
console.log(newArr); // [1, 99, 3]


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ JAVASCRIPT METHODS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

// 🔷 ARRAY METHODS  ##################################################################################
// 1. push()
// Theory:
// Adds an item to the end of an array.
// It changes the original array and returns the new length.
let arr5 = [1, 2];
arr5.push(3);
console.log(arr5); // [1, 2, 3]

// 2. pop()
// Theory:
// Removes the last item from an array.
// It returns the removed item.
let arr6 = [1, 2, 3];
let x = arr6.pop();
console.log(x); // 3

// 3. shift()
// Theory:
// Removes the first item of the array.
// It shifts the rest of the elements left.
let arr7 = [1, 2, 3];
arr7.shift();
console.log(arr7); // [2, 3]

// 4. unshift()
// Theory:
// Adds one or more items to the start of the array.
// Returns the new length of the array.
let arr8 = [2, 3];
arr8.unshift(1);
console.log(arr8); // [1, 2, 3]

// 5. slice(start, end)
// Theory:
// Returns part of the array from start to end-1.
// Does not change the original array.
let arr9 = [1, 2, 3, 4];
console.log(arr9.slice(1, 3)); // [2, 3]

// 6. splice(start, deleteCount)
// Theory:
// Removes or adds items to the array.
// It changes the original array.
let arr10 = [1, 2, 3, 4];
arr10.splice(1, 2);
console.log(arr10); // [1, 4]

// 7. forEach()
// Theory:
// Runs a function on every array item.
// It does not return a new array.
[1, 2, 3].forEach(x => console.log(x * 2)); // 2, 4, 6

// 8. map()
// Theory:
// Returns a new array with function results.
// Does not change the original array.
let doubled = [1, 2, 3].map(x => x * 2);
console.log(doubled); // [2, 4, 6]

// 9. filter()
// Theory:
// Returns a new array with items that pass a condition.
// Useful for removing unwanted items.
let even = [1, 2, 3, 4].filter(x => x % 2 === 0);
console.log(even); // [2, 4]

// 10. reduce()
// Theory:
// Reduces the array to a single value.
// Useful for calculating sums or products.
let sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
console.log(sum); // 6

// 11. includes()
// Theory:
// Checks if an item is in the array.
// Returns true or false.
let arr11 = [1, 2, 3];
console.log(arr11.includes(2)); // true

// 12. indexOf()
// Theory:
// Returns the index of the first match.
// If not found, returns -1.
let arr12 = [1, 2, 3];
console.log(arr12.indexOf(2)); // 1

// 🔷 STRING METHODS   #############################################################################
// 1. charAt(index)
// Theory:
// Returns the character at a specific index.
// Index starts from 0.