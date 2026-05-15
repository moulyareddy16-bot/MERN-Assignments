//Find the minimum mark in a marks Array


let marks=[90,78,65,98];
let min=marks[0];

for(let mark of marks){

    if(mark<min){

        min=mark;

    }
}

console.log(`Min of mark is ${min}`);