import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { useToken } from "../../TokenContext";
import jwt from "jwt-decode";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormPaquetes = ({ userId }) => {
  const { token } = useToken();
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api";

  const [paquete, setPaquete] = useState({ alimento: "", cantidad: 0 });

  const handleChange = e => {
    setPaquete({
      ...paquete,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e) => {
    const alimento = paquete.alimento
    const cantidad = paquete.cantidad
    e.preventDefault();
    const response = await fetch(`${api}/packageNEW`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify({
        "idUser": userId,
        "foodName": alimento,
        "quantity": cantidad,
        "dateCreated": ""
      }),
    })
      .then((response) => console.log(response))
  };

  const handleEdit = async(e) => {
    const alimento = paquete.alimento
    const cantidad = paquete.cantidad
    e.preventDefault();
    const response = await fetch(`${api}/packageName`, { //poner link de edit
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body:JSON.stringify({
        "idUser": userId,
        "foodName": alimento,
        "quantity": cantidad
      })
    })
      .then((response) => console.log(response)) 
  };

  return (
    <div className="form-div">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Agregar paquete</h1>
        <label htmlFor="foodName" className="form-label">
          Alimento
        </label>
        <input
          name="alimento"
          placeholder="Nombre de alimento"
          type="text"
          id="foodName"
          className="form-control"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          name="cantidad"
          placeholder="Cantidad"
          type="number"
          id="foodName"
          className="form-control"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="primary" type="submit">
          Agregar
        </Button>
        <br></br>
        <br></br>
        <Button variant="primary" type="button" onClick={handleEdit}>
          Editar
        </Button>
      </form>
    </div>
  );
};

export default FormPaquetes;
