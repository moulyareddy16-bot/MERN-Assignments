//Write a function that receives an array and search element as args and returns the index of that search element in the array. 
//It should return "not found" when search element is not found.


function search(arr,val){

    for(let i=0; i<arr.length; i++){

        if(arr[i]===val){

            return i;

        }
    }

    return "NOT FOUND";

}

let marks=[12,13,14];
let searchElement=13;

let result=search(marks, searchElement);
console.log(result);