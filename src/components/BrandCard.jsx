import React from "react";

const BrandCard = ({ brand }) => {
  return (
    <div className="brand_card">
      <img src={brand.imageUrl} />
      <h6 className="brand_text">{brand.name}</h6>
    </div>
  );
};

export default BrandCard;
