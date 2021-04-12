import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table } from "react-bootstrap";
import { view_cart } from "../ApiService";

import Header from "../components/Header.jsx";
import "./../scss/cart.scss";

const Cart = () => {
  useEffect(() => {
    view_cart().then(({ data }) => {
      console.log(data.cart);
    });
  }, []);

  return (
    <div className="product_details">
      <Header />
      <div class="jumbotron jumbotron-fluid">
        <div class="container d-flex  justify-content-center">
          <div>
            <h1 class="display-4 text-center">Your Cart</h1>
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb bg-transparent">
                <li class="breadcrumb-item ">
                  <a className="text-primary" href="#">
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a className="text-primary" href="#">
                    Store
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <a className="text-dark" href="#">
                    Your Cart
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <Container>
        <Card>
          <Card.Body>
            <Table className="cart_tbl">
              <thead className="bg-secondary text-dark ">
                <tr>
                  <th>Product</th>
                  <th>Prize</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Subtotal</td>
                  <td>200.00</td>
                  <td>1kg</td>
                  <td>200.00</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Cart;
