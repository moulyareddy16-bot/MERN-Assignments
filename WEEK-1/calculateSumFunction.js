//Write a function that receives an array as arg and return their sum


let test=function(arr){

    let sum=0;

    for(let num of arr){

        sum+=num;

    }

    return sum;

}

let marks=[10,20,30];
let result=test(marks);
console.log(`Sum of Array is: ${result}`);