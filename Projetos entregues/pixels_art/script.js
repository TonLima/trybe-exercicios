const colorPalette = document.querySelector('#color-palette');

const colors = colorPalette.children;

let color;

window.onload = function () {};

function setColor() {
  let buscandoCor = document.querySelectorAll('.color');
  buscandoCor[0].style.backgroundColor = 'black';
  buscandoCor[1].style.backgroundColor = 'red';
  buscandoCor[2].style.backgroundColor = 'blue';
  buscandoCor[3].style.backgroundColor = 'green';
}

setColor();

function clickColor(event) {
  let saveClass = document.querySelector('.selected');

  saveClass.classList.remove('selected');

  let alvo = event.target;

  alvo.classList.add('selected');
}

for (let i = 0; i < colors.length; i += 1) {
  color = colors[i];
  color.addEventListener('click', clickColor);
}

function mudarCorPixel() {
  let quadroPixels = document.querySelectorAll('.pixel');

  let pixel;

  for (let i = 0; i < quadroPixels.length; i += 1) {
    pixel = quadroPixels[i];

    pixel.addEventListener('click', function (event) {
      let selectedColor = document.querySelector('.selected');
      let backgroundColorSelected = selectedColor.style.backgroundColor;

      event.target.style.backgroundColor = backgroundColorSelected;
    });
  }
}

mudarCorPixel();

function whiteClick(event) {
  let pixels = document.querySelectorAll('.pixel');
  let pixel;
  for (let i = 0; i < pixels.length; i += 1) {
    pixel = pixels[i];
    pixel.style.backgroundColor = 'white';
  }
}

const btnWhite = document.querySelector('#clear-board');
btnWhite.addEventListener('click', whiteClick);
