/**
 * ASSIGNMENT 3: Employee Payroll Processor
 * Objective: Calculate payroll and net salaries with bonuses.
 */

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. Filter employees from IT department
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Department Employees:", itEmployees);

// 2. Map to add netSalary (Salary + 10% bonus)
const payrollData = employees.map(emp => {
  return {
    ...emp,
    netSalary: emp.salary + (emp.salary * 0.10)
  };
});
console.log("Payroll Data with Net Salary:", payrollData);

// 3. Reduce to calculate total salary payout
const totalPayout = payrollData.reduce((acc, emp) => acc + emp.netSalary, 0);
console.log("Total Salary Payout:", totalPayout);

// 4. Find employee with salary exactly 30000
const specificSalaryEmp = employees.find(emp => emp.salary === 30000);
console.log("Employee with 30,000 salary:", specificSalaryEmp);

// 5. Find index of employee "Neha"
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha is:", nehaIndex);