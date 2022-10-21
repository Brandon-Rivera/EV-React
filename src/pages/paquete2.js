import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useToken } from "../TokenContext";
import { useNavigate } from 'react-router-dom'
import jwt from "jwt-decode";
import "./paquetes.css";
import Dropdown from 'react-dropdown';
import PieChart from "../components/PieChart";
import { ListGroup } from 'react-bootstrap';
import { Doughnut } from "react-chartjs-2";
import { UserData } from "../components/Data";
const StatChart = ({ dataA, dataB, title }) => (
    <div style={{ width: "100px", height: "100px" }}>
        <Doughnut
            style={{ display: "inline" }}
            data={{
                datasets: [
                    {
                        data: [dataA, dataB],
                        backgroundColor: ["#29BB2E", "#f54242"],
                    },
                ],
            }}
            options={{
                responsive: true,
                circumference: 180,
                rotation: -90,
                plugins: {
                    legend: {
                        position: "top",
                    },
                },
            }}
        />
    </div>
);
const Paquete2 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state;
    const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api";
    const { token } = useToken();
    const [paquetes, setPaquetes] = useState({ idFood: 0 });
    const [food, setFood] = useState({ foodName: "" });
    const [section, setSection] = React.useState("Comida");
    const [section2, setSection2] = React.useState("Comida");

    const options = [
        'Arroz', 'Frijol', 'Lentejas'
    ];


    useEffect(() => {
        getPaquetesById();
    }, []);
    useEffect(() => {
        getFood();
    }, []);
    const getPaquetesById = async () => {
        const id = jwt(token).id;
        const response = await fetch(`${api}/package/${userId[0]}`, {
            headers: {
                "x-access-token": token,
            },
        });
        const data = await response.json();
        setPaquetes(data);
    };
    const getFood = async () => {
        const id = jwt(token).id;
        const response = await fetch(`${api}/food`, {
            headers: {
                "x-access-token": token,
            },
        });
        const data = await response.json();
        setFood(data);
    };
    var pacFood = useMemo(() => {
        if (!paquetes || !food) {
            return {
                arr: [],
                lipidos: 0,
                carbs: 0,
                prots: 0,
            };
        }
        const arr = [];
        let lipidos = 0;
        let carbs = 0;
        let prots = 0;
        for (var i = 0; i < paquetes.length; i++) {
            for (var j = 0; j < food.length; j++) {
                if (food[j].id === paquetes[i].idFood) {
                    food[j].quantity = paquetes[i].quantity;
                    arr.push(food[j]);
                    lipidos += food[j].lipidos * paquetes[i].quantity;
                    carbs += food[j].carbohidratos * paquetes[i].quantity;
                    prots += food[j].proteinas * paquetes[i].quantity;
                }
            }
        }
        return {
            arr,
            lipidos,
            carbs,
            prots,
        };
    }, [paquetes, food]);

    const deleteAloz = () => {
        document.getElementById("agregar").innerHTML = ``;
    }

    return (
        <>
            <div>
                <h1 className="title">Paquete de xd</h1>
                <br />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <div style={{ marginRight: "20px" }}>
                    <ListGroup>
                        <ListGroup.Item variant="dark" style={{ fontSize: "16px" }}>Añadir</ListGroup.Item>
                    </ListGroup>
                    <Dropdown options={options} value={section} placeholder="Select an option" onChange={({ value }) => {
                        setSection(value);
                        console.log(value);
                        switch (value) {
                            case 'Arroz':
                                document.getElementById("agregar").innerHTML = `
                                    <td>Arroz</td>
                                    <td>Kg</td>
                                    <td>1</td> 
                                `;
                                break;
                            case 'Frijol':
                                document.getElementById("agregar").innerHTML = `
                                    <td>Frijol</td>
                                    <td>Kg</td>
                                    <td>1</td> 
                                `; 
                                break;
                            default:
                                break;
                        }
                    }} /><br></br>
                    <ListGroup>
                        <ListGroup.Item variant="dark" style={{ fontSize: "16px" }}>Eliminar</ListGroup.Item>
                    </ListGroup>
                    <Dropdown options={options} value={section2} placeholder="Select an option" onChange={({ value }) => {
                        setSection2(value);
                        console.log(value);
                        switch (value) {
                            case 'Arroz':
                                document.getElementById("agregar").innerHTML = ``;
                                break;
                            case 'Frijol':
                                document.getElementById("agregar").innerHTML = ``;
                                break;
                            default:
                                break;
                        }
                    }} />
                </div>
                {/* TABLA DE ALIMENTOS */}
                <div style={{ marginRight: "20px" }}>
                    <table
                        style={{
                            border: "solid 1px black",
                            display: "block",
                            width: "260px",
                            height: "350px",
                            overflow: "auto",
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ position: "sticky", top: 0 }}>Alimento</th>
                                <th style={{ position: "sticky", top: 0 }}>Unidad</th>
                                <th style={{ position: "sticky", top: 0 }}>Cantidad</th>
                                <th style={{ position: "sticky", top: 0 }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Frijol</td>
                                <td>Kg</td>
                                <td>12</td>
                            </tr>
                            <tr id="agregar"></tr>
                        </tbody>
                    </table>
                </div>
                {/* TABLA DE VALOR NUTRICIONAL */}
                <div>
                    <table
                        style={{
                            border: "solid 1px black",
                            display: "block",
                            marginTop: "10px",
                            height: "340px",
                            overflow: "auto",
                        }}
                    >
                        <tbody>
                            <tr>
                                <td className="lateral-header" style={{ top: 0, textAlign: "center" }}>Carbohidratos</td>
                                <td>
                                    <StatChart dataA={pacFood.carbs} dataB={200 - pacFood.carbs} />
                                    <h6 style={{ textAlign: 'center' }}>{pacFood.carbs}/200</h6>
                                </td>
                            </tr>
                            <tr>
                                <td className="lateral-header" style={{ top: 0, textAlign: "center" }}>Lipidos</td>
                                <td>
                                    <StatChart dataA={pacFood.lipidos} dataB={200 - pacFood.lipidos} />
                                    <h6 style={{ textAlign: 'center' }}>{pacFood.lipidos}/200</h6>
                                </td>
                            </tr>
                            <tr>
                                <td className="lateral-header" style={{ top: 0, textAlign: "center" }}>Proteinas</td>
                                <td>
                                    <StatChart dataA={pacFood.prots} dataB={200 - pacFood.prots} />
                                    <h6 style={{ textAlign: 'center' }}>{pacFood.prots}/200</h6>
                                </td>
                            </tr>
                            <tr>
                                <td className="lateral-header">Adultos</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td className="lateral-header">Infantes</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Paquete2;