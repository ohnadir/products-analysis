import React from 'react';
import MyBarChart from '../ReCharts/MyBarChart';
import MyLineChart from '../ReCharts/MyLineChart';
import MyPieChart from '../ReCharts/MyPieChart';
const DashBoard = () => {
    return (
        <div className='mx-auto'>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
            <MyPieChart></MyPieChart>
        </div>
    );
};

export default DashBoard;