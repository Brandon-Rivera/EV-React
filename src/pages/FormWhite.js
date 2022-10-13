import React, {useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const FormWhite = () => {
  const form = useRef();
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current)

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const response = await fetch(`${api}api/login`,
                                    { method: 'POST', body:formData}
                                );
    //Recuperar información del form
  }

  return (
    <Container className="body">
        <Row id="main-container" className="d-grid h-100">
        <Form ref={form} onSubmit={handleSubmit}
              id="sign-in-form" className="w-100 text-center">
          <h3 className="mbr-fonts-style mb-4 display-2"><strong>Whitelist</strong></h3>
          <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Nombre de usuario"
                          name="user" required />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Control type="password" placeholder="Contraseña"
                          name="password" required />
          </Form.Group>
          <Button className="w-100" 
                  type="submit" variant="primary">Iniciar sesion</Button>
        </Form>
        </Row>
    </Container>
  );
};

export default FormWhite;