import React from 'react';

const Reviews = (props) => {
    const { name, img, rating, review } = props.reviews;
    return (
        <div className='border mb-3 p-3'>
            <div className='flex gap-3'>
                <img className='w-[50px] h-[50px] rounded-xl' src={img} alt="" />
                <div>
                    <p>Name:- {name}</p>
                    <p>Ratings:- {rating}</p>
                </div>
           </div>
            <p>{review}</p>
        </div>
    );
};

export default Reviews;