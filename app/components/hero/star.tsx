import React from 'react';
import styles from '../hero/projectSection.module.css';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);

  return (
    <div className={styles.starRating} >
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          width="27"
          height="28"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: index < filledStars ? '#F59914' : 'none' }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.71039 14.0412L4.4871 16.3441C4.12138 16.5435 3.68647 16.2345 3.75443 15.8235L4.56565 10.9179L1.11271 7.42699C0.82509 7.13621 0.989245 6.64191 1.39368 6.58096L6.1488 5.86431L8.2589 1.4298C8.43982 1.04958 8.98096 1.04958 9.16188 1.4298L11.272 5.86431L16.0271 6.58096C16.4315 6.64191 16.5957 7.13621 16.3081 7.42699L12.8551 10.9179L13.6664 15.8235C13.7343 16.2345 13.2994 16.5435 12.9337 16.3441L8.71039 14.0412Z"
            stroke="#9B9B9B"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
