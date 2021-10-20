let n = 5;
let linha = "";

for (let index = 1; index <= n; index += 1) {
  for (let coluna = 1; coluna <= n; coluna += 1) {
    linha += "*";
  }
  console.log(linha);
  linha = "";
}
