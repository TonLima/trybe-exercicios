/*Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
(Não gaste tempo pensando no texto e sim realizando o exercício)*/
function colorText() {
  let paragrafo = document.getElementsByTagName("p")[1];
  paragrafo.innerHTML = "Gostaria de estar manjando muito de desenvolvimento";
}
colorText();

/* Crie uma função que mude a cor do quadrado amarelo para 
o verde da Trybe (rgb(76,164,109)).*/

function colorSquareGreen() {
  let squareYellow = document.getElementsByClassName("main-content")[0];
  squareYellow.style.backgroundColor = "rgb(76,164,109)";
}
colorSquareGreen();

/*Crie uma função que mude a cor do quadrado vermelho para branco.*/

function colorSquareRed() {
  let squareRed = document.querySelector(".center-content");
  squareRed.innerHTML = "washington";
  squareRed.style.backgroundColor = "white";
}

const btnAlterar = document.getElementById("btn-alterar");
btnAlterar.addEventListener("click", colorSquareRed);
