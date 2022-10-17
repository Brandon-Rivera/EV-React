import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormDB.css';
import jwt from 'jwt-decode'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Question = () => {

  const navigate = useNavigate();

  const [section, setSection] = React.useState("DB");

  const options = [
    'Food', 'Questions', 'Whitelist'
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div class="form-div">
          {/* ref={form} */}
          <form class="register-form">
            <h1>Question</h1>
            <Dropdown options={options} value={section} placeholder="Select an option" onChange={({ value }) => {
              setSection(value);
              console.log(value);
              switch (value) {
                case 'Food':
                  navigate("/food"); break;
                case 'Questions':
                  navigate("/question"); break;
                case 'Whitelist':
                  navigate("/whitelist"); break;
                default:
                  break;
              }
            }} />;
            <input
              id="question"
              class="form-field"
              type="text"
              placeholder="Pregunta"
              name="question"
            />
            <input
              id="questionDescription"
              class="form-field"
              type="text"
              placeholder="Descripción de la pregunta"
              name="questionDescription"
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
            <Button variant="primary" type="button" >Agregar</Button><br></br>
            <Button variant="primary" type="button" >Modificar</Button>
          </form>
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
              {/* {
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
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Question