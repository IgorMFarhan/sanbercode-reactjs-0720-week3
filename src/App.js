import React from 'react';
import './App.css';
import Tugas11 from './tugas11/tugas11.js'
import Timer from './tugas12/timer.js'
import CRUD from './tugas13/crud.js'
import Hooks from './latihan14/hooks.js'
import Lists from './latihan14/Lists';
import HargaBuah from './tugas14/HargaBuah.js'

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

function App() {
  return (
    <div>
      {/* <Tugas11/>
      <Timer countStart={100}/> */}
      {/* <CRUD daftarBuah={dataHargaBuah}/> */}
      <HargaBuah/>
    </div>
  );
}

export default App;
