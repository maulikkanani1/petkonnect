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
          <a
            href="javascript:void(0)"
            onClick={() => {
              history.push("/checkout");
            }}
          >
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="javascript:void(0)">
            <i className="fas fa-heart"></i>
          </a>
          <a href="javascript:void(0)" onClick={() => history.push("/ProductDetail", { data: product, id })}>
            <i className="fas fa-eye"></i>
          </a>
        </div>
        <Card.Body>
          <h5>{product.productName}</h5>
          <div className="mb-2">
            {Array.from({ length: 5 }, (x, i) => {
              return i + 1 > product.rating ? (
                <i className="far fa-star text-secondary"></i>
              ) : (
                <i className="fas fa-star text-secondary"></i>
              );
            })}
          </div>
          <small className="text-muted">Brand : {product.productBrand}</small>
          <div>
            <small>
              <i className="fas fa-rupee-sign text-primary mr-1"></i>
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
