import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages';
import General from './pages/general';
import Insumos from './pages/insumos';
import Detallado from './pages/detallado';
import Paquetes from './pages/paquetes';
import Form from './pages/Form';
import Form2 from './pages/FormInicio';
import Whitelist from './pages/DB/FormWhite';
import Food from './pages/DB/FormFood';
import Question from './pages/DB/FormQuestion';
import QuestionF from './pages/DB/FormQuestionF';
import QuestionT from './pages/DB/FormQuestionT'
import Ubicacion from './pages/ubicacion';
import Miembros from './pages/miembros';
import Respuestas from './pages/respuestas';
import Folio from './pages/DB/FormFolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { TokenContext } from './TokenContext';


function App() {
  const [token, setToken_] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setToken_(token);
  }, []);
  const setToken = (token) => {
    setToken_(token);
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  };

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <LoadScript googleMapsApiKey="AIzaSyCaZDxJzyD24sCyioMbzBc0vZ66dtjsX_k">
        <Router>
          <Navbar />
          <Routes>
            {token && <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/informe-general" element={<General />}></Route>
              <Route path="/insumos" element={<Insumos />}></Route>
              <Route path="/reporte-detallado" element={<Detallado />}></Route>
              <Route path="/paquete" element={<Paquetes />}></Route>
              <Route path="/whitelist" element={<Whitelist />}></Route>
              <Route path="/food" element={<Food />}></Route>
              <Route path="/question" element={<Question />}></Route>
              <Route path="/ubicacion" element={<Ubicacion />}></Route>
              <Route path="/miembros" element={<Miembros />}></Route>
              <Route path="/respuestas" element={<Respuestas />}></Route>
              <Route path="/questionF" element={<QuestionF />}></Route>
              <Route path="/questionT" element={<QuestionT />}></Route>
              <Route path="/folio" element={<Folio />}></Route>
              <Route path="*" element={<Navigate to="/" />}></Route>
            </>
            }
            {
              !token && <>
                <Route path="/registrar-sesion" element={<Form />}></Route>
                <Route path="/iniciar-sesion" element={<Form2 />}></Route>
                <Route path="*" element={<Navigate to="/iniciar-sesion" />} />
              </>
            }
          </Routes>
        </Router>
      </LoadScript>
    </TokenContext.Provider>
  );
}

export default App;
