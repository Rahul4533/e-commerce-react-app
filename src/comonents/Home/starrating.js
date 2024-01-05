// StarRating.js

import React from 'react';

const StarRating = ({ rating, totalStars = 5 }) => {
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
  ));

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
