import React from 'react';  
import './App.css';

import CicilanBank from './Components/CicilanBank';
import HitungBMI from './Components/HitungBMI';
import HitungHargaAkhir from './Components/HitungHargaAkhir';
import KonversiBilangan from './Components/KonversiBilangan';

function App() {
  return (
    <div className="App  container col-sm-6">
      <br></br><hr></hr><hr></hr><br></br>
      <HitungBMI />
      <br></br><hr></hr><hr></hr><br></br>
      <CicilanBank />
      <br></br><hr></hr><hr></hr><br></br>
      <HitungHargaAkhir />
      <br></br><hr></hr><hr></hr><br></br>
      <KonversiBilangan />
      <br></br><hr></hr><hr></hr><br></br>
    </div>
  );
}

export default App;
