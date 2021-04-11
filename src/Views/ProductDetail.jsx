import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "./../components/Header.jsx";
import Slider from "./../components/Slider.jsx";
import CartSide from "../components/CartSide";

const Store = () => {
  const location = useLocation();
  const productData = location.state.data;
  const { productImage, productDescription, sellingPrice } = productData;
  console.log(productData);
  return (
    <div>
      <Header />
      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <Card className="w-100 product_card">
              <img src={productImage[0]} />
              <h1>{productDescription}</h1>
              <p>{sellingPrice}</p>
            </Card>
            {/* <div className="row">
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div> */}
          </div>
          <CartSide />
        </div>
      </Container>
    </div>
  );
};

export default Store;
