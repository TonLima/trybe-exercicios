import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input de email na tela', () => {
  //acessar os elementos da tela
  render(<App/>);
  const inputEmail = screen.getByLabelText('Email'); // Esse código está procurando uma label que tenha o texto 'Email' e vai me retornar o input que está relacionada a ela.

  // fazer os testes
  expect(inputEmail).toBeInTheDocument(); // essa sintaxe usamos para garantir que está sendo renderizado na tela
  expect(inputEmail.type).toBe('email'); // Fazendo isso podemos garantir que ele está sendo renderizado na tela e ele é do tipo 'email'.

});

test ('Verifica se existe dois botões na tela', () => {
  //Acessar os elementos da tela
  render(<App/>);
  const buttons = screen.getAllByRole('button'); // Aqui ele pega todos os botões da tela e retorna como um array

  // fazer os testes
  expect(buttons).toHaveLength(2); // Aqui é verificado se ele tem o tamanho de 2
});

test ('Verifica se existe o botão de "Enviar"', () => {
  //Acessar os elementos da tela
  render(<App/>);
  const buttonEnviar = screen.getByTestId('id-send'); // aqui ele pega pelo id do botão enviar

  // fazer os testes
  expect(buttonEnviar).toBeInTheDocument(); // aqui é verificado se o botão é renderizado na tela
  expect(buttonEnviar).toHaveValue('Enviar'); // aqui é verica se o botão tem o valor 'Enviar'
});



// acessar os elementos da tela

// interagir com os elemnetos( se for necessário)

// fazer os testes