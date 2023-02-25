import './App.css';
import Phrase from '../src/components/Random/Random';
import data from './assets/pharases.json';
import Button from './components/Button/Button';
import Background from './components/Background/Background';
import React, { useState } from 'react';

function App() {
    const [index, setIndex] = useState(getRandomPhraseIndex());
    const [color, setColor] = useState('#F0F0F0');

    function getRandomPhraseIndex() {
      return Math.floor(Math.random() * data.length);
    }
  
    function handleButtonClick() {
      setIndex(getRandomPhraseIndex());
      setColor(getRandomColor());
    }
  
    function getRandomColor() {
      const letters = '547ABC';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 6)];
      }
      return color;
    }
  
    return (
      <div className='App'>
      <Background color={color}>
        <div className="container">
          <Phrase phrase={data[index].phrase} author={data[index].author} />
          <Button handleClick={handleButtonClick} buttonText="New Phrase" />
        </div>
      </Background>
      </div>
    );
  }
  
  export default App;