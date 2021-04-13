import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { view_cart, place_order, remove_card_item } from "../ApiService";

import Header from "../components/Header";
import MyJumbotron from "../components/MyJumbotron";

import "./../scss/checkout.scss";

const OrderDetails = () => {
  const [cartDate, setCartDate] = useState([]);
  const history = useHistory();
  useEffect(() => {
    view_cart().then(({ data }) => {
      setCartDate(data.cart);
    });
  }, []);

  return (
    <div>
      <Header />
      <MyJumbotron
        title="Order Details"
        route={[
          { title: "Home" },
          { title: "Store" },
          { title: "Your Cart" },
          { title: "Order Details", isActive: true },
        ]}
      />
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
                  console.log(product);
                  const { productImage, productName, sellingPrice, id } = product.productID;
                  return (
                    <tr>
                      <td>
                        <img src={productImage[0]} />
                        <span className="product_name ml-2">{productName}</span>
                      </td>
                      <td>
                        <i className="fas fa-rupee-sign mr-1 f-18"></i>
                        {sellingPrice}
                      </td>
                      <td>1 kg</td>
                      <td>
                        <i className="fas fa-plus-circle text-secondary mr-4"></i>
                        <span className="mr-4">{product.quantity}</span>
                        <i className="fas fa-minus-circle text-secondary "></i>
                      </td>
                      <td>
                        <i className="fas fa-rupee-sign mr-1 f-18"></i>
                        {sellingPrice * product.quantity}
                        <i
                          className="far fa-times-circle text-danger ml-3 cursor-pointer"
                          onClick={() => remove_card_item(id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card className="mt-3 mb-5 cart_summary">
          <Card.Body>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="font-weight-bold">Shipping</h5>
                  </div>
                  <div className="col-md-6">
                    <span className="address">No.2, KK Road, T Nagar, Chennai 600026</span>
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
                      <i className="fas fa-rupee-sign mr-1 f-16"></i>1120.00
                    </h5>
                    <h5 className="amount">
                      <i className="fas fa-rupee-sign mr-1 f-16"></i>50.00
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="offset-6 col-md-6">
                <div className="row">
                  <div className="col-md-6 text-right">
                    <h5 className="font-weight-bold mb-3">Total</h5>
                  </div>
                  <div className="col-md-4 text-right">
                    <h5 className="amount">
                      <i className="fas fa-rupee-sign mr-1 f-16"></i>1170.00
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 ">
                    <h5 className="font-weight-bold mb-3">Payment Type</h5>
                  </div>
                  <div className="col-md-4">
                    <label className="text-gray mb-0">Debit Card</label>
                    <label className="text-gray mb-0">**** **** **** 9890</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 my-5 justify-content-center">
              <Button
                className="track_order_btn"
                size="lg"
                onClick={() => {
                  history.push("/TrackOrder");
                }}
                variant="secondary"
              >
                Track Order
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default OrderDetails;