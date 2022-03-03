import React from 'react';
import cat from './cat.jpg';
import Header from './Header';
import Image from './Image';
import './App.css';
import Greeting from './Greeting';


function App() {
  return (
    <main>
    <Greeting name='Washington'  lastName='Lima Ferreira' />
    <Header />
    <Image  source={cat} altenativeText='Cute cat'/>
    </main>
  );
}

export default App;
