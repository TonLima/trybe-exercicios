// brlValue.js
const brl = 5.37;

module.exports = brl;  // Para exportar algo no sistema CommonJS, utilizamos a variável global module.exports

// No arquivo acima estamos exportando do nosso módulo o valor da constante brl, que é 5.37. Ao importarmos esse módulo, receberíamos o valor 5.37 como resposta. Apesar disso funcionar, exportar um único valor constante assim não é comum. Vamos observar um caso que acontece com mais frequência


// brValue.js

const brl = 5.37;

const usdTobrl = (valueInUsd) => valueInUsd *brl;

module.exports = usdTobrl;


//Suponha que agora desejamos exportar tanto a função de conversão quanto o valor do dólar (a variável brl). Para isso, podemos exportar um objeto contendo as duas constantes da seguinte forma:
// brlValue.js
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};