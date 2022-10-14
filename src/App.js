import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Home from './pages';
import General from './pages/general';
import Insumos from './pages/insumos';
import Detallado from './pages/detallado';
import Paquetes from './pages/paquetes';
import Form from './pages/Form';
import Form2 from './pages/FormInicio';
import Whitelist from './pages/DB/FormWhite';
import Food from './pages/DB/FormFood';
import Question from './pages/DB/question';
import Ubicacion from './pages/ubicacion';
import Miembros from './pages/miembros';
import Respuestas from './pages/respuestas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';



function App() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCaZDxJzyD24sCyioMbzBc0vZ66dtjsX_k">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/informe-general" element={<General/>}></Route>
        <Route path="/insumos" element={<Insumos/>}></Route>
        <Route path="/reporte-detallado" element={<Paquetes/>}></Route>
        <Route path="/paquete" element={<Paquetes/>}></Route>
        <Route path="/registrar-sesion" element={<Form/>}></Route>
        <Route path="/iniciar-sesion" element={<Form2/>}></Route>
        <Route path="/whitelist" element={<Whitelist/>}></Route>
        <Route path="/food" element={<Food/>}></Route>
        <Route path="/question" element={<Question/>}></Route>
        <Route path="/ubicacion" element={<Ubicacion/>}></Route>
        <Route path="/miembros" element={<Miembros/>}></Route>
        <Route path="/respuestas" element={<Respuestas/>}></Route>
      </Routes>
    </Router>
    </LoadScript>
  );
}

export default App;
