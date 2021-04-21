import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table, Form } from "react-bootstrap";
import moment from "moment";
import swal from "sweetalert";

import { useHistory, useLocation } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";
import MyJumbotron from "../components/MyJumbotron";
import TrackCard2 from "../components/TrackCard2";

import "./../scss/track_myorder.scss";
import "./../scss/track_order.scss";

const Cart = () => {
  const location = useLocation();
  const history = useHistory();
  const { item, product } = location.state;

  const sucess_alert = () => {
    swal("Order Confirmed", "", "success");
  };

  const fail_alert = () => {
    swal({
      title: "Order Failed",
      text: "Order Failed due to the unsuccessful transaction",
      icon: "error",
      button: "Back to Cart",
    }).then(() => {
      history.push("/checkout");
    });
  };
  console.log(item);
  return (
    <div>
      <Header />
      <MyJumbotron
        title="My orders"
        route={[
          { title: "Home", to: "/" },
          { title: "Store", to: "/dashboard" },
          { title: "My orders", to: "/OrderDetails" },
          { title: "Details", isActive: true },
        ]}
      />
      <Container>
        <Card>
          <div>
            <div className="m-3 p-2">Details</div>
            <div className="m-2">
              <Card>
                <div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="float-left track_my_order p-2">
                        <div className="d-flex justify-content-center">
                          <div>
                            <img src={product["productImage"][0]} width="100px" />
                          </div>

                          <div className="p-2">
                            <div className="oderer_title">{product["productName"]}</div>
                            <div>
                              <span className="text-muted">Type : {product["productCategory"]}</span>
                            </div>
                            <div>
                              <span className="text-muted">Vendor :{item.vendorID.vendorName}</span>
                            </div>
                            <div>
                              <span className="text-muted">Quantity : {product["subUnit"]}</span>
                            </div>
                            <div>
                              <b>Price : &#8377; {product["sellingPrice"] * product["subUnit"]}</b>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex my-5 justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <img src="./../../icons/order_processed.svg" width="40px" />
                            <div className="m-2">
                              <h6 className="font-weight-bold">Delivered on</h6>

                              <label className="delivered_address">
                                {item.confirmationDate ? new Date(item.confirmationDate).toLocaleDateString() : "-"}
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex my-5 justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <img src="./../../icons/delivered_address.svg" width="40px" />
                            <div className="m-2">
                              <h6 className="font-weight-bold">Delivered Address</h6>
                              <label className="delivered_address">
                                {item.userID.address.doorNo},{item.userID.address.street},{" "}
                                {item.userID.address.building}, {item.userID.address.city} {item.userID.address.zip},{" "}
                                {item.userID.address.state}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="float-right p-3 m-2">
                        <TrackCard2
                          title="Ordered"
                          date={moment(item["createdAt"]).format("DD-MM-YYYY")}
                          trackActiveDot={item.orderStatus === "pending" ? true : false}
                        />
                        <TrackCard2
                          title="Packed"
                          date={
                            item.orderStatus === "confirm" ? moment(item["confirmationDate"]).format("DD-MM-YYYY") : "-"
                          }
                          trackActiveDot={item.orderStatus === "confirm" ? true : false}
                        />
                        <TrackCard2
                          title="Shipped"
                          date={
                            item.orderStatus === "completed" ? moment(item["dispatchedDate"]).format("DD-MM-YYYY") : "-"
                          }
                          trackActiveDot={item.orderStatus === "completed" ? true : false}
                        />
                        <TrackCard2
                          title="Delivered"
                          date={
                            item.orderStatus === "delivered" ? moment(item["deliveredDate"]).format("DD-MM-YYYY") : "-"
                          }
                          trackActiveDot={item.orderStatus === "delivered" ? true : false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <Button variant="outline-primary" onClick={sucess_alert}>
                    <img className="mr-2" src="./../../icons/star.svg" width="25px" />
                    Rate & Review Product
                  </Button>
                  <Button variant="outline-primary" className="ml-3" onClick={fail_alert}>
                    <img className="mr-2" src="./../../icons/star.svg" width="25px" />
                    Download Invoice
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </Container>

      <Footer />
    </div>
  );
};

export default Cart;
