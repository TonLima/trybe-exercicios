let anguloA = 35;
let anguloB = 150;
let anguloC = 20;

let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos) {
  if (somaDosAngulos === 205) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: ângulo inválido");
}
