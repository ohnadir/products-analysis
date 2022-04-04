import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = (props) => {
    const { name, img, rating, review } = props.reviews;
    return (
        <div className=' shadow-xl border mb-5 p-3 max-w-5xl mx-auto mt-16'>
            <div className='flex gap-3 mb-3'>
                <img className='w-[50px] h-[50px] rounded-xl' src={img} alt="" />
                <div>
                    <p>Name:- {name}</p>
                    <p className='flex items-center gap-1'>Ratings:- {rating}
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
    );
};

export default Reviews;