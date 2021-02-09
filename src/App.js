import './App.css';
import React from 'react';

import InputMedicine from './components/InputMedicine';
import MedicineList from './components/MedicineList';


function App() {
  return (
		<>
			<div style={{ backgroundColor: '#01223F', height: '50px', color:"white",alignItems:"center", textAlign:"center",padding:"10px",fontSize:"20px"}}>MEDICINE TABLE</div>
			<MedicineList />
			<InputMedicine />
		</>
  );
}

export default App;
