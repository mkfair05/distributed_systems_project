import React from 'react';
import './App.css';
import Data from './components/Data.js'
import Lighthouse from './components/Lighthouse.js'
import { WebMap, WebScene } from '@esri/react-arcgis';

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
      <Lighthouse />
      <div style={{ width: '75vw', height: '75vh' }}>
        <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
        <WebScene id="f8aa0c25485a40a1ada1e4b600522681" />
      </div>
      <Data />
      {/* <Map /> */}

    </div>
  );
}

export default App;
