import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import StoreCard from "./../components/StoreCard.jsx";

const Products = ({ stores }) => {
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
      <StoreCard stores={stores} />
    </div>
  );
};

export default Products;
