import React from 'react';
import MyBarChart from '../ReCharts/MyBarChart';
import MyLineChart from '../ReCharts/MyLineChart';
const DashBoard = () => {
    return (
        <div className='mx-auto'>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default DashBoard;