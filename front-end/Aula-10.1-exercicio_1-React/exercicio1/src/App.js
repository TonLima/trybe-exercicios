import React from 'react';
import './App.css';


const Task = (tarefa) => {
  return(
    <li key={tarefa}>{tarefa}</li>
  );
}

const tarefas = ['Levantar', 'Tomar banho', 'Tomar café', 'Escovar os dentes', 'Ir para a escola'];

class App extends React.Component {
  render() {
    return(
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;
