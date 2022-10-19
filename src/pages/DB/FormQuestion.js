import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FormDB.css';
import jwt from 'jwt-decode'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-dropdown';
import { useToken } from '../../TokenContext';
import OptionForm from '../../components/Options';

const FormQuestion = () => {

  const navigate = useNavigate();
  const form1 = useRef(null);
  const { token } = useToken();
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

  const [section, setSection] = useState("Tipo de pregunta");
  const [option, setOption] = useState("")

  const options = [
    {value: '', label: 'Respuesta corta'}, {value: '', label:'Respuesta larga'}, 
    {value: '4', label:'Opción múltiple (4 opciones)'}, {value: '5', label:'Opción múltiple (5 opciones)'},
    {value: '6', label:'Opción múltiple (6 opciones)'}, {value: '8', label:'Opción múltiple (8 opciones)'}
  ];

  const [values, setValues] = useState({
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
    //const response = fetch(`http://localhost:3001/api/questions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
          //'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOiJlbW1hIiwiaWF0IjoxNjY2MTUwODYxLCJleHAiOjE2NjYxNTgwNjF9.XvDTkNVm-LbFLBMBfo4gVVCgKWJYr26TaOedI8P5gt4'
        },
        body: JSON.stringify(values),
      })
      .then((response) => {
        return response.json()
      })
      .then((data_) => {
        console.log('Success:', data_);
        const data = new FormData(form1.current)
        const names = data.getAll('optionName')
        const vals = data.getAll('optionValue')
        console.log(names.length)
        console.log(vals)

        let opcion = { }
        for(let i = 0; i<names.length; i++)
        {
            opcion = { idQuestions: data_.insertId, optionName: names[i], optionValue: vals[i]}
            console.log(opcion)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div class="form-div">
          <form class="register-form" ref={form1} onSubmit={handleSubmit}>
            <h1>Question</h1>
            <Dropdown options={options} value={section} name="questionType" placeholder="Select an option" onChange={({value}) => {
              setValues({
                ...values,
                questionType: Number(value)
              })
              setOption(value)         
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