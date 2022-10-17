import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './general.css';

const General = () => {
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"
  const token = localStorage.getItem('token')

  const [users, setUsers] = useState({ adminName: "" });
  const [famMembers, setFamMembers] = useState({ adminName: "" });
  // vacío, se ejecuta cada vez que renderiza el componente
  // [], se ejecuta la primera vez que renderiza el componente
  // [estado], se ejecuta solo cuando se actualice el estado, sin bucle

  useEffect(() => {
    getUsers()
  }, [users])

  useEffect(() => {
    getFamMembers()
  }, [famMembers])

  /* Todas las funciones */
  const getUsers = async () => {
    // const token = localStorage.getItem('token')
    const id = jwt(token).id
    // `${api}/administrador/${id}`
    const response = await fetch(`${api}/user`, {
      headers: {
        'x-access-token': token
      }
    })
    const data = await response.json()
    setUsers(data)
  }
  const userss = Object.values(users)

  const getFamMembers = async () => {
    const token = localStorage.getItem('token')
    const id = jwt(token).id
    // `${api}/administrador/${id}`

    const response = await fetch(`${api}/famMemberByIdUser/${1}`, {
      headers: {
        'x-access-token': token
      }
    })
    const data = await response.json()
    setFamMembers(data)
  }
  const famMemberss = Object.values(famMembers)

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '150vh' }}>
      <h1 className='title'>Informe general</h1>
      <br></br>
      <table style={{
        border: "solid 1px black",
        display: "block",
        height: "350px",
        overflow: "auto",
        width: "50%"
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
          {
            userss.map(user => (
              <tr >
                <td>{user.userName}</td>
                <td>{user.eMail}</td>
                <td>{user.phoneNumber}</td>
                <td>4</td>
                <td>{user.folio}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default General