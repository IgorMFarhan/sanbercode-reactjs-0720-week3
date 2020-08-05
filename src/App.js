import React from 'react';
import './App.css';
import Tugas11 from './tugas11/tugas11.js'
import Timer from './tugas12/timer.js'
import CRUD from './tugas13/crud.js'

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
      <CRUD daftarBuah={dataHargaBuah}/>
    </div>
  );
}

export default App;
