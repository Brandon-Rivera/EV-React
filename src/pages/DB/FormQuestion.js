import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormDB.css';
import jwt from 'jwt-decode'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-dropdown';

const FormQuestion = () => {

  const navigate = useNavigate();
  const form = useRef();

  const [section, setSection] = useState("Tipo de pregunta");

  const options = [
    'Respuesta corta', 'Respuesta larga', 'Opción múltiple (4 opciones)', 'Opción múltiple (5 opciones)',
    'Opción múltiple (6 opciones)', 'Opción múltiple (8 opciones)'
  ];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div class="form-div">
          <form class="register-form" ref={form}>
            <h1>Question</h1>
            <Dropdown options={options} value={section} name="questionType" placeholder="Select an option" onChange={({ value }) => {
              setSection(value);
              console.log(value);
              switch (value) {
                case 'Respuesta corta':
                  navigate("/food"); break;
                case 'Respuesta larga':
                  navigate("/question"); break;
                case 'Opción múltiple (4 opciones)':
                  document.getElementById("options").innerHTML = `
                  <h6>Opción 1</h6>
                  <input
                  id="optionName"
                  class="form-field"
                  type="text"
                  placeholder="Nombre de opción"
                  name="optionName"
                  />
                  <input
                  id="optionValue"
                  class="form-field"
                  type="text"
                  placeholder="Valor de opción"
                  name="optionValue"
                  />
                  `;
                  break;
                case 'Opción múltiple (5 opciones)':
                  navigate("/whitelist"); break;
                case 'Opción múltiple (6 opciones)':
                  navigate("/whitelist"); break;
                case 'Opción múltiple (8 opciones)':
                  navigate("/whitelist"); break;
                default:
                  break;
              }
            }} />
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
            <label for="isActive">Activo:</label>
            <input
              id="isActive"
              class="form-field"
              type="checkbox"
              placeholder="isActive"
              name="isActive"
            />
            <input
              id="qOptions"
              class="form-field"
              type="number"
              placeholder="Número de opciones"
              name="qOptions"
            />
            <div id="options"></div>
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

export default FormQuestion