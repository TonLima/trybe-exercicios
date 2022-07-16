const sum = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`);

const sub = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`);

const mult = (num1, num2) => console.log(`${num1} * ${num2} = ${num1 * num2}`);

const div = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`);

module.exports = { //exportando as minhas funções de sum, sub, mult e div
  sum,
  sub,
  mult,
  div
};


