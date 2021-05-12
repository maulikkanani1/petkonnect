import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table, Form } from "react-bootstrap";
import { user_oerder_history, get_order_status } from "../ApiService";

import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";
import MyJumbotron from "../components/MyJumbotron";
import OrderStatus from "../components/OrderStatus";
import "./../scss/myorders.scss";
import "./../scss/track_order.scss";

const Myorder = () => {
  const history = useHistory();
  const [OrderData, setOrderData] = useState([]);
  const params = useParams();
  const [status, setstatus] = useState("");

  useEffect(() => {
    user_oerder_history().then(({ data }) => {
      setOrderData(data);
    });
    // get_order_status(params["id"]).then((res) => {
    //   if (res.data["order"]) {
    //     console.log("status", res.data);
    //   }
    // });
  }, []);

  console.log("OD", OrderData);
  const get_status = (item, product) => {
    history.push(`/TrackOrder/${item.id}`, { item, product });
  };

  return (
    <div>
      <Header />
      <MyJumbotron
        title="My Orders"
        route={[
          { title: "Home", to: "/" },
          { title: "Store", to: "/dashboard" },
          { title: "My orders", isActive: true },
        ]}
      />
      
        <Card className="orders-container">
          {/* <div>
            <div className="m-3 p-2">My Orders</div>
            {OrderData.length ? (
              OrderData.map(
                (order, i) => (
                  console.log(order),
                  (
                    <div className="m-2 p-2">
                      <Card>
                        <div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="float-left p-2 mt-2">
                                {order.productIDs.map((product, j) => (
                                  <div className="mb-2">
                                    <img
                                      src={product.productImage}
                                      height="50px"
                                      style={{
                                        maxWidth: 50,
                                        objectFit: "contain",
                                      }}
                                    />
                                    <div className="p-2">
                                      <div className="oderer_title">{product["productName"]}</div>
                                      <div>Type : {product["productCategory"]}</div>

                                      <div>Quantity : {order?.quantities[j]}</div>
                                      <div>Sub Total : {order?.netPrice[j]}</div>
                                    </div>
                                  </div>
                                ))}
                                <div className="">
                                  <strong>Vendor :</strong> {order?.vendorID?.vendorName} <br />
                                  <strong>Shipping Charges: </strong>
                                  {order?.shippingCharges}
                                  <br />
                                  <strong>Final Total :</strong> {order?.finalTotal}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )
                )
              )
            ) : (
              <h1>No Order details</h1>
            )}
          </div> */}
          <div style={{ cursor: "pointer" }} >
            <div className="m-3 p-2">My Orders</div>
            {OrderData.length ? (
              OrderData.map((res) =>
                 (
                    (
                      <div className="card-wrapper">
                        <div className="card">
                          <div className="top-container">
                            <img src={res?.vendorID.storeImage} alt="" className="img-wrapper" />
                            <div className="store-details">
                              <div className="order_title">
                                {res?.vendorID.storeName}
                              </div>
                              <div>
                              <p className="small-text">C-3 Street, New Jearsey</p>
                              <p className="small-text"> {res?.createdAt}</p>
                              </div>
                            </div>
                          </div>
                          <hr className="horizontal-line" />
                          <div className="bottom-container">
                            <div className="first-half">
                              <div>
                                {res['productIDs'].map((product,idx) => {
                                  const qty = res.quantities[idx];
                                
                                  return (
                                    <span className="product-qty"> {product['productName']} x {qty} </span>
                                  )
                                })}
                              </div>
                              <div>
                                <button className="btn btn-secondary track-btn"> TRACK ORDER</button>
                                <button className="btn btn-outline-secondary track-btn"> CANCEL</button>
                              </div>
                            </div>
                            <div className="second-half">
                              Total: &#x20B9; {res?.finalTotal}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )
              )
            ) : (
              <h1>No Order details</h1>
            )}
          </div>
        </Card>

      <Footer />
    </div>
  );
};

export default Myorder;
