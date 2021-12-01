// Elas suportam as mesmas operações que estão disponíveis para os outros tipos. Isso significa que nossas funções podem ser atribuídas à variáveis, passadas como argumento e/ou retornadas por outras funções. JavaScript é uma linguagem que utiliza esse conceito, portanto podemos: Atribuir funções à variáveis
function sum(number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable); // Retorna no output: [Function: sum]
// No exemplo acima, vemos a declaração da função sum acontecendo e a atribuição da mesma função dentro de uma variável chamada sumVariable .

// Quando utilizamos arrow functions , estamos justamente utilizando da capacidade do javascript de conseguir armazenar a função dentro de uma variável.
const sum = (number1, number2) => {
  return number1 + number2;
};

// Podemos passar funções como argumento para outras funções como no exemplo abaixo.
const sayHello = () => {
  return 'hello trybers';
};

const printGreeting = (callback) => {
  console.log(callback());
};

printGreeting(sayHello);

// Podemos retornar uma função de outra função.
const sumFixAmount = (amount) => {
  return (number) => amount + number;
};

const initialSum = sumFixAmount(15);
console.log(initialSum(5));
