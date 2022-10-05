import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Home from './pages';
import General from './pages/general';
import Insumos from './pages/insumos';
import Detallado from './pages/detallado';
import Registro from './pages/registroSesion';
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
        <Route path="/registrar-sesion" element={<Registro/>}></Route>
        <Route path="/iniciar-sesion" element={<Inicio/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
