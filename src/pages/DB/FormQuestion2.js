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
  const [question, setQuestion] = useState({ adminName: "" });

  useEffect(() => {
    getQuestion()
  }, [question])

  const getQuestion = async () => {
    // `${api}/administrador/${id}`
    const response = await fetch(`${api}/questions`, {
      headers: {
        'x-access-token': token
      }
    })
    const dataq = await response.json()
    setQuestion(dataq)
  }
  const questions = Object.values(question)

  const options = [
    { value: '1', label: 'Respuesta corta' }, { value: '2', label: 'Respuesta larga' },
    { value: '3', label: 'Opción múltiple (4 opciones)' }, { value: '4', label: 'Opción múltiple (5 opciones)' },
    { value: '5', label: 'Opción múltiple (6 opciones)' }, { value: '6', label: 'Opción múltiple (8 opciones)' }
  ];

  const [values, setValues] = useState({
    question: '',
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
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
          //'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOiJlbW1hIiwiaWF0IjoxNjY2MTUwODYxLCJleHAiOjE2NjYxNTgwNjF9.XvDTkNVm-LbFLBMBfo4gVVCgKWJYr26TaOedI8P5gt4'
        },
        body: JSON.stringify(values),
      })
  };

  const goto = () => {
    navigate('/question', { replace: true });
  } 

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div class="form-div">
          <form class="register-form" ref={form1} onSubmit={handleSubmit}>
            <h1>Question</h1>
            <input
              id="question"
              class="form-field"
              type="text"
              placeholder="Pregunta"
              name="question"
              value={values.question}
              onChange={handleChange}
            />
            <Button variant="primary" type='button' onClick={goto}>Agregar</Button><br></br>
            <Button variant="primary" type="submit" >Desactivar</Button>
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
                <th>Activo</th>
                <th>qOptions</th>
              </tr>
            </thead>
            <tbody>
              {
                questions.map((question, index) => {
                  if (question.questionType === 1) {
                    return <tr >
                      <td>Respuesta corta</td>
                      <td>{question.question}</td>
                      <td>{question.isActive}</td>
                      <td>{question.qOptions}</td>
                    </tr>
                  }
                  else if(question.questionType === 2) {
                    return <tr >
                      <td>Respuesta larga</td>
                      <td>{question.question}</td>
                      <td>{question.isActive}</td>
                      <td>{question.qOptions}</td>
                    </tr>
                  }
                  else if(question.questionType === 3) {
                    return <tr >
                      <td>Opción múltiple (4 opciones)</td>
                      <td>{question.question}</td>
                      <td>{question.isActive}</td>
                      <td>{question.qOptions}</td>
                    </tr>
                  }
                  else if(question.questionType === 4) {
                    return <tr >
                      <td>Opción múltiple (5 opciones)</td>
                      <td>{question.question}</td>
                      <td>{question.isActive}</td>
                      <td>{question.qOptions}</td>
                    </tr>
                  }
                  else if(question.questionType === 5) {
                    return <tr >
                      <td>Opción múltiple (6 opciones)</td>
                      <td>{question.question}</td>
                      <td>{question.isActive}</td>
                      <td>{question.qOptions}</td>
                    </tr>
                  }
                  else if(question.questionType === 6) {
                    return <tr >
                      <td>Opción múltiple (8 opciones)</td>
                      <td>{question.question}</td>
                      <td>{question.isActive}</td>
                      <td>{question.qOptions}</td>
                    </tr>
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default FormQuestion