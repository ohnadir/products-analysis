import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const HomeReviews = ({items}) => {
    const { img, name, rating, review } = items;
    
    return (
        <div>
            <div className='border max-w-[250px] shadow-lg h-[340px] mx-auto p-3'>
                <div className='flex gap-4 mb-3'>
                    <img className='w-[50px] h-[50px] rounded-xl ' src={img} alt="" />
                    <div>
                        <p className='(name.length)'>{name}</p>
                        <p className='flex items-center gap-1'>
                            Ratings : {rating}
                            <span className='text-[10px] text-amber-600'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                            <span className='text-[10px] text-amber-600'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                            <span className='text-[10px] text-amber-600'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                            <span className='text-[10px] text-amber-600'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                            <span className='text-[10px]'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        </p>
                    </div>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default HomeReviews;