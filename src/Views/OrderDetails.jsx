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

  console.log('OD',OrderData)
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
          <div>
            <div className="m-3 p-2">My Orders</div>
            {OrderData.length ? (
              OrderData.map((res) =>
                res["productIDs"].map((products) => (
                  console.log('pro',products),
                  <div className="m-2 p-2" onClick={() => get_status(res, products)}>
                    <Card>
                      <div>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="float-left p-2">
                              <div className="d-flex justify-content-center">
                                <div>
                                  <img src={products["productImage"][0]} width="100px" />
                                </div>
                                <div className="p-2">
                                  <div className="oderer_title">{products["productName"]}</div>
                                  <div>Type : {products["productCategory"]}</div>
                                  <div>Vendor : {res.vendorID.vendorName}</div>
                                  <div>Quantity : {products["subUnit"]}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 m-auto w-50">
                            <div className=" oderer_title text-center">
                              &#8377; {products["sellingPrice"] * products["subUnit"]}
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="float-right p-3">
                              <div className="d-flex justify-content-center m-3">
                                <div className="ml-2 status">
                                  <OrderStatus item={res} />
                                </div>
                              </div>
                              {/* <div className="sub_text m-3">You item has been arrived</div> */}
                              {/* <div className="rate_review m-3">Rate & Review Product</div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))
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
