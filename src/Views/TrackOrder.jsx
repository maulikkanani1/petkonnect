import React, { useEffect, useState } from "react";
import { useHistory,useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import Header from "../components/Header.jsx";
import TrackCard from "../components/TrackCard.jsx";
import MyJumbotron from "../components/MyJumbotron";
import { get_order_status } from "../ApiService";
import "./../scss/track_order.scss";
import moment from 'moment';

const TrackOrder = () => {
  const history = useHistory();
  const params=useParams();
  const [status, setstatus] = useState('');

  const formatDate=(date)=> {
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${date.getFullYear()}-${monthString}-${currentDate}`;
  }

  useEffect(() => {
    if(params['id']){
      get_order_status(params['id']).then((res)=>{
        if(res.data['order']){
         console.log("status",res.data);
            setstatus(res.data['order']);         
        }
      }).catch((err)=>{
        console.log("error",err);
      })
    }
    

  }, []);

  return (
    <div className="track_order_page">
      <Header />
      <MyJumbotron
        title="Track Order"
        route={[
          { title: "Home", to: "/" },
          { title: "Store", to: "/store" },
          { title: "Order Details", to: "/OrderDetails" },
          { title: "Track Order", isActive: true },
        ]}
      />

      <Container>
        <Card className="mb-5">
          <Card.Body>
            <div className="d-flex mb-5 justify-content-between">
              <h5>Track Order</h5>
              <h5 className="text-primary ">Order ID : {status && status['id']}</h5>
            </div>
            <div className="p-5">
              { status && status['orderStatus']== 'pending' ? <TrackCard
                icon="./../../icons/order_placed.svg"
                title="Order Placed"
                description="We had received your order"
                date={moment(status['updatedAt']).format('DD-MM-YYYY')}
                time={moment(status['updatedAt']).format('hh:mm')}
                isActive
                /> : <TrackCard
                icon="./../../icons/order_placed.svg"
                title="Order Placed"
                description="We had received your order"
                date="22/02/2021"
                time="13 : 00"
                /> }
              
              { status && status['orderStatus']== 'confirm' ? <TrackCard
                 icon="./../../icons/order_processed.svg"
                 title="Order Processed"
                 description="Order has been processed"
                date={moment(status['updatedAt']).format('DD-MM-YYYY')}
                time={moment(status['updatedAt']).format('hh:mm')}
                isActive
                /> : <TrackCard
                icon="./../../icons/order_processed.svg"
                title="Order Processed"
                description="Order has been processed"
                date="22/02/2021"
                time="13 : 00"
                /> }

            { status && status['orderStatus']== 'completed' ? <TrackCard
                icon="./../../icons/out_for_delivery.svg"
                title="Out for Delivery"
                description="Your Order is dispatched"
                date={moment(status['updatedAt']).format('DD-MM-YYYY')}
                time={moment(status['updatedAt']).format('hh:mm')}
                isActive
                /> : <TrackCard
                icon="./../../icons/out_for_delivery.svg"
                title="Out for Delivery"
                description="Your Order is dispatched"
                date="22/02/2021"
                time="13 : 00"
                /> }
            
            
            { status && status['orderStatus']== 'delivered' ? <TrackCard
               title="Delivered Successfully"
               icon="./../../icons/delivered_successfully.svg"
               description="Your Order is delivered to the given address"
                date={moment(status['updatedAt']).format('DD-MM-YYYY')}
                time={moment(status['updatedAt']).format('hh:mm')}
                isActive
                trackActiveDot={false}
                /> : <TrackCard
                title="Delivered Successfully"
                icon="./../../icons/delivered_successfully.svg"
                description="Your Order is delivered to the given address"
                date="22/02/2021"
                time="13 : 00"
                trackActiveDot={false}
                /> }
                
             
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
