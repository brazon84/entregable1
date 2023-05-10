

import './App.css';
import Phrase from '../src/components/Random/Random';
import data from './assets/pharases.json';
import Button from './components/Button/Button';
import React, { useState } from 'react';
import img1 from './assets/Img/img1.png';
import img2 from './assets/Img/img2.png';
import img3 from './assets/Img/img3.png';
import img4 from './assets/Img/img4.png';
import img5 from './assets/Img/img5.png';
import img6 from './assets/Img/img6.png';
import Footer from './components/Footer/Footer';


function App() {
  const [index, setIndex] = useState(getRandomPhraseIndex());
  const [color, setColor] = useState(getRandomColor());
  const [imagenActualIndex, setImagenActualIndex] = useState(0);
  const listaImagenes = [img1, img2, img3, img4, img5, img6];

  function getRandomPhraseIndex() {
    return Math.floor(Math.random() * data.length);
  }

  function randonImg() {
    return Math.floor(Math.random() * listaImagenes.length)
  }

  function handleButtonClick() {
    setIndex(getRandomPhraseIndex());
    setColor(getRandomColor());
    setImagenActualIndex(randonImg());
  }

  function getRandomColor() {
    const letters = '547890ABCDEFG';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 12)];
    }
    return color;
  }

  return (
    <section style={{
      backgroundImage: `url(${listaImagenes[imagenActualIndex]})`
    }} className='App'>

      <div className="container">
        <div>
          <Phrase color={color} phrase={data[index].phrase} />
        </div>
        <div>
          <Phrase className="autor" color={color} author={data[index].author} />
        </div>
      </div>
      <Button className="button" handleClick={handleButtonClick} buttonText="Siguiente →" />

      <Footer />
    </section>

  );
}

export default App;
