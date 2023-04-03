import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import Layout from "@/Layouts/Layout";

export default function LineChart({chartData})   {
    return (
        // <Layout>
            <div>
                < Line data={chartData} />
            </div>
// </Layout>
    );
};
