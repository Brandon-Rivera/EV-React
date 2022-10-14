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
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Beneficiario</th>
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Alimento 1</th>
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Alimento 2</th>
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Alimento 3</th>
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Alimento 4</th>
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Paquete</th>
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Ubicación</th>
            <th style={{ position: "sticky", top: 0, textAlign:'center'}}>Miembros</th>
          </tr>
        </thead>
          <tbody>
            {
              userss.map(user => (
                <tr key= {user.id}>
                  <td style={{top: 0, textAlign:'center'}}>{user.userName}</td>
                  <td style={{top: 0, textAlign:'center'}}>1 kg de arroz</td>
                  <td style={{top: 0, textAlign:'center'}}>1 kg de frijol</td>
                  <td style={{top: 0, textAlign:'center'}}>1 kg de lenteja</td>
                  <td style={{top: 0, textAlign:'center'}}>1 kg de pollo</td>
                  <td style={{top: 0, textAlign:'center'}}><Link to="/paquete"><button><img src="assets/Plato.png" alt="" width="60px" height="60px"/></button></Link></td>
                  <td style={{top: 0, textAlign:'center'}}><Link to="/ubicacion" state={[user.id, user.userName]}><button><img src="assets/Mundo.png" alt="" width="60px" height="60px"/></button></Link></td>
                  <td style={{top: 0, textAlign:'center'}}><Link to="/miembros" state={[user.id, user.userName]}><button><img src="assets/family.png" alt="" width="60px" height="60px"/></button></Link></td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </div>
    
  )
}

export default Insumos