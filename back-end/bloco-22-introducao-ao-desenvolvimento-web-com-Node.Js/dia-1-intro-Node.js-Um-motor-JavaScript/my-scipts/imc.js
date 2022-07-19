const peso = 95;
const alt = 180;

function calcImc (peso, altura) {

  console.log(`O seu peso:  ${ peso}, e sua altura: ${ altura}`);

  const alturaPessoa = altura / 100;
  const alturaAoQuadrado = alturaPessoa ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;

}

function main () {
  const imc = calcImc(peso, alt);
  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();
