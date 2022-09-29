import './App.css';
import React from 'react'

// import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';

// import Layout from './views/Layout';
// import Home from './components/Home';
// import Cursos from './components/Cursos';
// import Biologia from './components/Biologia';
// import BProcesos from './components/BProcesos';
// import Estadisticas from './components/Estadisticas';


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index 
                  element={<Home/>}></Route>
          <Route path='login' element={<LoginForm/>}></Route>
          <Route path='register' element={<RegisterForm/>}></Route>
          {/* <Route path='cursos' element={<Cursos/>}></Route>
          <Route path='descarga' element={<Link to="https://www.google.com"/>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
