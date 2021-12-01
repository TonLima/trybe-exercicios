// É extremamente importante ter em mente que as HOF nos permitem compactar ações e não somente repassar valores.
//Construímos essa função para implementar um laço de repetição entre 0 e um número especificado via parâmetro ( number ) e para mostrar no console o valor da variável count de 0 a N ( number ). O console.log é uma função própria do JavaScript , mas veja que fica mais simples caso você precise substituir esta ação para console.table ou console.group .
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

/*Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat , sendo:
1 - Um número até que ponto gostaríamos de testar, neste caso 3 ;
2 - Nossa ação que será executada quando chamada action(count) na nossa função repeat , neste caso uma função para testar nossos números.
Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso action(count) dentro da função repeat . Deste modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.*/
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

//Pense agora que gostaríamos de testar quais números são ímpares. Veja como fica fácil ajustar a implementação:
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if (number % 2 > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;
//Observe que apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções chamadas isEven e isOdd.Após isso, só alteramos o segundo parâmetro ao chamar a função repeat .
