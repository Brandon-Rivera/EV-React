import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormDB.css';
import jwt from 'jwt-decode'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-dropdown';
import { useToken } from '../../TokenContext';
import OptionForm from '../../components/options';

const FormQuestion = () => {

  const navigate = useNavigate();
  const form = useRef();
  const { token } = useToken();
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [section, setSection] = useState("Tipo de pregunta");
  const [option, setOpcion] = useState("")

  const options = [
    'Respuesta corta', 'Respuesta larga', 'Opción múltiple (4 opciones)', 'Opción múltiple (5 opciones)',
    'Opción múltiple (6 opciones)', 'Opción múltiple (8 opciones)'
  ];

  const [values, setValues] = useState({
    questionType: 0,
    question: '',
    questionDescription: '',
    qOptions: 0
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('valores:', values);

    const response = fetch(`${api}/questions`,
      {
        method: 'POST',
        headers: {
          'x-access-token': token
        },
        body: values,
      })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log('Success:', data.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div class="form-div">
          <form class="register-form" onSubmit={handleSubmit}>
            <h1>Question</h1>
            <Dropdown options={options} value={section} name="questionType" placeholder="Select an option" onChange={({ value }) => {
              setSection(value);
              switch (value) {
                case 'Respuesta corta':
                  setOpcion("");
                  setValues(previous => ({
                    ...previous,
                    questionType: 1,
                  }));
                  break;
                case 'Respuesta larga':
                  setOpcion(""); break;
                case 'Opción múltiple (4 opciones)':
                  setOpcion("4");
                  break;
                case 'Opción múltiple (5 opciones)':
                  setOpcion("5"); break;
                case 'Opción múltiple (6 opciones)':
                  setOpcion("6"); break;
                case 'Opción múltiple (8 opciones)':
                  setOpcion("8"); break;
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
              value={values.question}
              onChange={handleChange}
            />
            <input
              id="questionDescription"
              class="form-field"
              type="text"
              placeholder="Descripción de la pregunta"
              name="questionDescription"
              value={values.questionDescription}
              onChange={handleChange}
            />
            <input
              id="qOptions"
              class="form-field"
              type="number"
              placeholder="Número de opciones"
              name="qOptions"
              value={values.qOptions}
              onChange={handleChange}
            />
            <div id="options">
              {option === "4" && Array.from(Array(4)).map(i => <OptionForm key={i} />)}
              {option === "5" && Array.from(Array(5)).map(i => <OptionForm key={i} />)}
              {option === "6" && Array.from(Array(6)).map(i => <OptionForm key={i} />)}
              {option === "8" && Array.from(Array(8)).map(i => <OptionForm key={i} />)}
            </div>
            <Button variant="primary" type='submit'>Agregar</Button><br></br>
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
                <th>Tipo</th>
                <th>Pregunta</th>
                <th>Descripción</th>
                <th>Activo</th>
                <th>Opciones</th>
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