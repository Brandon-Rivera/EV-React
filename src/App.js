import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Home from './pages';
import General from './pages/general';
import Insumos from './pages/insumos';
import Detallado from './pages/detallado';
import Cerrar from './pages/cierreSesion';
import Inicio from './pages/inicioSesion';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/informe-general" element={<General/>}></Route>
        <Route path="/insumos" element={<Insumos/>}></Route>
        <Route path="/reporte-detallado" element={<Detallado/>}></Route>
        <Route path="/cerrar-sesion" element={<Cerrar/>}></Route>
        <Route path="/iniciar-sesion" element={<Inicio/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
