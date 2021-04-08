import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="category_card">
      <img src={category.imageUrl} />
      <h6 className="category_text">{category.name}</h6>
    </div>
  );
};

export default CategoryCard;
