const readline = require('readline-sync'); //fazendo a importação de um pacote de terceiros

const name = readline.question('Qual é o seu nome?');
const age = readline.questionInt('Qual a sua idade?');

console.log(`Hello, ${name}! You are ${age} years old!`);


// console.log('hello, world!');