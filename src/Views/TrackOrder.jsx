import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";
import TrackCard from "../components/TrackCard.jsx";
import MyJumbotron from "../components/MyJumbotron";
import { get_order_status } from "../ApiService";
import moment from "moment";
import "./../scss/track_order.scss";

const TrackOrder = () => {
  const history = useHistory();
  const params = useParams();
  const [status, setstatus] = useState("");

  useEffect(() => {
    if (params["id"]) {
      get_order_status(params["id"])
        .then(({ data }) => {
          if (data["order"]) {
            setstatus(data["order"]);
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, []);

  return (
    <div className="track_order_page">
      <Header />
      <MyJumbotron
        title="Track Order"
        route={[
          { title: "Home", to: "/" },
          { title: "Order History", to: "/OrderDetails" },
          { title: "Track Order", isActive: true },
        ]}
      />

      <Container>
        <Card className="mb-5">
          <Card.Body>
            <div className="d-flex mb-5 justify-content-between">
              <h5>Track Order</h5>
              <h5 className="text-primary ">Order ID : {status && status["id"]}</h5>
            </div>
            <div className="p-5">
              {status && status["orderStatus"] == "pending" ? (
                <TrackCard
                  icon="./../../icons/order_placed.svg"
                  title="Order Placed"
                  description="We had received your order"
                  date={moment(status["updatedAt"]).format("DD-MM-YYYY")}
                  time={moment(status["updatedAt"]).format("hh:mm")}
                  isActive
                />
              ) : (
                <TrackCard icon="./../../icons/order_placed.svg" title="Order Placed" />
              )}

              {status && status["orderStatus"] == "confirm" ? (
                <TrackCard
                  icon="./../../icons/order_processed.svg"
                  title="Order Processed"
                  description="Order has been processed"
                  date={moment(status["updatedAt"]).format("DD-MM-YYYY")}
                  time={moment(status["updatedAt"]).format("hh:mm")}
                  isActive
                />
              ) : (
                <TrackCard icon="./../../icons/order_processed.svg" title="Order Processed" />
              )}

              {status && status["orderStatus"] == "completed" ? (
                <TrackCard
                  icon="./../../icons/out_for_delivery.svg"
                  title="Out for Delivery"
                  description="Your Order is dispatched"
                  date={moment(status["updatedAt"]).format("DD-MM-YYYY")}
                  time={moment(status["updatedAt"]).format("hh:mm")}
                  isActive
                />
              ) : (
                <TrackCard icon="./../../icons/out_for_delivery.svg" title="Out for Delivery" />
              )}

              {status && status["orderStatus"] == "delivered" ? (
                <TrackCard
                  title="Delivered Successfully"
                  icon="./../../icons/delivered_successfully.svg"
                  description="Your Order is delivered to the given address"
                  date={moment(status["updatedAt"]).format("DD-MM-YYYY")}
                  time={moment(status["updatedAt"]).format("hh:mm")}
                  isActive
                  trackActiveDot={false}
                />
              ) : (
                <TrackCard
                  title="Delivered Successfully"
                  icon="./../../icons/delivered_successfully.svg"
                  trackActiveDot={false}
                />
              )}
            </div>
            <div className="d-flex my-5 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="./../../icons/delivered_address.svg" />
                <h5 className="ml-3 mb-0">Delivery Address</h5>
              </div>
              <div>
                <h6 className="font-weight-bold">Home</h6>
                <label className="delivered_address">No.2, KK Road, T Nagar, Chennai 600026</label>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="mt-3 mb-5 cart_summary">
          <Card.Body>
            {/*<div className="row">
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
      </div>*/}
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
          <Card.Footer className="bg-transparent">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 ">
                    <h5 className="font-weight-bold mb-3">Payment Type</h5>
                  </div>
                  <div className="col-md-4">
                    <label className="text-gray mb-0">Cash On Delivery</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 mt-5 mb-2 justify-content-center">
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
      <Footer />
    </div>
  );
};

export default TrackOrder;
