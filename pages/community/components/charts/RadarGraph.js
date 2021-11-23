import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

export default function RadarGraph() {
    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

    const data = {
        labels: ['12-18', '19-25', '26-35', '36-45', '46-55', '55+'],
        datasets: [
          {
            label: 'edad',
            data: [10, 20, 20, 15, 6, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
    };

    return (
        <div style={{ width:'400px'}}>
            <Radar data={data} />
        </div>
    )
}
