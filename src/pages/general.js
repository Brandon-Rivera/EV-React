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
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
    
    </div>
  )
}

export default General