import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import Header from "../components/Header.jsx";
import TrackCard from "../components/TrackCard.jsx";
import MyJumbotron from "../components/MyJumbotron";

import "./../scss/track_order.scss";

const TrackOrder = () => {
  return (
    <div className="track_order_page">
      <Header />
      <MyJumbotron
        title="Track Order"
        route={[
          { title: "Home" },
          { title: "Store" },
          { title: "Order Details" },
          { title: "Track Order", isActive: true },
        ]}
      />

      <Container>
        <Card className="mb-5">
          <Card.Body>
            <div className="d-flex mb-5 justify-content-between">
              <h5>Track Order</h5>
              <h5 className="text-primary ">Order ID : 45465416</h5>
            </div>
            <div className="p-5">
              <TrackCard
                icon="./../../icons/order_placed.svg"
                title="Order Placed"
                description="We had received your order"
                date="22/02/2021"
                time="13 : 00"
              />
              <TrackCard
                icon="./../../icons/order_processed.svg"
                title="Order Processed"
                description="Order has been processed"
                date="23/02/2021"
                time="15 : 00"
              />
              <TrackCard
                icon="./../../icons/ready_to_ship.svg"
                title="Ready to Ship"
                description="Your Order is ready for shipping"
                date="24/02/2021"
                time="03 : 00"
              />
              <TrackCard
                icon="./../../icons/out_for_delivery.svg"
                title="Out for Delivery"
                description="Your Order is dispatched"
                date="25/02/2021"
                time="04 : 00"
              />
              <TrackCard
                title="Delivered Successfully"
                icon="./../../icons/delivered_successfully.svg"
                description="Your Order is delivered to the given address"
                date="26/02/2021"
                time="04 : 00"
                isActive
                trackActiveDot={false}
              />
            </div>
            <div className="d-flex my-5 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="./../../icons/delivered_address.svg" />
                <h5 className="ml-3 mb-0">Delivered Address</h5>
              </div>
              <div>
                <h6 className="font-weight-bold">Home</h6>
                <label className="delivered_address">No.2, KK Road, T Nagar, Chennai 600026</label>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default TrackOrder;
