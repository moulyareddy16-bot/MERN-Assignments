/**
 * Object Cloning & Property Addition
 * Objective: Demonstrate object cloning and property expansion using the spread operator.
 */

let user = {
  name: "Ravi",
  city: "Hyderabad"
};

// 1. Create a new object with additional properties using spread
let updatedUser = {
  ...user,
  age: 25,
  profession: "Developer" // Added for demonstration
};

console.log("Original User:", user);
console.log("Updated User:", updatedUser);