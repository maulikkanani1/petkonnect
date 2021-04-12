import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table, Form } from "react-bootstrap";
import { view_cart } from "../ApiService";

import Header from "../components/Header.jsx";
import "./../scss/checkout.scss";

const Cart = () => {
  const [cartDate, setCartDate] = useState([]);
  useEffect(() => {
    view_cart().then(({ data }) => {
      setCartDate(data.cart);
    });
  }, []);

  return (
    <div>
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
                {cartDate.map((product) => {
                  const { productImage, productName, sellingPrice } = product.productID;
                  return (
                    <tr>
                      <td>
                        <img src={productImage[0]} />
                        <span className="product_name ml-2">{productName}</span>
                      </td>
                      <td>
                        <i class="fas fa-rupee-sign mr-1 f-18"></i>
                        {sellingPrice}
                      </td>
                      <td>1 kg</td>
                      <td>
                        <i className="fas fa-plus-circle text-secondary mr-4"></i>
                        <span className="mr-4">{product.quantity}</span>
                        <i className="fas fa-minus-circle text-secondary "></i>
                      </td>
                      <td>
                        <i class="fas fa-rupee-sign mr-1 f-18"></i>
                        {sellingPrice * product.quantity}
                        <i class="far fa-times-circle text-danger ml-3"></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <Form.Control type="text" placeholder="Enter Coupon Code" />
              </div>
              <div className="col-lg-3 col-md-3">
                <Button variant="secondary">Apply Coupon</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="mt-3 mb-5 cart_summary">
          <Card.Header>
            <h5 className="font-weight-bold">Cart Summary</h5>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="font-weight-bold">Shipping</h5>
                  </div>
                  <div className="col-md-6">
                    <span className="address">No.2, KK Road, T Nagar, Chennai 600026</span>
                    <a className="mt-3 d-block text-primary" href="#">
                      Change Address
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="row">
                  <div className="col-md-6 text-right">
                    <h5 className="font-weight-bold mb-3">Subtotal</h5>
                    <h5 className="font-weight-bold">Shipping Charge</h5>
                  </div>
                  <div className="col-md-4 text-right">
                    <h5 className="amount">
                      <i class="fas fa-rupee-sign mr-1 f-16"></i>1120.00
                    </h5>
                    <h5 className="amount">
                      <i class="fas fa-rupee-sign mr-1 f-16"></i>50.00
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="row">
              <div className="offset-6 col-md-6">
                <div className="row">
                  <div className="col-md-6 text-right">
                    <h5 className="font-weight-bold mb-3">Total</h5>
                  </div>
                  <div className="col-md-4 text-right">
                    <h5 className="amount">
                      <i class="fas fa-rupee-sign mr-1 f-16"></i>1170.00
                    </h5>
                  </div>
                </div>
              </div>
              <div className="d-flex w-100 mt-3 justify-content-center">
                <Button className="cart_btn mr-3" variant="outline-dark" lg>
                  Continue Shopping
                </Button>

                <Button className="cart_btn" variant="secondary">
                  Checkout
                </Button>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Cart;
