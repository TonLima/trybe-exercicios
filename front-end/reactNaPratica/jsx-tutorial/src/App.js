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
// class App extends React.Component {
//   render() {
//     return (
//       <>
//     <section className='App'>
//      <h1>Hello, World turma 17!!!!</h1>
//     </section>
//     <section className='App'>
//       <h2>Olá Turma vocês estão bem?</h2>
//     </section>
//     </>
//     )
//   }
// }

// Na linha de baixo estou criando componentes com  classe no React
// class App extends React.Component {
//   render() {
//     const greeting = 'greeting';
//     return(
//       <div className='container'>
//         <h1 id={ greeting }>Hello,World</h1>
//         <p>Eu amo a turma 17 da Trybe!!!</p>
//         <ul>
//           <li >
//             <button>
//               <span role='img' aria-label='grinning face' id='grinning face'>😀</span>
//             </button>
//           </li>
//           <li>
//             <button>
//               <span role='img' aria-label='party popper' id='party popper'>🎉</span>
//             </button>
//             </li>
//             <li>
//               <button>
//               <span role='img' aria-label='woman dancing' id='woman dancing'>💃</span>
//               </button>
//             </li>
//         </ul>

//       </div>
//     )
//   }
// }

// Na linha de baixo estou criando componentes usando uma função
// const displayEmojiName = event => alert(event.target.id); // Aqui estou guardando esse evento dentro de ma váriavel para ser usado dentro da minha função , sendo acessada pela tag 'button' onClick
// function App() {
//   const greeting = 'greeting';
//   return(
//     <>
//     <div className='App'>
//     <h1 id={ greeting }>Hello,World</h1>
//     <p>Eu amo a Turma 17 da Trybe!!!</p>
//     </div>
//       <div className='container'>
//     <ul>
//       <li >
//         <button onClick={displayEmojiName} ><span role='img' aria-label='Feliz' id='Feliz'>😀</span>
//         </button>
//       </li>
//       <li>
//         <button onClick={displayEmojiName} >
//           <span role='img' aria-label='Festa' id='Festa'>🎉</span>
//         </button>
//         </li>
//         <li>
//           <button onClick={displayEmojiName} >
//           <span role='img' aria-label='Dançar' id='Dançar'>💃</span>
//           </button>
//         </li>
//     </ul>

//   </div>
//   </>
//   )
// }


//----------------------------------------------------------------------------------------------------------------------//
const displayEmojiName = event => alert(event.target.id);

//Aqui estou mapeando os dados e vou retornar uma <li> com uma chave de nome curto do emoji. Vou estar substituindo os dados que estão na tags <button> e <span> por informações do lopp
const emojis = [
  {
    emoji: '😀',
    name: 'feliz'
  },
  {
    emoji: '🎉',
    name: 'festa'
  },
  {
    emoji: '💃',
    name: 'mulher dançando'
  }
];
// Nesse código foi feito o mapeamento da matriz de emojis no tag <ul> e retornou um <li>. Em cada <li> foi usado o nome do emoji como objeto 'key'. O botão terá a mesma função que o normal, na tag <span> substitui 'aria-label' e 'id' pelo 'name'. O conteúdo sinalizador <span> deve ser o emoji
function App() {
  const greeting = 'greeting';
  return(
    <>
    <div className='App'>
    <h1 id={ greeting }>Hello,World</h1>
    <p>Eu amo a Turma 17 da Trybe!!!</p>
    </div>
      <div className='container'>
    <ul>
      {
        emojis.map(emoji => (
         <li key={emoji.name}>
           <button onClick={displayEmojiName}>
             <span role='img' aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
           </button>
         </li>
        ))
      }

    </ul>

  </div>
  </>
  )
}

export default App;
