const express = require('express'); // Importando Express para ser usado na minha aplicação.

const app = express(); // 1 Criar uma nova aplicação Express;

app.get('/hello', handleHelloWorldRequest); // 2 Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3 Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Trybe Turma 19'); // 4 Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.
}


//====AS ROTAS RESPONDEM A REQUISIÇÕES QUE SATISFAÇAM A CONDIÇÃO MÉTODO HTTP + CAMINHO =================//

// EXEMPLOS

// const express = require('express');
// const app = express();

// /* Rota com caminho '/', utilizando o método GET */
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/', utilizando o método POST */
// app.post('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/', utilizando o método PUT */
// app.put('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/', utilizando o método DELETE */
// app.delete('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Rota com caminho '/' para qualquer método HTTP */
// app.all('/', function (req, res) {
//   res.send('Hello World!');
// });

// /* Ou podemos encadear as requisições para evitar repetir o caminho */
// app
//   .route('/')
//   .get(function (req, res) {
// 		// Requisições para rota GET `/` são resolvidas aqui!
//     res.send('Hello World! Get');
//   })
//   .post(function (req, res) {
// 		// Requisições para rota POST `/` são resolvidas aqui!
//     res.send('Hello World! post');
//   });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

