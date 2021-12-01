// Funçoẽs de primeira ordem trabalham com parametros diferentes de função,
//por exemplo parâmetros do tipo, string, number, object ou array.

function mostraVeiculoMarca(veiculo, marca) {
  console.log(`O veiculo ${veiculo} é da marca ${marca}`);
}

mostraVeiculoMarca('Fusca', 'Volks');
mostraVeiculoMarca('Corsa', 'GM');

const mostraVeiculo = mostraVeiculoMarca;

mostraVeiculo('Chevette', 'GM');
mostraVeiculo('Corolla', 'Toyota');
