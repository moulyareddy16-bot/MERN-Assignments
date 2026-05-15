//Write a function that receives 3 numbers as  args and return the biggest number


let test=function(num1,num2,num3) {

   if(num1>=num2 && num1>=num3){

    return num1;

} else if(num2>=num3){

    return num2;

}else{

    return num3;
    
}

}

let result=test(5,6,7);
console.log(`Biggest number is ${result}`);

