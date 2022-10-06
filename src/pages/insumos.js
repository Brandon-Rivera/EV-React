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
            width: "60%"
          }}>
        <thead>
          <tr>
            <th>Beneficiario</th>
            <th>Alimento 1</th>
            <th>Alimento 2</th>
            <th>Alimento 3</th>
            <th>Alimento 4</th>
            <th>Paquete</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Familia Chavéz</td>
            <td>marymin@gmail.com</td>
            <td>7771247893</td>
            <td>4</td>
            <td>00070531</td>
            <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
            <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
          </tr>
          <tr>
            <td>Familia Rivera</td>
            <td>volodyapavelev@gmail.com</td>
            <td>7772680483</td>
            <td>5</td>
            <td>00070598</td>
            <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
            <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
          </tr>
          <tr>
            <td>Familia Sierra</td>
            <td>atbatb1@gmail.com</td>
            <td>7771104762</td>
            <td>4</td>
            <td>00070511</td>
            <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
            <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
          </tr>
          <tr>
            <td>Familia Jimenéz</td>
            <td>mcal69@gmail.com</td>
            <td>7771036588</td>
            <td>4</td>
            <td>00070512</td>
            <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
            <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
          </tr>
          <tr>
            <td>Familia González</td>
            <td>junadelvie@gmail.com</td>
            <td>7777192754</td>
            <td>5</td>
            <td>00070514</td>
            <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
            <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
          </tr>
          <tr>
            <td>Familia Hernández</td>
            <td>bktoshiro@gmail.com</td>
            <td>7771039456</td>
            <td>4</td>
            <td>00070523</td>
            <td><img src="assets/Plato.png" alt="" width="60px" height="60px"/></td>
            <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Insumos