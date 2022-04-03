import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const MyPieChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <PieChart width={800} height={400}>
            <Pie
                data={data}
                dataKey="investment"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8" label></Pie>
            <Pie
                data={data}
                dataKey="revenue"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={110}
                fill="#82ca9d" label></Pie>
            
            <Pie
                data={data}
                dataKey="sell"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#00c49f" label></Pie>
            <Tooltip></Tooltip>
        </PieChart>
    )
};

export default MyPieChart;