var str = prompt("enter letters you want, please");

console.log('your letters are: ' + str);
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log('The reversed letters are: ' + reversedStr);