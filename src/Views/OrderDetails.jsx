import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Table, Form } from 'react-bootstrap';
import { user_oerder_history, get_order_status } from '../ApiService';

import { useHistory, useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/footer.jsx';
import MyJumbotron from '../components/MyJumbotron';
import OrderStatus from '../components/OrderStatus';
import './../scss/myorders.scss';
import './../scss/track_order.scss';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '.././scss/orderspagination.scss';

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#F67F2A",
    }
  }
}));

const Myorder = () => {
  const history = useHistory();
  const [OrderData, setOrderData] = useState([]);
  const params = useParams();
  const [status, setstatus] = useState('');

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

  console.log('OD', OrderData);
  const get_status = (order) => {
    history.push(`/TrackOrder/${order.id}`, { order });
  };

  const [state, setState] = useState({ currentPage: 1, itemsPerPage: 5 });

  const { currentPage, itemsPerPage } = state;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = OrderData.slice(firstIndex, lastIndex);

  const pgNumbers = [];

  for (let i = 1; i <= Math.ceil(OrderData.length / itemsPerPage); i++) {
    pgNumbers.push(i);
  }

  function handleClick(e,val) {
    setState((state) => {
      return {
        ...state,
        currentPage: val,
      };
    });
  }

  const classes = useStyles();

  return (
    <div>
      <Header />
      <MyJumbotron
        title="My Orders"
        route={[
          { title: 'Home', to: '/' },
          { title: 'Store', to: '/dashboard' },
          { title: 'My orders', isActive: true },
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
        <div style={{ cursor: 'pointer' }}>
          <div className="m-3 p-2">My Orders</div>
          {currentItems.length ? (
            currentItems.map((order) => (
              <div className="card-wrapper">
                <div className="card">
                  <div className="row">
                    <div className="order-status">
                      <h6>
                        {order.orderStatus.toUpperCase()}
                      </h6>
                    </div>
                    <div className="col-9">
                      <div className="top-container">
                        <img
                          src={order?.vendorID.storeImage}
                          alt=""
                          className="img-wrapper"
                        />
                        <div className="store-details">
                          <div className="order_title">
                            {order?.vendorID.storeName}
                          </div>
                          <div>
                            {/* <p className="small_text">
                              C-3 Street, New Jearsey
                            </p> */}
                            <p className="small_text">
                              {' '}
                              {new Date(order?.createdAt).toDateString()},{' '}
                              {new Date(order?.createdAt).toLocaleTimeString()}{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>       
                  </div>
                  <hr />
                  <div className="bottom-container">
                    <div className="first-half">
                      <div>
                        {order['productIDs'].map((product, idx) => {
                          const qty = order.quantities[idx];

                          return (
                            <>
                              <span className="product-qty border rounded px-2 py-1">
                                {product['productName']} x {qty}
                              </span>
                              &nbsp;
                            </>
                          );
                        })}
                      </div>
                      {/* <br /> */}
                      <div className="mt-2">
                        <button
                          onClick={() => get_status(order)}
                          className="btn btn-secondary track-btn"
                        >
                          TRACK ORDER
                        </button>
                        <button className="btn btn-outline-secondary track-btn">
                          {' '}
                          CANCEL
                        </button>
                      </div>
                    </div>
                    <div className="second-half px-3">
                      <span> Total: &#x20B9; {order?.finalTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>No Order details</h1>
          )}
        </div>
      </Card>
      <div className="pagination">
            <Pagination classes={{ ul: classes.ul }} count={pgNumbers.length} page={currentPage} variant="outlined" onChange={handleClick} size="large"/>
          </div>
      <Footer />
    </div>
  );
};

export default Myorder;
