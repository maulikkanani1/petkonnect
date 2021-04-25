import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Table, Form } from 'react-bootstrap';
import {
  view_cart,
  place_order,
  remove_card_item,
  GetUserData,
  add_to_cart,
} from '../ApiService';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Header from '../components/Header.jsx';
import Footer from '../components/footer.jsx';
import MyJumbotron from '../components/MyJumbotron';
import EditAddress from '../components/Model/Edit_address';
import './../scss/checkout.scss';

const Cart = () => {
  const history = useHistory();
  const [cartDate, setCartDate] = useState([]);
  const [shipping, setshipping] = useState(0);
  const [subtotal, setsubtotal] = useState(0);
  const [total, settotal] = useState(0);
  const [userData, setuserData] = useState();
  const [quantity, setQuantity] = useState();
  const [editAddress, seteditAddress] = useState(false);

  const close_edit = () => {
    seteditAddress(!editAddress);
  };

  useEffect(() => {
    View_cart();
    GetUserData().then(({ data }) => {
      setuserData(data);
    });
  }, []);

  const View_cart = () => {
    view_cart().then(({ data }) => {
      setCartDate(data.cart);
      let shippings = 0;
      let totals = 0;
      data['cart'].map((res) => {
        shippings = shippings + parseInt(res['shippingCharges']);
        totals = totals + parseInt(res['subTotal'] - res['shippingCharges']);
      });
      let all_total = shippings + totals;
      setshipping(shippings);
      setsubtotal(totals);
      settotal(all_total);
    });
  };

  const sucess_alert = () => {
    swal('Order Confirmed', '', 'success');
  };

  const remove_item = (id) => {
    let item = [];
    item.push(id);
    remove_card_item(item)
      .then(() => {
        View_cart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCart = (quantity, productID, vendorID) => {
    add_to_cart({
      productID,
      vendorID,
      quantity,
    }).then(() => {
      View_cart();
    });
  };
  return (
    <div>
      <Header />
      <MyJumbotron
        title="Your Cart"
        route={[
          { title: 'Home', to: '/' },
          { title: 'Store', to: '/dashboard' },
          { title: 'Your Cart', isActive: true },
        ]}
      />
      <Container>
        {cartDate && cartDate.length > 0 ? (
          <>
            <Card>
              <Card.Body>
                <Table className="cart_tbl">
                  <thead className="bg-secondary text-dark ">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartDate.map((products) => {
                      return products['products'].map((product, i) => {
                        const {
                          productImage,
                          productName,
                          gstInclusivePrice,
                          id,
                        } = product;
                        return (
                          <tr>
                            <td>
                              <img src={productImage[0]} />
                              <span className="product_name ml-2">
                                {productName}
                              </span>
                            </td>
                            <td>
                              <i className="fas fa-rupee-sign mr-1 f-18"></i>
                              {gstInclusivePrice}
                            </td>
                            <td>
                              <i className="fas fa-minus-circle text-secondary mr-4"></i>
                              <span className="mr-4">
                                {products.quantities[i]}
                              </span>
                              <i className="fas fa-plus-circle text-secondary "></i>
                            </td>
                            <td>
                              <i className="fas fa-rupee-sign mr-1 f-18"></i>
                              {gstInclusivePrice * products.quantities[i]}
                              <i
                                className="far fa-times-circle text-danger ml-3 cursor-pointer"
                                onClick={() => remove_item(id)}
                              ></i>
                            </td>
                          </tr>
                        );
                      });
                    })}
                  </tbody>
                </Table>

                <div className="row">
                  <div className="col-lg-3 col-md-3">
                    <Form.Control type="text" placeholder="Enter Coupon Code" />
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <Button variant="secondary">Apply Coupon</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-3 mb-5 cart_summary">
              <Card.Header>
                <h5 className="font-weight-bold">Cart Summary</h5>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="font-weight-bold">Shipping</h5>
                      </div>
                      <div className="col-md-6">
                        {userData ? (
                          <span className="address">
                            {userData?.address?.doorNo},
                            {userData?.address?.street},{' '}
                            {userData?.address?.building},{' '}
                            {userData?.address?.city} {userData?.address?.zip},{' '}
                            {userData?.address?.state}
                          </span>
                        ) : null}

                        <a
                          className="mt-3 d-block text-primary"
                          onClick={close_edit}
                          href="#"
                        >
                          Change Address
                        </a>
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
                          <i className="fas fa-rupee-sign mr-1 f-16"></i>
                          {subtotal}
                        </h5>
                        <h5 className="amount">
                          <i className="fas fa-rupee-sign mr-1 f-16"></i>
                          {shipping}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent">
                <div className="row mb-3">
                  <div className="offset-6 col-md-6">
                    <div className="row">
                      <div className="col-md-6 text-right">
                        <h5 className="font-weight-bold mb-3">Total</h5>
                      </div>
                      <div className="col-md-4 text-right">
                        <h5 className="amount">
                          <i className="fas fa-rupee-sign mr-1 f-16"></i>
                          {total}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex w-100 mt-3 justify-content-center">
                    <Button
                      className="cart_btn mr-3"
                      variant="outline-dark"
                      onClick={() => {
                        history.push('/');
                      }}
                    >
                      Continue Shopping
                    </Button>

                    <Button
                      className="cart_btn"
                      onClick={() => {
                        place_order().then(({ data }) => {
                          if (data.status) {
                            sucess_alert();
                          }
                          setTimeout(() => {
                            history.push('/dashboard');
                          }, 2000);
                        });
                      }}
                      variant="secondary"
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </>
        ) : (
          <div className="text-center">
            <Button
              className="cart_btn mr-3 "
              variant="outline-dark"
              onClick={() => {
                history.push('/');
              }}
              variant="secondary"
            >
              Continue Shopping
            </Button>
            <h2 className="mt-4 text-center">Your Cart is empty.</h2>
          </div>
        )}
      </Container>

      <Footer />
      <EditAddress
        status={editAddress}
        close={close_edit}
        address={userData?.address}
      />
    </div>
  );
};

export default Cart;
