import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode'
import './insumos.css';

const Insumos = () => {
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [users, setUsers] = useState({ adminName: "" });
  // vacío, se ejecuta cada vez que renderiza el componente
  // [], se ejecuta la primera vez que renderiza el componente
  // [estado], se ejecuta solo cuando se actualice el estado, sin bucle
  useEffect(() => {
      getUsers()
  }, [users])

  /* Todas las funciones */
  const getUsers = async () => {
      const token = localStorage.getItem('token')
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
            {
              userss.map(user => (
                <tr key= {user.id}>
                  <td>{user.userName}</td>
                  <td>1 kg de arroz</td>
                  <td>1 kg de frijol</td>
                  <td>1 kg de lenteja</td>
                  <td>1 kg de pollo</td>
                  <td><Link to="/paquete"><button><img src="assets/Plato.png" alt="" width="60px" height="60px"/></button></Link></td>
                  <td><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </div>
    
  )
}

export default Insumos