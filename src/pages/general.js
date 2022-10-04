import React from 'react'
import './general.css';
import Table from 'react-bootstrap/Table';

const General = () => {
  return (
    <div style={{justifyContent: 'center', alignItems: 'center', height:'90vh'}}>
    <h1>Informe general</h1>

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
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1234</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>1234</td>
        </tr>
      </tbody>
    </Table>
    
    </div>
  )
}

export default General