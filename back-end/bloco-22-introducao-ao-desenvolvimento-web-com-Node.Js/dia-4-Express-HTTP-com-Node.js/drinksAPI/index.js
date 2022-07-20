const express = require('express'); // Importando Express para ser usado na minha aplicação.

const app = express(); // 1 Criar uma nova aplicação Express;


const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (_req, res) {
  res.json(drinks); // 2 Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /drinks, a função drinks deve ser chamada;
  // Aqui para deixar mais evidente que o que vai ser devolvido é um JSON, utiliza-se .json.
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001'); // 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
})