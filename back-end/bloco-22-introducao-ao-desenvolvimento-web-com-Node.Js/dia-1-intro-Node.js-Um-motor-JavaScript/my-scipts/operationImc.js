function calcImc (peso, altura) {

  // console.log(`O seu peso:  ${ peso}, e sua altura: ${ altura}`);

  const alturaPessoa = altura / 100;
  const alturaAoQuadrado = alturaPessoa ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;

}

const operationImc = {
  calcImc:(peso, altura) => {

    // console.log(`O seu peso:  ${ peso}, e sua altura: ${ altura}`);

    const alturaPessoa = altura / 100;
    const alturaAoQuadrado = alturaPessoa ** 2;

    const imc = (peso / alturaAoQuadrado);

    return imc;
  },
 main: (peso,altura) => {
  const imc = calcImc(peso, altura);
  console.log(`IMC: ${imc.toFixed(2)}`);
}}

// function main ( peso,altura) {
//   const imc = calcImc(peso, altura);
//   console.log(`IMC: ${imc.toFixed(2)}`);
// }


module.exports = operationImc;