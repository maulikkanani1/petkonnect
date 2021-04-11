import React, { useEffect, useState } from "react";
import { GetAllProduct } from "../ApiService";
import { Container } from "react-bootstrap";
import Header from "./../components/Header.jsx";
import Slider from "./../components/Slider.jsx";
import ProductCard from "./../components/ProductCard.jsx";
import CartSide from "../components/CartSide";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    GetAllProduct().then(({ data }) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <div className="row">
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
          <CartSide />
        </div>
      </Container>
    </div>
  );
};

export default Store;
