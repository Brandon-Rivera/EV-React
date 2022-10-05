import React from 'react'
import './general.css';
import Table from 'react-bootstrap/Table';

const General = () => {
  return (
    <div style={{justifyContent: 'center', alignItems: 'center', height:'150vh'}}>
    <h1 className='title'>Informe general</h1>
    <br></br>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Beneficiario</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Integrantes</th>
          <th>Folio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Familia Chavéz</td>
          <td>marymin@gmail.com</td>
          <td>7771247893</td>
          <td>4</td>
          <td>00070531</td>
        </tr>
        <tr>
          <td>Familia Rivera</td>
          <td>volodyapavelev@gmail.com</td>
          <td>7772680483</td>
          <td>5</td>
          <td>00070598</td>
        </tr>
        <tr>
          <td>Familia Sierra</td>
          <td>atbatb1@gmail.com</td>
          <td>7771104762</td>
          <td>4</td>
          <td>00070511</td>
        </tr>
        <tr>
          <td>Familia Jimenéz</td>
          <td>mcal69@gmail.com</td>
          <td>7771036588</td>
          <td>4</td>
          <td>00070512</td>
        </tr>
        <tr>
          <td>Familia González</td>
          <td>junadelvie@gmail.com</td>
          <td>7777192754</td>
          <td>5</td>
          <td>00070514</td>
        </tr>
        <tr>
          <td>Familia Hernández</td>
          <td>bktoshiro@gmail.com</td>
          <td>7771039456</td>
          <td>4</td>
          <td>00070523</td>
        </tr>
      </tbody>
    </Table>
    
    </div>
  )
}

export default General