import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useToken } from "../TokenContext";
import jwt from "jwt-decode";
import "./paquetes.css";
import PieChart from "../components/PieChart";
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

const Paquetes = () => {
  const location = useLocation();
  const userId = location.state;
  const api = "http://api-vacaciones.us-east-1.elasticbeanstalk.com/api";
  const { token } = useToken();

  const [paquetes, setPaquetes] = useState({ idFood: 0 });
  const [food, setFood] = useState({ foodName: "" });

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


  function openImg() {
    console.log("Funcion de la imagen :D");
  }

  return (
    <>
      <div>
        <h1 className="title">Paquete de {userId[1]}</h1>
        <br />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* TABLA DE ALIMENTOS */}
        <div style={{ marginRight: "20px" }}>
          <table
            style={{
              border: "solid 1px black",
              display: "block",
              height: "350px",
              overflow: "auto",
            }}
          >
            <thead>
              <tr>
                <th style={{ position: "sticky", top: 0 }}>Alimento</th>
                <th style={{ position: "sticky", top: 0 }}>Unidad</th>
                <th style={{ position: "sticky", top: 0 }}>Cantidad</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pacFood.arr.map((pac) => (
                  <tr key={pac.id}>
                    <td style = {{ top: 0, textAlign: "center" }}>{pac.foodName}</td>
                    <td style = {{ top: 0, textAlign: "center" }}>{pac.measure}</td>
                    <td style = {{ top: 0, textAlign: "center" }}>{pac.quantity}</td>
                    <td>
                      <button type="button">
                        <img
                          src="assets/pencil.png"
                          alt=""
                          width="30px"
                          height="30px"
                        />
                      </button>
                    </td>
                    <td>
                      <button type="button">
                        <img
                          src="assets/trash.png"
                          alt=""
                          width="30px"
                          height="30px"
                        />
                      </button>
                    </td>
                  </tr>
              ))}
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
              height: "350px",
              overflow: "auto",
            }}
          >
            <tbody>
              <tr>
                <td className="lateral-header" style={{ top: 0, textAlign: "center" }}>Carbohidratos</td>
                <td>
                  <StatChart dataA={pacFood.carbs} dataB={200 - pacFood.carbs} />
                </td>
              </tr>
              <tr>
                <td className="lateral-header" style={{ top: 0, textAlign: "center" }}>Lipidos</td>
                <td>
                  <StatChart dataA={pacFood.lipidos} dataB={200 - pacFood.lipidos} />
                </td>
              </tr>
              <tr>
                <td className="lateral-header" style={{ top: 0, textAlign: "center" }}>Proteinas</td>
                <td>
                  <StatChart dataA={pacFood.prots} dataB={200 - pacFood.prots} />
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

export default Paquetes;
