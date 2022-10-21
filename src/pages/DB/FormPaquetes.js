import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { useToken } from '../../TokenContext';
import jwt from "jwt-decode";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormPaquetes = ({ userId, paquete, setPaquete }) => {

  const { token } = useToken();
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [food, setFood] = useState()
  const [paqueteBueno, setPaqueteBueno] = useState({ id: 70, idUser: 0, idFood: 0, quantity: 0, dateCreated: "" })

  useEffect(() => {
    getFood()
  }, [])

  const getFood = async () => {
    const id = jwt(token).id
    const response = await fetch(`${api}/food`, {
      headers: {
        'x-access-token': token
      }
    })
    const data = await response.json()
    setFood(data)
  }

  const handleChange = e => {
    setPaquete({
      ...paquete,
      [e.target.name]: e.target.value
    })
  }

  let { alimento, cantidad } = paquete;

  const handleSubmit = e => {
    let esAlimento = false
    cantidad = parseInt(cantidad, 10)
    //validacion de datos
    for (var i = 0; i < food.length; i++) {
      if (alimento === food[i].foodName) {
        paqueteBueno.idFood = food[i].id
        esAlimento = true
      }
    }
    if (paquete.food === '' || paquete.quantity < 1 || esAlimento != true) {
      alert("Favor de llenar correctamente los campos")
      return
    }




    paqueteBueno.idUser = userId
    paqueteBueno.quantity = cantidad

    const response = fetch(`${api}/package/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token

        },
        body: JSON.stringify(paqueteBueno),
      })
      .then(response => response.json())
      .then(response => console.log(response))

      setPaqueteBueno({
        id: 70, idUser: 0, idFood: 0, quantity: 0, dateCreated: ""
      })

  }

  return (
    <div className="form-div">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Agregar paquete</h1>
        <label htmlFor="foodName" className="form-label">Alimento</label>
        <input
          name="alimento"
          placeholder="Nombre de alimento"
          type="text" id="foodName"
          className="form-control"
          onChange={handleChange}
        />
        <br></br><br></br>
        <input
          name="cantidad"
          placeholder="Cantidad"
          type="number" id="foodName"
          className="form-control"
          onChange={handleChange}
        />
        <br></br><br></br>
        <Button variant="primary" type='submit'>Agregar</Button><br></br>
      </form>
    </div>
  )
}

export default FormPaquetes