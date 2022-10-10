import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as chartjs } from 'chart.js/auto';

const BarChart = ({ chartData }) => {
  return (
    <Pie data={chartData}/>
  )
}

export default BarChart