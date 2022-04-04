import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';



const HomeReviews = ({items}) => {
    const { img, name, rating, review } = items;
    
    return (
        <div>
            <div className='border max-w-[260px] shadow-lg h-[300px] mx-auto p-3 mb-3'>
                <div className='flex gap-4 mb-3'>
                    <img className='w-[50px] h-[50px] rounded-xl ' src={img} alt="" />
                    <div>
                        <p className='(name.length)'>{name}</p>
                        <p className='flex items-center gap-1'>
                            Ratings : {rating}
                            <Rating
                                className='text-sm'
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
        </div>
    );
};

export default HomeReviews;