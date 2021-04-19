import React, { useEffect, useState } from "react";
import { Container, Card, Button, Table, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { user_oerder_history, get_order_status } from "../ApiService";
import moment from 'moment';


import Header from "../components/Header";
import Footer from "../components/footer.jsx";
import MyJumbotron from "../components/MyJumbotron";

import "./../scss/checkout.scss";


const OrderDetails = () => {
  const [OrderData, setOrderData] = useState([]);
  const history = useHistory();
  const params=useParams();
  const [status, setstatus] = useState('');
  
  useEffect(() => {
    user_oerder_history().then(({ data }) => {
      setOrderData(data);
    });
    get_order_status(params['id']).then((res)=>{
      if(res.data['order']){
       console.log("status",res.data);       
      }
    });
  }, []);
  const get_status=(id)=>{
    history.push(`/TrackOrder/${id}`);
  }

  return (
    <div>
      <Header />
      <MyJumbotron
        title="Order Details"
        route={[
          { title: "Home", to: "/" },
          { title: "Order History", isActive: true },
        ]}
      />
      <Container>
        <Card>
          <Card.Body>
            <Table className="cart_tbl">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
            
              {OrderData ?
                OrderData.map((res)=>{
                  // console.log('units',res);
                return  res['productIDs'].map((products,i)=>{
                      return (
                      <tr onClick={()=>get_status(res['id'])}>
                      <td>
                        <img src={products['productImage'][0]} />
                        <span className="product_name ml-2">{products['productName']}</span>
                      </td>
                      <td>
                        <i className="fas fa-rupee-sign mr-1 f-18"></i>
                        {products['sellingPrice']}
                      </td>
                      <td>
                        
                        <span className="mr-4">{products['subUnit']}</span>
                        
                      </td>
                      <td>
                        <i className="fas fa-rupee-sign mr-1 f-18"></i>
                        {products['sellingPrice'] * products['subUnit']}
                        
                      </td>
                    </tr>
                      // console.log('prod',);
                      );
                    })
                }) : <h1>No Order details</h1>
              }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        {/*<Card className="mt-3 mb-5 cart_summary">
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
          <Card.Footer className="bg-transparent">
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
        </Card> */}
      </Container>
      <Footer />
    </div>
  );
};

export default OrderDetails;
