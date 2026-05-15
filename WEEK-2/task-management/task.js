import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

let tasks = [];

function addTask(title, priority, dueDate) {
  const titleValid = validateTitle(title);
  const priorityValid = validatePriority(priority);
  const dateValid = validateDueDate(dueDate);

  // Check if all validations returned true (not an error string)
  if (titleValid === true && priorityValid === true && dateValid === true) {
    tasks.push({ title, priority, dueDate, completed: false });
    return "Task Added Successfully";
  } else {
    // Return the first error message found
    return typeof titleValid === "string" ? titleValid : "Invalid Task Data";
  }
}

function getAllTasks() {
  console.log("Current Tasks:", tasks);
}

function completeTask(taskTitle) {
  const task = tasks.find(t => t.title === taskTitle);
  if (!task) {
    console.log("Task Not Found");
    return "Task Not Found";
  }
  task.completed = true;
  console.log(`Task "${taskTitle}" marked as completed.`);
}

export { addTask, getAllTasks, completeTask };