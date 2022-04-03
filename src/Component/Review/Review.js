import React from 'react';
import useReviews from '../Hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const Review = () => {
    const [review] = useReviews();
    return (
        <div>
            <div>
                {
                    review.map(reviews => <Reviews
                        key={reviews.id}
                        reviews={reviews}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default Review;