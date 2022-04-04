import React from 'react';
import MyAreaChart from '../ReCharts/MyAreaChart';
import MyBarChart from '../ReCharts/MyBarChart';
import MyLineChart from '../ReCharts/MyLineChart';
import MyPieChart from '../ReCharts/MyPieChart';
const DashBoard = () => {
    return (
        <div className='max-w-5xl mx-auto mt-16 mb-10'>
            <div className='flex flex-col md:flex-row mx-auto justify-center items-center gap-8'>
                <MyLineChart></MyLineChart>
                <MyAreaChart></MyAreaChart>
            </div>
            <div className='flex flex-col md:flex-row mx-auto justify-center items-center gap-8 mt-7'>
                <MyBarChart></MyBarChart>
                <MyPieChart></MyPieChart>
           </div>
        </div>
    );
};

export default DashBoard;