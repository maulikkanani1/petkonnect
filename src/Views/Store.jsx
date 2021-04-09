import React, { useEffect, useState } from "react";
import { GetAllProduct } from "../ApiService";
import { Container } from "react-bootstrap";
import Header from "./../components/Header.jsx";
import Slider from "./../components/Slider.jsx";
import ProductCard from "./../components/ProductCard.jsx";
import { Button, Card } from "react-bootstrap";

const Store = () => {
  const [products, setProducts] = useState([]);

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

  useEffect(async () => {
    GetAllProduct().then(({ data }) => {
      setProducts(data.products);
      console.log(data.products);
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
          <div className="col-lg-4 product-menu">
            <Card>
              <Card.Header>
                <h5>Cart</h5>
              </Card.Header>
              <Card.Body>
                <Card.Text>No Products in the Cart</Card.Text>
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
        </div>
      </Container>
    </div>
  );
};

export default Store;
