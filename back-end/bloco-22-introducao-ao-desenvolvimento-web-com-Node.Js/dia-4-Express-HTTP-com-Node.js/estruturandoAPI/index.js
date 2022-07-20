const express = require('express'); // Importando Express para ser usado na minha aplicação.

const app = express(); // 1 Criar uma nova aplicação Express;


const recipes = [
  { id: 1, name: 'lasanha', price: 40.0, waitTime: 30},
  { id: 2, name: 'macarrão a bolonesa', price: 35.0, waitTime: 25},
  { id: 3, name: 'macarrrão com molho branco', price: 35.0, waitTime: 25},
];

app.get('/recipes', function (req, res) {
  res.json(recipes); // 2 Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /recipes, a função recipes deve ser chamada;
  // Aqui para deixar mais evidente que o que vai ser devolvido é um JSON, utiliza-se .json.
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001'); // 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
})