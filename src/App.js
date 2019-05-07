import React from 'react';

import './App.css';
import PokeList from './containers/PokeListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>PokeThings</h1>
       <PokeList />
      </header>
    </div>
  );
}

export default App;
