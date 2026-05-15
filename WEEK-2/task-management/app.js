// main application
import { addTask, getAllTasks, completeTask } from "./task.js";

console.log("--- Adding Tasks ---");
console.log(addTask("Eating", "HIGH", "2024-12-12"));
console.log(addTask("Writing", "HIGH", "2024-10-16"));
console.log(addTask("Sleeping", "LOW", "2025-01-01"));

console.log("\n--- All Tasks ---");
getAllTasks();

console.log("\n--- Completing Task ---");
completeTask("Eating");

console.log("\n--- Final Task List ---");
getAllTasks();
