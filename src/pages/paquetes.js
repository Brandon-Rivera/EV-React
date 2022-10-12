import React from 'react'
import './paquetes.css';

const paquetes = () => {

  function openImg(){
    console.log("Funcion de la imagen :D");
  }

  return (
    <>
    <div><h1 className='title'>paquetes</h1><br/></div>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
        {/* TABLA DE ALIMENTOS */}
        <div style={{marginRight: "20px"}}>
        <table style={{
            border: "solid 1px black",
            display: "block",
            height: "350px",
            overflow: "auto"
          }}> 
        <thead>
          <tr>
            <th style={{ position: "sticky", top: 0}}>Alimento</th>
            <th style={{ position: "sticky", top: 0}}>Unidad</th>
            <th style={{ position: "sticky", top: 0}}>Cantidad</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>Frijoles</td>
              <td>KG</td>
              <td>1</td>
              <td><button type='button'><img src="assets/pencil.png" alt="" width="30px" height="30px"/></button></td>
              <td><button type='button'><img src="assets/trash.png" alt="" width="30px" height="30px"/></button></td>
            </tr>
            <tr>
              <td>Arroz</td>
              <td>KG</td>
              <td>2</td>
              <td><button type='button'><img src="assets/pencil.png" onClick={openImg} alt="" width="30px" height="30px"/></button></td>
              <td><button type='button'><img src="assets/trash.png" alt="" width="30px" height="30px"/></button></td>
            </tr>
          </tbody>
      </table>
      </div>
      {/* TABLA DE VALOR NUTRICIONAL */}
      <div>
      <table style={{
            border: "solid 1px black",
            display: "block",
            height: "350px",
            overflow: "auto"
          }}> 
          <tbody>
            <tr>
              <td className='lateral-header'>Carbohidratos</td>
              <td>7000 / 8000</td>
            </tr>
            <tr>
              <td className='lateral-header'>Lipidos</td>
              <td>200</td>
            </tr>
            <tr>
              <td className='lateral-header'>Proteinas</td>
              <td>400</td>
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