import React from 'react';
import cat from './cat.jpg';
import Image from './Image';


function App() {
  return (
    <div>
    <Image  source={cat} altenativeText='Cute cat'/>
    </div>
  );
}

export default App;
