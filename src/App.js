
import QuoteBox from './Components/QuoteBox';
import React, { useState } from "react";
import './App.css';
import { getByTitle } from '@testing-library/react';



function App() {

  return (

    <>
    
    <div className='App'>
    
    <QuoteBox />
    

    </div>
    </>
    
  );

}

export default App;


//Hacer lo mismo con UN solo Componente que se llame CARDS, que recibira las props de Title Item 1 Ite2 Item 3
//y Background