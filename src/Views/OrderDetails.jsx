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
        title="My orders"
        route={[
          { title: "Home", to: "/" },
          { title: "Store", to: "/dashboard" },
          { title: "My orders", isActive: true },
        ]}
      />
      <Container>
        <Card>
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
          <div style={{ cursor: "pointer" }}>
            <div className="m-3 p-2">My Orders</div>
            {OrderData.length ? (
              OrderData.map((res) =>
                res["productIDs"].map(
                  (products, j) => (
                    console.log("pro", res),
                    (
                      <div className="m-2 p-2" onClick={() => get_status(res, products)}>
                        <Card>
                          <div>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="float-left m-auto">
                                  <div className="d-flex justify-content-between">
                                    <div className="col d-flex align-items-center justify-content-center">
                                      <img src={products["productImage"][0]} width="100px" />
                                    </div>
                                    <div className="px-4 py-2">
                                      <div className="oderer_title">{products["productName"]}</div>
                                      <div>Type : {products["productCategory"]}</div>
                                      <div>Quantity : {res?.quantities[j]}</div>
                                      <div>Price : {res?.netPrice[j]}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="px-4 py-2">
                                  <strong>Vendor :</strong> {res?.vendorID?.vendorName} <br />
                                  <strong>Shipping Charges: </strong>
                                  {res?.shippingCharges}
                                </div>
                              </div>
                              <div className="col-md-2 m-auto w-50">
                                <div className="oderer_title text-center col d-flex align-items-center justify-content-center">
                                  &#8377; {res?.finalTotal}
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="float-right p-3">
                                  <div className="d-flex justify-content-center m-3">
                                    <div className="ml-2 status">
                                      <OrderStatus item={res} />
                                    </div>
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
              )
            ) : (
              <h1>No Order details</h1>
            )}
          </div>
        </Card>
      </Container>

      <Footer />
    </div>
  );
};

export default Myorder;
