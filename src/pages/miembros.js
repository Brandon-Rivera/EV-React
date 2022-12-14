import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import jwt from "jwt-decode";
import "./miembros.css";
import { useToken } from "../TokenContext";
import { ListGroup, Table } from 'react-bootstrap';

const Miembros = () => {
    const location = useLocation();
    const userId = location.state;

    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api"

    const [miembros, setMiembros] = useState({ isLeader: "0" });
    const { token } = useToken();

    useEffect(() => {
        getMiembros();
    }, []);

    const getMiembros = async () => {
        const id = jwt(token).id;
        const response = await fetch(`${api}/famMemberByIdUser/${userId[0]}`, {
            headers: {
                "x-access-token": token,
            },
        });
        const data = await response.json();
        setMiembros(data);
    };

    const miembross = Object.values(miembros);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '640px', alignItems: 'center', margin: 'auto' }}>
            <br></br>
            <ListGroup>
                <ListGroup.Item variant="dark" style={{ fontSize: "30px" }}>Miembros de familia de {userId[1]}</ListGroup.Item>
            </ListGroup>
            <br></br>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th style={{ position: "sticky", top: 0, textAlign: 'center' }}>Nombre(s)</th>
                        <th style={{ position: "sticky", top: 0, textAlign: 'center' }}>Apellidos</th>
                        <th style={{ position: "sticky", top: 0, textAlign: 'center' }}>Sexo</th>
                        <th style={{ position: "sticky", top: 0, textAlign: 'center' }}>Edad</th>
                        <th style={{ position: "sticky", top: 0, textAlign: 'center' }}>Peso</th>
                        <th style={{ position: "sticky", top: 0, textAlign: 'center' }}>Altura</th>
                        <th style={{ position: "sticky", top: 0, textAlign: 'center' }}>Respuestas</th>
                    </tr>
                </thead>
                <tbody>
                    {miembross.map((miembro) => (
                        <tr>
                            <td style={{ top: 0, textAlign: 'center' }}>{miembro.names}</td>
                            <td style={{ top: 0, textAlign: 'center' }}>{miembro.lastNameD}{" "}{miembro.lastNameM}</td>
                            <td style={{ top: 0, textAlign: 'center' }}>{miembro.sex}</td>
                            <td style={{ top: 0, textAlign: 'center' }}>20</td>
                            <td style={{ top: 0, textAlign: 'center' }}>{miembro.weightV}{" "}kg</td>
                            <td style={{ top: 0, textAlign: 'center' }}>{miembro.height}{" "}cm</td>
                            <td style={{ top: 0, textAlign: 'center' }}>
                                <Link to="/respuestas" state={[miembro.id, miembro.names]}>
                                    <button className="btn">
                                        <img src="assets/encuesta.png" alt="" width="60px" height="60px" />
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Miembros;
