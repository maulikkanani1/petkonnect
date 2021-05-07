import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Tab, Nav } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import {
  GetVendorProduct,
  GetAllVendorProduct,
  viewServices,
} from '../ApiService';
import Header from './../components/Header.jsx';
import Slider from './../components/Slider.jsx';
import ProductCard from './../components/ProductCard.jsx';
import CartSide from '../components/CartSide';
import MyJumbotron from '../components/MyJumbotron';
import Footer from '../components/footer.jsx';

const Store = () => {
  const location = useLocation();
  const history = useHistory();

  const vendorId = location.state?.vendorId;

  const [products, setProducts] = useState([]);
  const [vendor, setVendor] = useState({});
  const [services, setServices] = useState([]);

  console.log('Ser', services);

  useEffect(() => {
    if (vendorId) {
      GetVendorProduct(vendorId).then(({ data }) => {
        setProducts(data.products);
        setVendor(data.vendor);
      });
      viewServices(vendorId).then(({ data }) => setServices(data.service));
    } else {
      GetAllVendorProduct().then(({ data }) => {
        const productArr = [];
        data.vendors.map((item) =>
          item.products.map((innerItem) => productArr.push(innerItem))
        );
        setProducts(productArr);
      });
    }
  }, [vendorId]);

  return (
    <div className="product_details">
      <Header />

      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <Card className="w-100 ">
              <Card.Body className="d-flex">
                <div className="w-50">
                  <img src={vendor.storeImage} className="product_img" />
                  {/* <h6>Offers Available</h6>
                  <ul className="list pl-3">
                    <li className="list_item">
                      Special 50% Offer with ABC Bank Credit Card
                    </li>
                    <li className="list_item">
                      Cashback 20% on the payment of Paytm
                    </li>
                    <li className="list_item">
                      Free Coupon Voucher for purchase of 2 items
                    </li>
                  </ul> */}
                </div>
                <div className="product_info p-3 w-50">
                  <h4 className="text-primary">{vendor.storeName}</h4>
                  <br />
                  <h6 className="text-dark  mt-2">
                    Store Phone Number : {vendor.vendorPhonenumber}
                  </h6>
                  <h6 className="text-dark  mt-2">{vendor.storeContactNo}</h6>
                  <h6 className="text-dark  mt-2">{vendor.storeEmail}</h6>
                  <h6 className="text-dark  mt-2">{vendor.storeAddress}</h6>

                  <div className="d-flex w-100 mt-5">
                    <Button variant="outline-primary">
                      <img
                        className="mr-2"
                        src="./../../icons/star.svg"
                        width="25px"
                      />
                      Rate & Review Shop
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Tab.Container id="left-tabs-example" defaultActiveKey="reviews">
              <Card className="mt-3">
                <Card.Header className="bg-transparent border-0">
                  <Nav variant="tab">
                    <Nav.Item>
                      <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="reviews">
                      <h6>No Reviews yet</h6>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
            <h2 className="my-3">Products</h2>
            <div className="row mb-4 mt-3">
              {products.map((product) => (
                <ProductCard product={product} vendor={vendor} id={vendorId} />
              ))}
            </div>
          </div>
          <CartSide />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Store;
