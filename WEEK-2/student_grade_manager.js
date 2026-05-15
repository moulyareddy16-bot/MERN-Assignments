/**
 * ASSIGNMENT 2: Student Performance Dashboard
 * Objective: Analyze student results and assign grades.
 */

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. Filter students who passed (marks >= 40)
const passingStudents = students.filter(student => student.marks >= 40);
console.log("Passing students:", passingStudents);

// 2. Map to add grade field (A, B, C, D)
const studentsWithGrades = students.map(student => {
  let grade;
  if (student.marks >= 90) {
    grade = "A";
  } else if (student.marks >= 75) {
    grade = "B";
  } else if (student.marks >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }
  return { ...student, grade }; // Return new object to avoid mutation
});
console.log("Students with grades:", studentsWithGrades);

// 3. Reduce to calculate average marks
const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
console.log("Average Marks:", totalMarks / students.length);

// 4. Find student who scored exactly 92
const topScorer = students.find(student => student.marks === 92);
console.log("Student who scored 92:", topScorer);

// 5. Find index of student "Kiran"
const kiranIndex = students.findIndex(student => student.name === "Kiran");
console.log("Index of Kiran is:", kiranIndex);