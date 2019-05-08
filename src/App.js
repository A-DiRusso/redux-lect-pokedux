import React from 'react';

import './App.css';
import PokeList from './containers/PokeListContainer';
import ButtonAll from './containers/ButtonAllContainter';
import ButotnCaught from './containers/ButtonCaughtContainer';
import ButtonUncaught from './containers/ButtonUncaughtContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>PokeThings</h1>
       <ButtonAll />
       <ButotnCaught />
       <ButtonUncaught />
       <PokeList />
      </header>
    </div>
  );
}

export default App;
