import React from 'react';
import Photo from './../../images/makeup.jpg'

const Home = () => {
    return (
        <div className=' bg-slate-100 '>
            <div className='h-[95vh] flex justify-center items-center gap-8 max-w-5xl mx-auto'>
                <div>
                    <h1 className='text-orange-500 mb-5 text-3xl'>MakeUp Review</h1>
                    <p className='mb-4 text-xl'>Welcome to MakeUp Review Zone</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, error suscipit doloribus molestiae iure eius amet architecto. Vel ex eius aspernatur commodi a voluptates molestiae </p>
                    <button className='bg-cyan-600 px-3 py-1 rounded mt-6 w-[400px]'>Live Demo</button>
                </div>
                <div>
                    <img className='' src={Photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;