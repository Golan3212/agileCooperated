import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


export default function CaloricChart({chartData1}) {

    return (

        <div>
            <Line data={chartData1}/>
        </div>

    );
}




