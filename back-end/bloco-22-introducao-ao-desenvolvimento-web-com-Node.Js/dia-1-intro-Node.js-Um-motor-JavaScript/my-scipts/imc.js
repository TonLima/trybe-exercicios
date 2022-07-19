const { main } = require('./operationImc');

const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? (em KG) ');
const altura = readline.questionInt('Qual a sua altura? (em CM) ');

console.log(`O seu peso é ${peso} e a sua altura é ${altura}\n`);

const imc = main( peso,altura);




// function calcImc (peso, altura) {

//   console.log(`O seu peso:  ${ peso}, e sua altura: ${ altura}`);

//   const alturaPessoa = altura / 100;
//   const alturaAoQuadrado = alturaPessoa ** 2;

//   const imc = (peso / alturaAoQuadrado);

//   return imc;

// }

// function main () {
//   const imc = calcImc(peso, alt);
//   console.log(`IMC: ${imc.toFixed(2)}`);
// }

// main();
