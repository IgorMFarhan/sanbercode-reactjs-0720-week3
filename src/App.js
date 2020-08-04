import React from 'react';
import './App.css';
import Tugas11 from './tugas11/tugas11.js'
import Timer from './tugas12/timer.js'

function App() {
  return (
    <div>
      <Tugas11/>
      <Timer countStart={100}/>
    </div>
  );
}

export default App;
