import React, { useState } from 'react';
import {StarFill} from 'react-bootstrap-icons';
import '.././scss/rateNreviewModal.scss';

const StarRating = (props) => {

    const {handleRating} = props;
    const [rating,setRating] = useState(null);
    const [hover,setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star,idx) => {
                let ratingVal = idx + 1;
                return (
                    <label>
                        <input type="radio" name="rating" value={ratingVal} onClick={() => {setRating(ratingVal);handleRating(ratingVal)}} onMouseEnter={() => setHover(ratingVal)} onMouseLeave={() => setHover(null)}/>
                        <StarFill className='stars'onMouseEnter={() => setHover(ratingVal)} onMouseLeave={() => setHover(null)} color={ratingVal <= (hover || rating) ? "#fed288" : "#e4e5e9"} size='40px'/>
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating
