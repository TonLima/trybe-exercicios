/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .*/

const newEmployees = () => {
  const employees = {
    id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas.
  };
  return employees;
};

const dadosEmployees = (nomeCompleto) => {
  const email = `${nomeCompleto
    .replace(/ /g, '_')
    .toLowerCase()}@trybe.com`; /* Nessa linha ele pega o nome completo faz o replace que é a troca dos espaços em brancos por anderline e depois o toLowerCase muda a frase que está com caixa alta para caixa baixa.*/
  return { nome: nomeCompleto, email: email };
};

console.log(dadosEmployees('Washington Lima Ferreira'));
