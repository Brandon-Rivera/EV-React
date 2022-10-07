import React, { useEffect, useState, useRef } from 'react'
import jwt from 'jwt-decode'
import './general.css';

const General = () => {
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [user, setUser] = useState({ adminName: "" });
  // vacío, se ejecuta cada vez que renderiza el componente
  // [], se ejecuta la primera vez que renderiza el componente
  // [estado], se ejecuta solo cuando se actualice el estado, sin bucle
  useEffect(() => {
      getUser()
  }, [user])

  /* Todas las funciones */
  const getUser = async () => {
      // const token = localStorage.getItem('token')
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXN1YXJpbyI6InJveTMiLCJpYXQiOjE2NjUxNTQwNjEsImV4cCI6MTY2NTE1NDU2MX0.Z0L9h0pKMuc5uawpgfxW6czgTylwGgdi7HZjWwKqEb4"
      // const id = jwt(token).id
      // `${api}/administrador/${id}`
      const response = await fetch(`${api}/administrador/1`, {
          headers: {
              'x-access-token': token
          }
      })
      const data = await response.json()
      setUser(data[0])
  }

  return (
    <div style={{justifyContent: 'center', alignItems: 'center', height:'150vh'}}>
    <h1 className='title'>Informe general</h1>
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
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Número de integrantes</th>
          <th>Folio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.adminName}</td>
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
      </tbody>
    </table>
    
    </div>
  )
}

export default General