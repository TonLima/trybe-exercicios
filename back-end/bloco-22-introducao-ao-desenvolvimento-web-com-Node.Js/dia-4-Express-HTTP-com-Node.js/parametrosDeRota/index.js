const express = require('express'); // Importando Express para ser usado na minha aplicação.

const app = express(); // 1 Criar uma nova aplicação Express;


const recipes = [
  { id: 1, name: 'lasanha', price: 40.0, waitTime: 30},
  { id: 2, name: 'macarrão a bolonesa', price: 35.0, waitTime: 25},
  { id: 3, name: 'macarrrão com molho branco', price: 35.0, waitTime: 25},
];

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'}); // Perceba que na linha com o if possui um return. Isso serve para indicar para o Express que ele deve quebrar o fluxo e não executar a linha res.status(200).json(recipe);

    res.status(200).json(recipe);

    // Foi implementado uma busca no array receitas para encontrar a receita onde o id é igual ao valor recebido como parâmetro, tendo o cuidado de converter o valor para inteiro, já que por padrão todo parâmetro de rota é uma string. No final, retornou o objeto receita que corresponde a receita encontrada. 🥳

});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001'); // 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
})