import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import jwt from "jwt-decode";
import { useToken } from "../TokenContext";

const Respuestas = () => {
  const location = useLocation();
  const miembroId = location.state;
  const api = "https://osdup4mgd8.execute-api.us-east-1.amazonaws.com/proxy1/api"

  const [preguntas, setPreguntas] = useState(null);
  const [respuestas, setRespuestas] = useState(null);
  const { token } = useToken();

  useEffect(() => {
    getPreguntas();
  }, []);

  useEffect(() => {
    getRespuestas();
  }, []);

  const getPreguntas = async () => {
    const id = jwt(token).id;
    const response = await fetch(`${api}/questions`, {
      headers: {
        "x-access-token": token,
      },
    });
    const data = await response.json();
    setPreguntas(data);
  };

  const getRespuestas = async () => {
    const response = await fetch(
      `${api}/questionanswerByTime/${miembroId[0]}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    const data = await response.json();
    setRespuestas(data);
  };

  var pregResArray = useMemo(() => {
    if (!respuestas || !preguntas) {
        return [];
    }

    const arr = [];
    for (var i = 0; i < respuestas.length; i++) {
      const pregResObject = {
        question: preguntas[i].question,
        answer: respuestas[i].answer,
      };
      arr.push(pregResObject);
    }
    return arr;
  }, [respuestas, preguntas]);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "150vh",
      }}
    >
      <h1 className="title">Respuestas de {miembroId[1]}</h1>
      <br></br>
      <table
        style={{
          border: "solid 1px black",
          display: "block",
          height: "350px",
          overflow: "auto",
          width: "40%",
        }}
      >
        <thead>
          <tr>
            <th style={{ position: "sticky", top: 0, textAlign: "center" }}>
              Pregunta
            </th>
            <th style={{ position: "sticky", top: 0, textAlign: "center" }}>
              Respuesta
            </th>
          </tr>
        </thead>
        <tbody>
          {pregResArray.map((pregRes) => (
            <tr key={pregRes.question}>
              <td style={{ top: 0, textAlign: "center" }}>
                {pregRes.question}
              </td>
              <td style={{ top: 0, textAlign: "center" }}>{pregRes.answer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Respuestas;
