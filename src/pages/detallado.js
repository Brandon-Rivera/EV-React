import React, { useState } from 'react'
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import { UserData } from '../components/Data'

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
        <div style={{width: "700px"}}>
          <LineChart chartData={userData}/>
        </div>
        <div style={{width: "700px"}}>
          <PieChart chartData={userData}/>
        </div>
    </div>
  )
}

export default Detallado