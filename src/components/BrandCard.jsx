import React from 'react';
import { useHistory } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const history = useHistory();
  const brand_page = (brand) => {
    history.push(`/Products?brand=${brand}`);
  };

  return (
    <div className="brand_card" onClick={() => brand_page(brand.name)}>
      <img src={brand.imageUrl} />
      <h6 className="brand_text">{brand.name}</h6>
    </div>
  );
};

export default BrandCard;
