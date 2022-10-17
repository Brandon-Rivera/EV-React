import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormDB.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const FormWhite = () => {
  const form = useRef();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => {setShow2(false); setShow1(false);}
  const handleShow2 = () => setShow2(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const response = await fetch(`${api}/whiteList`,
      { method: 'POST', body: formData }
    );
    console.log(formData)
    handleShow();
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const response = await fetch(`${api}/whiteList/${formData.get('eMail')}`,
      { method: 'DELETE'}
    );

    handleClose2();
  }

  return (
    <div>
      <div class="form-div">
        <form class="register-form" ref={form}>
          <h1>Whitelist</h1>
          <input
            id="email"
            class="form-field"
            type="email"
            placeholder="Email"
            name="eMail"
          />
          <Button variant="primary" type="button" onClick={handleSubmit}>Agregar</Button><br></br>
          <Button variant="primary" type="button" onClick={handleShow1}>Borrar</Button>
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
          <Button variant="primary" onClick={handleShow2}>
            Sí
          </Button> 
        </Modal.Footer>
      </Modal>

      {/* Modal borrar 2 */}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿¿Segurisimo??</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            No
          </Button>
          <Button variant="primary" onClick={handleSubmit2}>
            Segurisimo
          </Button> 
        </Modal.Footer>
      </Modal>

      </div>
    </div>
  );
};

export default FormWhite;