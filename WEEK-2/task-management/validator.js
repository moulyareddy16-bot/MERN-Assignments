// input validation logic

function validateTitle(title) {
  if (!title) {
    return "Title is required";
  }
  if (title.length < 3) {
    return "Title must be at least 3 characters long";
  }
  return true;
}

function validatePriority(priority) {
  const priorities = ["LOW", "HIGH", "MEDIUM"];
  if (priorities.includes(priority.toUpperCase())) {
    return true;
  }
  return "Priority must be LOW, MEDIUM, or HIGH";
}

function validateDueDate(date) {
  // Simple check for existence, could be expanded to date format check
  return date ? true : "Due date is required";
}

export { validateTitle, validatePriority, validateDueDate };
