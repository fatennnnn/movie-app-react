import React from 'react'
import './Search.css'

export default function Search(props) {
    const searchRating = count => {
        let stars = [];
        for (let i = 1; i < 6; i++) {
          if (i <= count) {
            stars.push(
              <span key={i} onClick={() => props.searchra(i === count ? i - 1 : i)}>
                ★
              </span>
            );
          } else {
            stars.push(
              <span key={i} onClick={() => props.searchra(i)}>
                ☆
              </span>
            );
          }
        }
        return <span className='stars'>{stars}</span>;
      };
    
      return <div>{searchRating(props.rate)}</div>;
}
