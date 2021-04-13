import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { view_cart } from "../ApiService";

const CartSide = () => {
  const productCategory = [
    {
      name: "Dogs",
    },
    {
      name: "Cats",
    },
    {
      name: "Birds",
    },
    {
      name: "Rabbit",
    },
    {
      name: "Small Pets",
    },
    {
      name: "Kittens",
    },
  ];
  const [cartDate, setCartDate] = useState([]);

  useEffect(() => {
    view_cart().then(({ data }) => {
      setCartDate(data.cart);
    });
  }, []);

  return (
    <div className="col-lg-4 product-menu">
      <Card>
        <Card.Header>
          <h5>Cart</h5>
        </Card.Header>
        <Card.Body>
          {useState.length ? (
            cartDate.map((product) => {
              const { productImage, productName, sellingPrice } = product.productID;
              return (
                <div className="d-flex w-100 justify-content-between align-items-center mb-3 mini_cart">
                  <div>
                    <img src={productImage[0]} />
                  </div>
                  <div className="w-80">
                    <span className="product_name ml-3">{productName}</span>
                    <div className="ml-3">
                      <span className="mr-2">{product.quantity}</span>
                      <i className="fas fa-times mr-2"></i>
                      <i className="fas fa-rupee-sign  f-14"></i>
                      {sellingPrice}
                    </div>
                  </div>
                  <div>
                    <i className="far fa-times-circle text-danger "></i>
                  </div>
                </div>
              );
            })
          ) : (
            <Card.Text>No Products in the Cart</Card.Text>
          )}
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header>
          <h5>Product Category</h5>
        </Card.Header>
        <Card.Body>
          {productCategory.map((category) => (
            <label className="d-block mb-3">- {category.name}</label>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartSide;
