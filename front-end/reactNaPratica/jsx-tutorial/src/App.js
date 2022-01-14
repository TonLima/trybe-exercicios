import React from 'react';
import './App.css';

// Na linha de baixo estou criando componentes usando uma função
/*function App() {
  return (
    <>
    <section className="App">
     <h1>Hello, World turma 17!</h1>
    </section>
    <section>
      <h2>Olá Turma vocês estão bem?</h2>
    </section>
    </>
  );
} */

// Na linha de baixo estou criando componentes com  classe no React
class App extends React.Component {
  render() {
    return (
      <>
    <section className="App">
     <h1>Hello, World turma 17!!!!</h1>
    </section>
    <section>
      <h2>Olá Turma vocês estão bem?</h2>
    </section>
    </>
    )
  }
}

export default App;
