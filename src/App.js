import Navbar from "./componentes/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Inicio from './pages/Inicio'
import Carrousel from "./componentes/Carrousel";
import Universidad from "./pages/Universidad";

const App = () => {
  return (
    <BrowserRouter>

    <Navbar/>

    <Routes>
       
    <Route path= '/' element= {<Inicio/>}/>
    <Route path= '/universidad' element= {<Universidad/>}/>


    </Routes>


    </BrowserRouter>
    
  
  );
}

export default App;
