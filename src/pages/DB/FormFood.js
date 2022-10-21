import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import './FormDB.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useToken } from '../../TokenContext';


const FormFood = () => {
  const form = useRef();
  const { token } = useToken();
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [food, setFood] = useState({ adminName: "" });
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  useEffect(() => {
    getFood()
  }, [food])

  const getFood = async () => {
    // const token = localStorage.getItem('token')
    const id = jwt(token).id
    // `${api}/administrador/${id}`
    const response = await fetch(`${api}/food`, {
      headers: {
        'x-access-token': token
      }
    })
    const data = await response.json()
    setFood(data)
  }
  const foods = Object.values(food)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const api = "https://osdup4mgd8.execute-api.us-east-1.amazonaws.com/proxy1/api"

    const response = await fetch(`${api}/food`,
      {
        method: 'POST',
        headers: {
          'x-access-token': token
        }, body: formData
      }
    );

    console.log(formData)

    handleShow();
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const response = await fetch(`${api}/food`,
      {
        method: 'PUT',
        headers: {
          'x-access-token': token
        }, body: formData
      }
    );

    console.log(formData)

    handleShow1();
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div class="form-div">
          <form class="register-form" ref={form}>
            <h1>Food</h1>
            <input
              id="foodName"
              class="form-field"
              type="text"
              placeholder="Nombre de comida"
              name="foodName"
            />
            <input
              id="foodDesc"
              class="form-field"
              type="text"
              placeholder="Descripción de comida"
              name="foodDesc"
            />
            <input
              id="lipidos"
              class="form-field"
              type="number"
              placeholder="lipidos"
              name="lipidos"
            />
            <input
              id="carbohidratos"
              class="form-field"
              type="number"
              placeholder="carbohidratos"
              name="carbohidratos"
            />
            <input
              id="proteinas"
              class="form-field"
              type="number"
              placeholder="proteinas"
              name="proteinas"
            />
            <input
              id="measure"
              class="form-field"
              type="text"
              placeholder="measure"
              name="measure"
            />
            <input
              id="stock"
              class="form-field"
              type="number"
              placeholder="stock"
              name="stock"
            />
            <input
              id="expiration"
              class="form-field"
              type="number"
              placeholder="expiration"
              name="expiration"
            />
            <Button variant="primary" type="button" onClick={handleSubmit}>Agregar</Button><br></br>
            <Button variant="primary" type="button" onClick={handleSubmit2}>Modificar</Button>
          </form>

          {/* Modal Agregar */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Comida agregada</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, agregaste a un Administrador!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal Modificar */}
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Comida modificada</Modal.Title>
            </Modal.Header>
            <Modal.Body>Estas a punto de eliminar un admin. ¿Estás seguro?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose1}>
                No
              </Button>
              <Button variant="primary" onClick={handleClose1}>
                Sí
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div style={{ padding: "10px" }}>
          <table style={{
            border: "solid 1px black",
            display: "block",
            height: "790px",
            overflow: "auto"
          }}>
            <thead>
              <tr>
                <th>Comida</th>
                <th>Descripcion</th>
                <th>Lipidos</th>
                <th>Carbohidratos</th>
                <th>Proteinas</th>
                <th>Measure</th>
                <th>Stock</th>
                <th>Expiration</th>
              </tr>
            </thead>
            <tbody>
              {
                foods.map(food => (
                  <tr >
                    <td>{food.foodName}</td>
                    <td>{food.foodDesc}</td>
                    <td>{food.lipidos}</td>
                    <td>{food.carbohidratos}</td>
                    <td>{food.proteinas}</td>
                    <td>{food.measure}</td>
                    <td>{food.stock}</td>
                    <td>{food.expiration}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormFood;