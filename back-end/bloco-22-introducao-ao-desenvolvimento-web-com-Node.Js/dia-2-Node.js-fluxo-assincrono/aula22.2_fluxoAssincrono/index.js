const setTimeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeoutPromise(() => {
      console.log('O tempo passou')
      resolve();
    }, 3000);
  });
}

async function main() {
  console.log('1. Incicio da função main');

  await setTimeoutPromise();

  console.log('Fim da função main');
}

main();

 // Abaixo temos uma função sincrona que segue uma ordem linha por linha, mas o setTimout é assíncrona e por isso que retorna só depois que a função main ler todos os seus valores.
//  function main () {
//   console.log('1 Inicio da func main');

//   setTimeout(() => {
//     console.log('2. o tempo passou...');
//   }, 3000);

//   console.log('2 fim da func main');
//  }

//  main();

