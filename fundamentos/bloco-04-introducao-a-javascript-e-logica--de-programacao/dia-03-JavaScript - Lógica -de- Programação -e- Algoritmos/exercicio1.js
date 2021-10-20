let n = 5;
let x = "";
for (let linha = 1; linha <= n; linha += 1) {
  for (let coluna = 1; coluna <= n; coluna += 1) {
    x += "*";
  }
  console.log(x);
  x = "";
}
