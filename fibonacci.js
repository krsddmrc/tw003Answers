const number = prompt("enter a number for fibonacci:");
var num1 = 0;
var num2 = 1;
var result;
for (let i = 1; i <= number; i++) {
    console.log(num1);
    result = num1 + num2;
    num1 = num2;
    num2 = result;
}

console.log(result);