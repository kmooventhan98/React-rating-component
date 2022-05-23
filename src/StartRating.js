import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
const StarRating = () => {
  const [rating, setRating] = useState(null);
  console.log(rating);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
              }}
            />
            <FaStar
              size={100}
              className={"star"}
              key={star}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
