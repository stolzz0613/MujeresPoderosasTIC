import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';

export default function RadialGraph() {
    ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Cundinamarca', 'Quindio', 'Risaralda', 'Boyaca', 'Bucaramanga', 'Valle'],
        datasets: [
          {
            label: '# de personas por dpto',
            data: [2, 5, 3, 1, 1, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
    };

    return (
        <div style={{ width:'400px'}}>
            <PolarArea data={data} />
        </div>
    )
}
