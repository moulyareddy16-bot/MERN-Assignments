/**
 * Shallow Copy Demo
 * Objective: Demonstrate how shallow copies share nested object references.
 */

const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// 1. Create a shallow copy using spread operator
let copyUser = { ...user };

// 2. Modify values
// Changing primitive property only affects the copy
copyUser.name = 'moulya';

// Changing nested object property affects BOTH original and copy (shared reference)
copyUser.preferences.theme = 'light';

console.log("Original User (preferences.theme changed to light):", user);
console.log("Copied User (name changed to moulya):", copyUser);