// Objeto pessoa com as propriedades, nome, sobrenome e saudação que retorna uma saudação simples!

const pessoa = {
  nome: 'Washington',
  sobreNome: 'Lima Ferreira',

  saudacao: () => {
    return `Olá`;
  },
};

console.log(pessoa.saudacao());

//----------------------Segunda parte do código--------------------------
// Objeto pessoa com as propriedades, nome, sobrenome e saudação que retorna uma saudação dinâmica através de uma callback!

// Função com uma saudação formal.
const saudacaoFormal = () => {
  return `Olá, tudo bem com você?`;
};

const pessoa = {
  nome: 'Washington',
  sobreNome: 'Lima Ferreira',

  saudacao: (callback) => {
    return callback();
  },
};

console.log(pessoa.saudacao(saudacaoFormal));

// Função com uma saudação amorosa.
const saudacaoAmorosa = (nomePessoa) => {
  // Aqui passo um parâmetro nomePessoa.
  return `Olá ${nomePessoa} tudo bem com você meu amor?`;
};

// Função com uma saudação seca.

const saudacaoSeca = () => {
  return `Oi!`;
};

const pessoa = {
  nome: 'Washington',
  sobreNome: 'Lima Ferreira',

  saudacao: function (callback, nomePessoa) {
    return callback(nomePessoa); // Aqui passo o parâmetro nomePessoa para que seja retornado a string 'Rute' no console.log abaixo.
  },
};

console.log(pessoa.saudacao(saudacaoAmorosa, 'Rute'));
console.log(pessoa.saudacao(saudacaoSeca));
