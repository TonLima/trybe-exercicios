/* Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Washington';
let lastName = 'Lima Ferreira';
let age = 39;
let medals = {golden: 2, silver: 3};*/

let player = {
  name: "Washington",
  lastName: "Lima Ferreira",
  age: 39,
  medals: { golden: 2, silver: 3 },

  bestInTheworld: [2006, 2007, 2008, 2009, 2010, 2018], //Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
};

/*Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "O jogador Washington Lima Ferreira tem 39 anos de idade".
console.log(
"O jogador " +
player.name +
" " +
player.lastName +
" tem " +
player.age +
" anos. "
);*/

/* Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log(
  " O jogador " +
    player.name +
    " " +
    player.lastName +
    " foi eleito o melhor jogador do mundo por " +
    player.bestInTheworld +
    " seis vezes. "
);*/

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(
  " O jogador possui " +
    player.medals.golden +
    " medalhas de ouro e " +
    player.medals.silver +
    " medalhas de prata. "
);
