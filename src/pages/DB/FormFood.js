import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormDB.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const FormFood = () => {
  const form = useRef();
  const token = localStorage.getItem('token')

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const response = await fetch(`${api}/food`,
      { method: 'POST', 
        headers: {
        'x-access-token': token
        }, body: formData }
    );

    handleShow();
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const response = await fetch(`${api}/food`,
      { method: 'PUT'}
    );
  }

  return (
    <div>
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
            name="proteinas "
          />
          <input
            id="measure"
            class="form-field"
            type="text"
            placeholder="measure "
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
            id="expiration "
            class="form-field"
            type="number"
            placeholder="expiration "
            name="expiration "
          />
          <Button variant="primary" type="button" onClick={handleSubmit}>Agregar</Button><br></br>
          <Button variant="primary" type="button" onClick={handleSubmit2}>Modificar</Button>
        </form>

        {/* Modal Agregar */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Administrador agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, agregaste a un Administrador!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal borrar 1 */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Administrador</Modal.Title>
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
    </div>
  );
};

export default FormFood;