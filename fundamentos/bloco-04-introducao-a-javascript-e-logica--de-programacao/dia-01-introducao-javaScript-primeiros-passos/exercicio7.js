const notaFinal = 100;

if (notaFinal < 0 || notaFinal > 100) {
  console.log("Erro, nota incorreta");
} else if (notaFinal >= 90) {
  console.log("A");
} else if (notaFinal >= 80) {
  console.log("B");
} else if (notaFinal >= 70) {
  console.log("C");
} else if (notaFinal >= 60) {
  console.log("D");
} else if (notaFinal >= 50) {
  console.log("E");
} else {
  console.log("F");
}
