const operations = require('./operacoes'); //Importando dados de um arquivo operações
const readline = require ('readline-sync'); // Importando a biblioteca Node.js de terceiros

const num1 = readline.questionInt("Digite um número: ");
const oper = readline.question("Escolha a opreração:(+, -, *, /) ");
const num2 = readline.questionInt("Digite outro número ");

console.log("Calculadora Simples");

switch(oper) {
  case "+":
    operations.sum(num1, num2)
    break;
  case "-":
    operations.sub(num1, num2)
    break;
  case "*":
    operations.mult(num1, num2)
    break;
    case "/":
      operations.div(num1, num2)
      break;
  default:
    console.log("Ops! A operação não é válida ou não existe")
};