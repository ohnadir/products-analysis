import React from 'react';
import Photo from './../../images/makeup.jpg'
import useReviews  from "../Hooks/useReviews" 
import HomeReviews from '../HomeReviews/HomeReviews';
import {useNavigate } from 'react-router-dom';

const Home = () => {
    const [review] = useReviews();
    let newReview = review.slice(0,3);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/reviews';
        navigate(path);
    }

    return (
        <div className=' bg-slate-100 h-full'>
            <div className='flex flex-col-reverse md:flex-row gap-8 max-w-6xl mx-auto p-4 items-center py-20'>
                <div>
                    <p className='text-orange-500 mb-4 text-2xl'>Welcome to MakeUp Review Zone</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, error suscipit doloribus molestiae iure eius amet architecto. Vel ex eius aspernatur commodi a voluptates molestiae </p>
                    <button className='text-white bg-cyan-600 px-3 py-1 rounded mt-6 '>Live Demo</button>
                </div>
                <div>
                    <img className='' src={Photo} alt="" />
                </div>
            </div>
            <div className='pb-10'>
                <h1 className='text-center text-4xl text-cyan-600 font-bold my-10'>Customers Reviews </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto'>
                    {
                        newReview.map(items=> <HomeReviews
                            key={items.id}
                            items={items}
                        ></HomeReviews>)    
                    }
                </div>
                <button className=' text-white bg-cyan-600 flex mt-8 mx-auto px-3 py-1 rounded' onClick={routeChange} >See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;