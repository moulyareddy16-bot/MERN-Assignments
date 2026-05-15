/**
 * Rest Parameter Sum
 * Objective: Calculate the sum of any number of parameters using rest parameters.
 */

const sumAll = (...nums) => {
  // Use initial value 0 to handle cases with no arguments
  return nums.reduce((acc, curr) => acc + curr, 0);
};

console.log("Sum of (1, 2, 3, 4):", sumAll(1, 2, 3, 4));
console.log("Sum of empty arguments:", sumAll());
console.log("Sum of (10, 20):", sumAll(10, 20));