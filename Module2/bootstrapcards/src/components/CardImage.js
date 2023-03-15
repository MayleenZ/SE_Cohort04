import React from 'react';

const CardImage = ({img}) => {
  return (
    <img src={img} className="card-img-top"  alt=".."/>
  );
};

//* Object destructuring, took away props and adding just img

export default CardImage;