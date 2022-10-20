import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormDB.css';
import jwt from 'jwt-decode'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useToken } from '../../TokenContext';


const FormFolio = () => {
  const form = useRef();
  const navigate = useNavigate();
  const { token } = useToken();
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [folio, setFolio] = useState({ adminName: "" });

  useEffect(() => {
    getFolio()
  }, [folio])

  const getFolio = async () => {
    const id = jwt(token).id
    // `${api}/administrador/${id}`
    const response = await fetch(`${api}/validfolio`, {
    })
    const data = await response.json()
    setFolio(data)
  }
  const folios = Object.values(folio)

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => { setShow2(false); setShow1(false); }
  const handleShow2 = () => setShow2(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const response = await fetch(`${api}/validdolio`,
      { method: 'POST', body: formData }
    );
    console.log(formData)
    handleShow();
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const response = await fetch(`${api}/validfolio/${formData.get('folio')}`,
      { method: 'DELETE' }
    );

    handleClose2();
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div class="form-divW">
          <form class="register-form" ref={form}>
            <h1>Folios</h1>
            <input
              id="folio"
              class="form-field"
              type="folio"
              placeholder="Folio"
              name="folio"
            />
            <Button variant="primary" type="button" onClick={handleSubmit}>Agregar</Button><br></br>
            <Button variant="primary" type="button" onClick={handleShow1}>Borrar</Button>
          </form>

          {/* Modal Agregar */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Folio agregado</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, agregaste a un Folio!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal borrar 1 */}
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Eliminar Folio</Modal.Title>
            </Modal.Header>
            <Modal.Body>Estas a punto de eliminar un folio. ¿Estás seguro?</Modal.Body>
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
              <Modal.Title>Eliminar Folio</Modal.Title>
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
        <div style={{ padding: "10px" }}>
          <table style={{
            border: "solid 1px black",
            display: "block",
            height: "600px",
            overflow: "auto"
          }}>
            <thead>
              <tr>
                <th>Folio</th>
              </tr>
            </thead>
            <tbody>
              {
                folios.map(folio => (
                  <tr >
                    <td>{folio.folio}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormFolio;