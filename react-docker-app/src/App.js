import React from 'react';
import './App.css';
import Data from './Data.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <p>
            CSC 462 Distributed Systems
          </p>
          <p>
            Meghan Fair
          </p>

        </div>
      </header>
      <Data />

    </div>
  );
}

export default App;
