import React from 'react';
import star from '../../assets/icon/ic-star-white.svg';

const RatingBox = ({bg}) => {
  return (
    <div 
        className='w-8 h-8 rounded-md flex justify-center items-center mr-2'
        style={{ backgroundColor: bg}}
    >
        <img src={star} alt="rating" />
    </div>
  )
}

export default RatingBox;