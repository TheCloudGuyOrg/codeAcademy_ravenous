import React from 'react';

const fakeBusiness = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}


const Business = () => {
  return (
    <div>
      <img 
        src={fakeBusiness.imageSrc}
        alt={fakeBusiness.name}
      />
      <h1>{fakeBusiness.name}</h1>
      <h1>{fakeBusiness.name}</h1>
      <h2>{fakeBusiness.address}</h2>  
      <h2>{fakeBusiness.city}</h2>
      <h2>{fakeBusiness.state}</h2>
      <h2>{fakeBusiness.zipCode}</h2>
      <h2>{fakeBusiness.category}</h2>
      <h2>{fakeBusiness.rating}</h2>
      <h2>{fakeBusiness.reviewCount}</h2>
    </div>
  );
};

export default Business;
