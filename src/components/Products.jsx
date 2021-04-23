import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import StoreCard from "./../components/StoreCard.jsx";
import ProductCard from "../components/ProductCard"

const Products = ({ stores }) => {
  console.log('SSS',stores)
  return (
    <div className="products_container">
      <h5 className="text-primary text-center mt-5">Top Products</h5>
      <Nav
        className="justify-content-center mt-5"
        variant="pills"
        defaultActiveKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/home">Featured Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">New Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Top Selling</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="row mt-5 mb-5">
        {stores.map((store, i) => (
          <ProductCard product={store} vendor={store['vendorID']} id={store['vendorID'].id} />
         ))} 
      </div>
    </div>
  );
};

export default Products;
