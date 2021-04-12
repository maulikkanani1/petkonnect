import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product, id }) => {
  const history = useHistory();

  return (
    <div className="col-lg-4 col-md-4 col-sm-12 mb-3" key={product.id}>
      <Card className="w-100 product_card">
        <Card.Img variant="top" src={product.productImage[0]} />
        <div className="product-btns">
          <a href="">
            <i class="fas fa-shopping-cart"></i>
          </a>
          <a href="">
            <i class="fas fa-heart"></i>
          </a>
          <div onClick={() => history.push("/ProductDetail", { data: product, id })}>
            <i class="fas fa-eye"></i>
          </div>
        </div>
        <Card.Body>
          <h5>{product.productName}</h5>
          <div className="mb-2">
            {Array.from({ length: 5 }, (x, i) => {
              return i + 1 > product.rating ? (
                <i class="far fa-star text-secondary"></i>
              ) : (
                <i class="fas fa-star text-secondary"></i>
              );
            })}
          </div>
          <small className="text-muted">Brand : {product.productBrand}</small>
          <div>
            <small>
              <i class="fas fa-rupee-sign text-primary mr-1"></i>
            </small>
            <span className="amount">{product.sellingPrice.toFixed(2)}</span>
            <small className="text-muted ml-2">50+ Delivery</small>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
