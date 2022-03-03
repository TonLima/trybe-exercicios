import React, { Component } from "react";
import Album from "./componentes/Album";
import './App.css';

class App extends Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/77/Myloxyloto.jpg/220px-Myloxyloto.jpg',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };
    return(
      <div>
      <Album album={ album01 } />
      <Album album={ album02 } />
    </div>
    );
  }
}

export default App;
