// preciso saber o nome e a idade da pessoa

// readline-sync usando a bibiblioteca

const fs =require('fs');
const discount = require('./discount')

const readline = require ('readline-sync');

// Aqui estou definindo o que quero fazer
const askname = () => {
  return readline.question('Qual o seu nome?\nR: ');
}

const askage =() => {
  return readline.question('Qual a sua idade?\nR: ');
}

// Aqui estou chamando executando a função
const name = askname();
const age = askage();

// calcular o desconto
// retornar o valor de desconto

const finalPrice = discount(300, age);

console.log(`${name} o valor final foi de ${finalPrice} reais`);
fs.appendFileSync('logs.txt', `${name} o valor final foi de ${finalPrice} reais!\n`); // Cria um arqivo txt de log, para que eu possa saber os descontos dos usuários e adiciona logo a baixo , não sobreescreve como a fs.writeFileSync
