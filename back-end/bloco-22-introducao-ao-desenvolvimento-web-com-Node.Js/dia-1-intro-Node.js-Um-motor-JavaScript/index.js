// Agora estamos exportando uma função, de modo que podemos utilizá-la para converter um valor em dólares para outro valor, em reais.
// O uso desse nosso módulo se daria da seguinte forma:

// index.js
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7