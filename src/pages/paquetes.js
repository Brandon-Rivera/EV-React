import React, { useState } from 'react'
import './paquetes.css';
import PieChart from '../components/PieChart';
import { Doughnut } from 'react-chartjs-2';
import { UserData } from '../components/Data'

const StatChart = ({ dataA, dataB, title }) => (
  <div style={{ width: "100px", height: "100px" }}>
    <Doughnut
      style={{ display: 'inline' }}
      data={{
        datasets: [
          {
            data: [dataA, dataB],
            backgroundColor: [
              '#29BB2E',
              '#f54242'
            ]
          }
        ]
      }}
      options={{
        responsive: true,
        circumference: 180,
        rotation: -90,
        plugins: {
          legend: {
            position: 'top'
          },
        }
      }}
    />
  </div>
);

const paquetes = () => {

  function openImg() {
    console.log("Funcion de la imagen :D");
  }

  return (
    <>
      <div><h1 className='title'>paquetes</h1><br /></div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {/* TABLA DE ALIMENTOS */}
        <div style={{ marginRight: "20px" }}>
          <table style={{
            border: "solid 1px black",
            display: "block",
            height: "350px",
            overflow: "auto"
          }}>
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
              <tr>
                <td>Frijoles</td>
                <td>KG</td>
                <td>1</td>
                <td><button type='button'><img src="assets/pencil.png" alt="" width="30px" height="30px" /></button></td>
                <td><button type='button'><img src="assets/trash.png" alt="" width="30px" height="30px" /></button></td>
              </tr>
              <tr>
                <td>Arroz</td>
                <td>KG</td>
                <td>2</td>
                <td><button type='button'><img src="assets/pencil.png" onClick={openImg} alt="" width="30px" height="30px" /></button></td>
                <td><button type='button'><img src="assets/trash.png" alt="" width="30px" height="30px" /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* TABLA DE VALOR NUTRICIONAL */}
        <div>
          <table style={{
            border: "solid 1px black",
            display: "block",
            marginTop: "10px",
            height: "350px",
            overflow: "auto"
          }}>
            <tbody>
              <tr>
                <td className='lateral-header'>Carbohidratos</td>
                <td><StatChart dataA={7000} dataB={8000 - 7000} /></td>
              </tr>
              <tr>
                <td className='lateral-header'>Lipidos</td>
                <td><StatChart dataA={200} dataB={700 - 200} /></td>
              </tr>
              <tr>
                <td className='lateral-header'>Proteinas</td>
                <td><StatChart dataA={400} dataB={500 - 400} /></td>
              </tr>
              <tr>
                <td className='lateral-header'>Adultos</td>
                <td>5</td>
              </tr>
              <tr>
                <td className='lateral-header'>Infantes</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </>
  )
}

export default paquetes