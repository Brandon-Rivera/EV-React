import React from 'react'
import './insumos.css';

const Insumos = () => {
  return (
    <div style={{justifyContent: 'center', alignItems: 'center', height:'150vh'}}>
    <h1 className='title'>Insumos</h1>
    <br></br>
      <table style={{
            border: "solid 1px black",
            display: "block",
            height: "350px",
            overflow: "auto",
            width: "55%"
          }}>
        <thead>
          <tr>
            <th style={{ position: "sticky", top: 0}}>Beneficiario</th>
            <th style={{ position: "sticky", top: 0}}>Alimento 1</th>
            <th style={{ position: "sticky", top: 0}}>Alimento 2</th>
            <th style={{ position: "sticky", top: 0}}>Alimento 3</th>
            <th style={{ position: "sticky", top: 0}}>Alimento 4</th>
            <th style={{ position: "sticky", top: 0}}>Paquete</th>
            <th style={{ position: "sticky", top: 0}}>Ubicación</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>Familia Chavéz</td>
              <td>1 kg de arroz</td>
              <td>1 kg de frijol</td>
              <td>1 kg de lenteja</td>
              <td>1 kg de pollo</td>
              <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
              <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
            </tr>
            <tr>
              <td>Familia Rivera</td>
              <td>1 kg de arroz</td>
              <td>1 kg de frijol</td>
              <td>1 kg de lenteja</td>
              <td>1 kg de pollo</td>
              <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
              <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
            </tr>
            <tr>
              <td>Familia Sierra</td>
              <td>1 kg de arroz</td>
              <td>1 kg de frijol</td>
              <td>1 kg de lenteja</td>
              <td>1 kg de pollo</td>
              <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
              <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
            </tr>
            <tr>
              <td>Familia Jimenéz</td>
              <td>1 kg de arroz</td>
              <td>1 kg de frijol</td>
              <td>1 kg de lenteja</td>
              <td>1 kg de pollo</td>
              <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
              <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
            </tr>
            <tr>
              <td>Familia González</td>
              <td>1 kg de arroz</td>
              <td>1 kg de frijol</td>
              <td>1 kg de lenteja</td>
              <td>1 kg de pollo</td>
              <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
              <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
            </tr>
            <tr>
              <td>Familia Hernández</td>
              <td>1 kg de arroz</td>
              <td>1 kg de frijol</td>
              <td>1 kg de lenteja</td>
              <td>1 kg de pollo</td>
              <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
              <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
            </tr>
          </tbody>
      </table>
    </div>
    
  )
}

export default Insumos