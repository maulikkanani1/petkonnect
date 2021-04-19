import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table, Form } from "react-bootstrap";

import { useHistory } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";
import MyJumbotron from "../components/MyJumbotron";
import "./../scss/myorders.scss";
import "./../scss/track_order.scss";

const Myorder = () => {
  
    const history = useHistory();

    const order_track=()=>{
        history.push('/TrackMyorder')
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
          { title: "My orders", isActive: true },
        ]}
      />
      <Container>
          
        <Card>
            <div>
                <div className="m-3 p-2">My Orders</div>
                <div className="m-2 p-2" onClick={order_track} >
                <Card >
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
                                    </div>
                                    </div>

                                 </div>
                                </div>
                                <div className="col-md-2 m-auto w-50">
                                        <div className=" oderer_title text-center">
                                                150 $
                                        </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="float-right p-3">

                    <div className="d-flex justify-content-center m-3">
                                    <div className="dot">
                                    </div>
                                    <div className="status">
                                    Delivered on 22/03/2021
                                    </div>
                    </div>
                    <div className="sub_text m-3">
                        You item has been arrived
                    </div>
                    <div className="rate_review m-3">
                    Rate & Review Product
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Card>

                </div>

                <div className="m-2 p-2" onClick={order_track}>
                <Card >
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
                                            Product 2
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
                                    </div>
                                    </div>

                                 </div>
                                </div>
                                <div className="col-md-2 m-auto w-50">
                                        <div className=" oderer_title text-center">
                                                140 $
                                        </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="float-right p-3">

                    <div className="d-flex justify-content-center m-3">
                                    <div className="dot">
                                    </div>
                                    <div className="status">
                                    Delivered on 22/03/2021
                                    </div>
                    </div>
                    <div className="sub_text m-3">
                        You item has been arrived
                    </div>
                    <div className="rate_review m-3">
                    Rate & Review Product
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Card>

                </div>

                <div className="m-2 p-2" onClick={order_track}>
                <Card >
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
                                            Product 3
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
                                    </div>
                                    </div>

                                 </div>
                                </div>
                                <div className="col-md-2 m-auto w-50">
                                        <div className=" oderer_title text-center">
                                                500 $
                                        </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="float-right p-3">

                    <div className="d-flex justify-content-center m-3">
                                    <div className="dot">
                                    </div>
                                    <div className="status">
                                    Delivered on 22/03/2021
                                    </div>
                    </div>
                    <div className="sub_text m-3">
                        You item has been arrived
                    </div>
                    <div className="rate_review m-3">
                    Rate & Review Product
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Card>

                </div>


                <div className="m-2 p-2" onClick={order_track}>
                <Card >
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
                                            Product 4
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
                                    </div>
                                    </div>

                                 </div>
                                </div>
                                <div className="col-md-2 m-auto w-50">
                                        <div className=" oderer_title text-center">
                                                130 $
                                        </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="float-right p-3">

                    <div className="d-flex justify-content-center m-3">
                                    <div className="dot">
                                    </div>
                                    <div className="status">
                                    Delivered on 22/03/2021
                                    </div>
                    </div>
                    <div className="sub_text m-3">
                        You item has been arrived
                    </div>
                    <div className="rate_review m-3">
                    Rate & Review Product
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Card>

                </div>


                <div className="m-2 p-2" onClick={order_track}>
                <Card >
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
                                            Product 5
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
                                    </div>
                                    </div>

                                 </div>
                                </div>
                                <div className="col-md-2 m-auto w-50">
                                        <div className=" oderer_title text-center">
                                                200 $
                                        </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="float-right p-3">

                    <div className="d-flex justify-content-center m-3">
                                    <div className="red_dot">
                                    </div>
                                    <div className="status">
                                    Cancelled
                                    </div>
                    </div>
                    <div className="sub_text m-3">
                    You cancelled because of issue with delivery date
                    </div>
                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-100 refund p-2">
                            <div className="m-2">
                                <span className="refund_title">Refund Completed </span>
                                <span className="refund_text">
                                (Refund ID : 5465875454)
                                </span>
                            </div>
                           
                                <ul className="m-2">
                                    <li className="point">
                                    200.00 as refund is added to your PhonePe Wallet by 10/03/2021
                                    </li>
                                </ul>
                          
                            <div className="small_text m-2">
                            For any questions, please contact your bank with reference number 456699898IPJKJI
                            </div>
                            
                        </div>
                </Card>

                </div>

                <div className="m-2 p-2" onClick={order_track}>
                <Card >
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
                                            Product 5
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
                                    </div>
                                    </div>

                                 </div>
                                </div>
                                <div className="col-md-2 m-auto w-50">
                                        <div className=" oderer_title text-center">
                                                200 $
                                        </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="float-right p-3">

                    <div className="d-flex justify-content-center m-3">
                                    <div className="red_dot">
                                    </div>
                                    <div className="status">
                                    Cancelled
                                    </div>
                    </div>
                    <div className="sub_text m-3">
                    Your payment was not confirmed
                    </div>
                   
                                    </div>
                                </div>
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

export default Myorder;
