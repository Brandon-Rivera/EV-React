import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './general.css';
import { useToken } from '../TokenContext';
import { ListGroup, Table } from 'react-bootstrap';

const General = () => {
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"
  const { token } = useToken();

  const [users, setUsers] = useState({ adminName: "" });
  const [famMembers, setFamMembers] = useState({ adminName: "" });
  // vacío, se ejecuta cada vez que renderiza el componente
  // [], se ejecuta la primera vez que renderiza el componente
  // [estado], se ejecuta solo cuando se actualice el estado, sin bucle

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    getFamMembers()
  }, [])

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
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '640px', alignItems: 'center', margin: 'auto' }}>
      {/* <h1 className='title'>Informe general</h1> */}
      <br></br>
      <ListGroup>
        <ListGroup.Item variant="dark" style={{fontSize: "30px"}}>Informe general</ListGroup.Item>
      </ListGroup><br></br>
      <Table striped bordered hover variant="dark">
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
                <td style={{ top: 0, textAlign: 'center' }}>{user.userName}</td>
                <td style={{ top: 0, textAlign: 'center' }}>{user.eMail}</td>
                <td style={{ top: 0, textAlign: 'center' }}>{user.phoneNumber}</td>
                <td style={{ top: 0, textAlign: 'center' }}>4</td>
                <td style={{ top: 0, textAlign: 'center' }}>{user.folio}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default General