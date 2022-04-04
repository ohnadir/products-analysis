import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Reviews = (props) => {
    const { name, img, rating, review } = props.reviews;
    return (
        <div className=' shadow-xl border mb-5 p-3 max-w-5xl mx-auto mt-16 mb-16'>
            <div className='flex gap-3 mb-3'>
                <img className='w-[50px] h-[50px] rounded-xl' src={img} alt="" />
                <div>
                    <p>Name:- {name}</p>
                    <p className='flex items-center gap-1'>Ratings:- {rating}
                    <Rating className='text-sm'
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                        readonly
                    ></Rating>
                    </p>
                </div>
           </div>
            <p>{review}</p>
        </div>
    );
};

export default Reviews;