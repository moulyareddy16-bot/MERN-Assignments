/**
 * Array Spread Operations
 * Objective: Demonstrate copying and extending arrays using the spread operator.
 */

let fruits = ["apple", "banana"];

// 1. Create a new array moreFruits by extending the fruits array
let moreFruits = [...fruits, "mango", "pineapple", "kiwi"];
console.log("Original fruits:", fruits);
console.log("More fruits:", moreFruits);

// 2. Copy all fruits and add "orange" at the end
let copyFruits = [...fruits, "orange"];
console.log("Copy with orange:", copyFruits);