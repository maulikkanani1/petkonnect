import React from "react";
import { useHistory } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const history = useHistory();
  const category_page=(category)=>{
    history.push(`/Products?search=${category}`);
  }
  return (
     <div className="category_card" onClick={()=>  category_page(category.name) }>
      <img src={category.imageUrl} />
      <h6 className="category_text">{category.name}</h6>
    </div>
  );
};

export default CategoryCard;
