/*
1. Insert new Emp at 2nd position
2. Remove an emp with name "Kiran"
3. Change the last mark 95 to 75 of emp  "Sneha" */


const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

//Inserting new Emp at 2nd position
employees.splice(1, 0, {eno:65, name:"moulya", marks:[85,99,98]});

//Removing an emp with name "Kiran"
for (let i = 0; i<employees.length; i++) {

  if(employees[i].name==="Kiran"){
    employees.splice(i,1);
  }

}

//Change the last mark 95 to 75 of emp  "Sneha"
for(let emp of employees){

    if(emp.name=="Sneha"){

        emp.marks.splice(2,1,75);

    }

}

console.log(employees);
