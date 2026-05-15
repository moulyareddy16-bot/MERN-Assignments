/**
 * Exam Portal Simulator
 * Objective: Demonstrate asynchronous flow using setTimeout.
 */

console.log("Exam submitted successfully.");

// Show "Evaluating answers..." after 2 seconds
setTimeout(() => {
  console.log("Evaluating answers...");
}, 2000);

// Show "Result: Pass" after 4 seconds (2 seconds after the evaluation message)
setTimeout(() => {
  console.log("Result: Pass");
}, 4000);