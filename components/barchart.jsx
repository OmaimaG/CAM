"use client"
import React from 'react'



import { useState, useEffect } from 'react'
import styles from './BarChart.module.css'

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ToolTip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
 

  Legend
);

export default function BarChart() {
  const [chartData, setChartData] = useState({
    datasets: []

  })
  const [chartOptions, setChartOptions] = useState({})
  useEffect(() => {

    setChartData({

      labels: ['Server', 'NoteBook ', 'Other Computer', 'DeskTop', 'Cloud Insatnce', 'Virtual Machine', 'Others'],
      datasets: [{

        label: 'Category BreakDown',
        data: [12, 22, 22, 44, 22, 22, 22],
        borderColor: 'rgb(231, 76, 60 )',
        backgroundColor: 'rgb(173, 172, 180)',
        

      }]

    })
    setChartOptions({
      Plugin: {
        legend: {

          position: 'top'
        },
     
      },
      maintainAspectRatio: false,
      responsive:true
 })



  },[])
return(
<>
<div className='w-full md:col-span-2 relative lg:h-[50vh] h-[30vh] m-auto p-5 border rounded-lg bg-white' >
<Bar data={chartData} options={chartOptions} />
</div>
</>


)


}








