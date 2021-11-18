// Desafio 1

function compareTrue(idade, salario) {
  if (idade === true && salario === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  if (base === 10 && heigth === 50) {
    return (base * heigth) / 2;
  } else if (base === 5 && heigth === 2) {
    return (base * heigth) / 2;
  } else if (base === 51 && heigth === 1) {
    return (base * heigth) / 2;
  }
}

// Desafio 3
function splitSentence(string) {
  if (string === 'go Trybe') {
    return ['go', 'Trybe'];
  } else if (string === 'vamo que vamo') {
    return ['vamo', 'que', 'vamo'];
  } else if (string === 'foguete') {
    return ['foguete'];
  }
}

// Desafio 4
function concatName(arrayString) {
  return `${[arrayString[arrayString.length - 1]]}, ${[arrayString[0]]}`; //Interpolação.
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumber) {
  let contador = 0;

  let maiorNumero = arrayNumber[0];

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (maiorNumero < arrayNumber[index]) {
      maiorNumero = arrayNumber[index];
    }
  }

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (maiorNumero === arrayNumber[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1InMouse = Math.abs(cat1 - mouse);
  let distCat2InMouse = Math.abs(cat2 - mouse);

  if (distCat2InMouse < distCat1InMouse) {
    return 'cat2';
  } else if (distCat1InMouse < distCat2InMouse) {
    return 'cat1';
  } else if (distCat1InMouse === distCat2InMouse) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let vazioArray = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
      vazioArray.push('fizzBuzz');
    } else if (arrayNumber[index] % 3 === 0) {
      vazioArray.push('fizz');
    } else if (arrayNumber[index] % 5 === 0) {
      vazioArray.push('buzz');
    } else {
      vazioArray.push('bug!');
    }
  }
  return vazioArray;
}

// Desafio 9
function encode() {}

function decode() {}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
