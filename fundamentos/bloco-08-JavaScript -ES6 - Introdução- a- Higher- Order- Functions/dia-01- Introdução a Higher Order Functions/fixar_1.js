const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculadora = (func) => func(10, 5);

console.log(calculadora(sum));
console.log(calculadora(sub));
console.log(calculadora(mult));
console.log(calculadora(div));
