import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table, Form } from "react-bootstrap";

import { useHistory } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";
import MyJumbotron from "../components/MyJumbotron";
import "./../scss/track_myorder.scss";
import "./../scss/track_order.scss";
import TrackCard2 from "../components/TrackCard2";
import swal from 'sweetalert';

const Cart = () => {
  
    const history = useHistory();
    
    const sucess_alert=()=>{
        swal("Order Confirmed", "", "success");
        }

    const fail_alert=()=>{
        swal({title: "Order Failed",
        text: "Order Failed due to the unsuccessful transaction",
        icon: "error",
        button: "Back to Cart"}).then(()=>{
            history.push('/checkout')
        });
    }

  useEffect(() => {
  
  }, []);


  return (
    <div>
      <Header />
      <MyJumbotron
        title="My orders"
        route={[
          { title: "Home", to: "/" },
          { title: "Store", to: "/dashboard" },
          { title: "My orders", to:'MyOrder' },
          { title: "Details", isActive: true }
        ]}
      />
      <Container>
          
        <Card>
            <div>
                <div className="m-3 p-2">Details</div>
                <div className="m-2"  >
                <Card>
                        <div>
                            <div className="row">
                                <div className="col-md-5">
                                <div className="float-left p-2">
                                    <div className="d-flex justify-content-center">
                                    <div>
                                        <img src="https://petkon.s3.ap-south-1.amazonaws.com/1618740244814" width="100px" />     
                                    </div>
                                    <div className="p-2">
                                        <div className="oderer_title">
                                            Product 1
                                        </div>
                                        <div>
                                            Type : Daiy Food
                                        </div>
                                        <div>
                                            Vendor : Wild Earth
                                        </div>
                                        <div>
                                            Quantity : 2
                                        </div>
                                        <div>
                                        Price : 150.00 $
                                        </div>
                                    </div>
                                    </div>


             <div className="d-flex my-5 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="./../../icons/order_processed.svg" width="40px" />
                <div className="m-2">
                <h6 className="font-weight-bold">Delivered on</h6>
                <label className="delivered_address">22/03/2021</label>
                </div>
              </div>
            </div>

            <div className="d-flex my-5 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="./../../icons/delivered_address.svg" width="40px" />
                <div className="m-2">
                <h6 className="font-weight-bold">Delivered Address</h6>
                <label className="delivered_address">No.2, KK Road, T Nagar, Chennai 600026</label>
                </div>
              </div>
            </div>
                                    
                                 </div>
                                </div>
                               
                                <div className="col-md-5">
                                <div className="float-right p-3 m-2">

                                    

                                <TrackCard2
                title="Ordered"
                date="20/03/2021"
                trackActiveDot={true}
                />
                <TrackCard2
                title="Packed"
                date="20/03/2021"
                trackActiveDot={true}
                />
                 <TrackCard2
                title="Shipped"
                date="20/03/2021"
                trackActiveDot={true}
                />
                 <TrackCard2
                 title="Delivered "
                 date="20/03/2021"
                trackActiveDot={false}
                />
                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="rate_review m-3 pl-2 pr-2 pt-1 pb-1">
                            <img src="./../../icons/star_filled.svg"  width="25px" onClick={sucess_alert} />   Rate & Review Product
                            </div>
                            <div className="rate_review m-3 pl-2 pr-2 pt-1 pb-1">
                            <img src="./../../icons/star_filled.svg"  width="25px"  onClick={fail_alert} />  Download Invoice
                            </div>
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
