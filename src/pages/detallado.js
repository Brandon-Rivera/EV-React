import React, { useState } from 'react'
import BarChart from '../components/BarChart';
import { UserData } from '../components/Data'
import './detallado.css';

const Detallado = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: "red",
    }]
  });

  return (
    <div>
        <h1 className='title'>Reporte Detallado</h1>
        <div style={{width: "700px"}}>
          <BarChart chartData={userData}/>
        </div>
    </div>
  )
}

export default Detallado