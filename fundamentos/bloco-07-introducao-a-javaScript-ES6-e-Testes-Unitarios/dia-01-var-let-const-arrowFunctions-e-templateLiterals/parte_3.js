// arrow functions

const printName = function () {
  const myName = "Washington";
  return myName;
};
console.log(printName());

const printName = () => {
  const myName = "Washington";
  return myName;
};
console.log(printName());

const printName = () => "Washington";
console.log(printName());

const multiplyByTwo = (number) => number * 2; //Mas lembre-se que podemos omitir os parênteses apenas em um cenário.Quando a função recebe apenas um argumento, como podemos ver no exemplo.
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(5, 5));
