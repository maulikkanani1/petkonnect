import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Table, Form } from 'react-bootstrap';
import moment from 'moment';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

import { useHistory, useLocation } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/footer.jsx';
import MyJumbotron from '../components/MyJumbotron';
import TrackCard2 from '../components/TrackCard2';
import { cancelOrder } from '../ApiService';
import './../scss/track_myorder.scss';
import './../scss/track_order.scss';

const Cart = () => {
  const location = useLocation();
  const history = useHistory();
  const { order } = location.state;

  const sucess_alert = () => {
    swal('Order Confirmed', '', 'success');
  };

  const fail_alert = () => {
    swal({
      title: 'Order Failed',
      text: 'Order Failed due to the unsuccessful transaction',
      icon: 'error',
      button: 'Back to Cart',
    }).then(() => {
      history.push('/checkout');
    });
  };

  const handleCancel = () => {
    const orderDetails = {
      orderID: order.id,
      isConfirmed: false,
    };

    cancelOrder(orderDetails).then(({ data }) => {
      if (data.status) {
        history.push('/OrderDetails');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    });
  };

  return (
    <div>
      <Header />
      <MyJumbotron
        title="My orders"
        route={[
          { title: 'Home', to: '/' },
          { title: 'Store', to: '/dashboard' },
          { title: 'My orders', to: '/OrderDetails' },
          { title: 'Details', isActive: true },
        ]}
      />
      <Container>
        <Card>
          <div>
            <div className="m-3 p-2">Details</div>
            <div className="m-2">
              <Card>
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="float-left track_my_order p-2">
                        {order['productIDs'].map((product, i) => (
                          <div className="d-flex justify-content-left">
                            <div>
                              <img
                                src={product['productImage']}
                                width="100px"
                              />
                            </div>

                            <div className="p-2">
                              <div className="oderer_title">
                                {product['productName']}
                              </div>
                              <div>
                                <span className="text-muted">
                                  Type : {order['vendorID'].vendorType}
                                </span>
                              </div>
                              <div>
                                <span className="text-muted">
                                  Vendor :{order['vendorID'].vendorName}
                                </span>
                              </div>
                              <div>
                                <span className="text-muted">
                                  Quantity : {order['quantities'][i]}
                                </span>
                              </div>
                              <div>
                                <b>Price : &#8377; {order['netPrice'][i]}</b>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* <div className="d-flex my-5 justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <img src="./../../icons/order_processed.svg" width="40px" />
                            <div className="m-2">
                              <h6 className="font-weight-bold">Delivered on</h6>

                              <label className="delivered_address">
                                {item.confirmationDate ? new Date(item.confirmationDate).toLocaleDateString() : "-"}
                              </label>
                            </div>
                          </div>
                        </div> */}

                        <div className="d-flex my-5 justify-content-between align-items-center">
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="float-right p-3 ">
                        <TrackCard2
                          title="Ordered"
                          date={moment(order['createdAt']).format('DD-MM-YYYY')}
                          // trackActiveDot={
                          //   order.createdAt !== null ? true : false
                          // }
                          trackActiveDot={true}
                        />
                        <TrackCard2
                          title="Packed"
                          date={moment(order['confirmationDate']).format(
                            'DD-MM-YYYY'
                          )}
                          date=""
                          trackActiveDot={
                            order['confirmationDate'] !== null ? true : false
                          }
                          // trackActiveDot={false}
                        />
                        <TrackCard2
                          title="Shipped"
                          date={moment(order['dispatchedDate']).format(
                            'DD-MM-YYYY'
                          )}
                          trackActiveDot={
                            order['dispatchedDate'] !== null ? true : false
                          }
                          // trackActiveDot={false}
                        />
                        <TrackCard2
                          title="Delivered "
                          date={moment(order['deliveredDate']).format(
                            'DD-MM-YYYY'
                          )}
                          trackActiveDot={
                            order['deliveredDate'] !== null ? true : false
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bottom_container">
                  <div className="left-block border rounded px-2 py-1">
                    <div className="address-title" >
                      <span><img src="./../../icons/delivered_address.svg" alt="" width="30px" /></span>
                      <span><h5 className="font-weight-bold">
                        Delivery Address
                    </h5></span>
                    </div>
                    
                    <div className="address">
                      <label className="delivered_address">
                        {order.userID.address.doorNo},
                        {order.userID.address.street},{' '}
                        {order.userID.address.building},{' '}
                        {order.userID.address.city}{' '}
                        {order.userID.address.zip},{' '}
                        {order.userID.address.state}
                    </label>
                    </div>
                  </div>
                      <div className="invoice border rounded px-2 py-1">
                        <div className="r1">
                          <div className="invoice-fields">Item Total</div>
                          <div className="invoice-values">
                            &#x20B9;{' '}
                            {order?.finalTotal - order?.shippingCharges}
                          </div>
                        </div>
                        <div className="r1">
                          <div className="invoice-fields-light">
                            Shipping Charges
                          </div>
                          <div className="invoice-values">
                            &#x20B9; {order?.shippingCharges}
                          </div>
                        </div>
                        <hr />
                        <div className="r2">
                          <div className="invoice-fields">
                            <span>BILL TOTAL: </span> &#x20B9;{' '}
                            {order?.finalTotal}
                          </div>
                        </div>
                      </div>
                  </div>
                  {/* <div className="text-center mb-3">
                    <Button variant="danger">
                      Cancel this Order
                    </Button>
                  </div> */}
                </div>
                <div className="d-flex justify-content-center mb-3">
                  <Button variant="outline-primary">
                    <img
                      className="mr-2"
                      src="./../../icons/star.svg"
                      width="25px"
                    />
                    Rate & Review Product
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="ml-3"
                    onClick={fail_alert}
                  >
                    <img
                      className="mr-2"
                      src="./../../icons/star.svg"
                      width="25px"
                    />
                    Download Invoice
                  </Button>
                  {order.orderStatus !== 'confirm' &&
                  order.orderStatus !== 'completed' &&
                  order.orderStatus !== 'delivered' &&
                  order.orderStatus !== 'cancelled' ? (
                    <Button
                      onClick={handleCancel}
                      className="ml-3"
                      variant="danger"
                    >
                      Cancel this Order
                    </Button>
                  ) : (
                    ''
                  )}
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
