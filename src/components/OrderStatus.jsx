import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import moment from "moment";

const OrderStatus = ({ item }) => {
  const history = useHistory();
  let color;
  let date;
  if (item.orderStatus == "delivered") {
    color = "#51BE7C";
    date = moment(item.deliveredDate).format("DD-MM-YYYY");
  } else if (item.orderStatus == "cancelled") {
    color = "#FF4F3D";
    date = moment(item.cancellationDate).format("DD-MM-YYYY");
  } else if (item.orderStatus == "completed") {
    color = "#777777";
    date = moment(item.dispatchedDate).format("DD-MM-YYYY");
  } else if (item.orderStatus == "confirm") {
    color = "#777777";
    date = moment(item.confirmationDate).format("DD-MM-YYYY");
  } else if (item.orderStatus == "pending") {
    color = "#777777";
    date = moment(item.createdAt).format("DD-MM-YYYY");
  }
  return (
    <>
      {/* <i className={`fas fa-circle mr-2 `} style={{ color: color, fontSize: "20px" }}></i> */}
      <span style={{ color: "#333333", fontSize: "20px" }}>
        {item.orderStatus.toUpperCase()}
      </span>
    </>
  );
};

export default OrderStatus;
