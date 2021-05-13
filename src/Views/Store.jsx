import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Tab, Nav, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '../scss/pagination.scss';
import '../scss/stores.scss';
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
import geolocation from '../assets/location.png';
import shopLogo from '../assets/shop_logo.png';
import favourite from '../assets/favourite.png';
import call from '../assets/call.png';
import cart from '../assets/shopping-cart.png';
import star from '../assets/star.png';
import offer from '../assets/offer.png';


const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#F67F2A"
    }
  }
}));

const Store = () => {
  const location = useLocation();
  const history = useHistory();

  const vendorId = location.state?.vendorId;

  const [products, setProducts] = useState([]);
  const [vendor, setVendor] = useState({});
  const [services, setServices] = useState([]);

  console.log('Ser', vendor);

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
  const [state, setState] = useState({ currentPage: 1, itemsPerPage: 6 });

  const { currentPage, itemsPerPage } = state;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);

  const pgNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pgNumbers.push(i);
  }

  function handleClick(e,val) {
    setState((state) => {
      return {
        ...state,
        currentPage: val ,
      };
    });
  }


  const classes = useStyles();


  return (
    <div className="product_details">
      <Header />
      <div className="outside-container">
        <div className="favorites small-text">
          <span className="logo">
            <img src={favourite} />
          </span>
          Add to Favourites
        </div>
        <div className="store-img-wrapper rounded-circle">
          <img
            src={vendor.storeImage}
            alt=""
            className="rounded-circle store-img"
          />
        </div>
        <div className="shop-details">
          <div className="store-name">{vendor.storeName}</div>
          <div className="store-location small-text">
            <span className="logo">
              <img src={geolocation} />
            </span>
            {vendor.vendorBuilding}, {vendor.vendorCity}
          </div>
          <div className="store-contact small-text">
            <span className="logo">
              <img src={call} />
            </span>
            {vendor.storeContactNo}
          </div>
          <div className="bottom-text small-text">
            <span className="logo">
              <img src={cart} />
            </span>
            <span className="middle">Food,Pet Product </span>
            <span className="vertical"></span>
            <span className="logo">
              <img src={star} />
            </span>
            <span className="middle">4.5 Ratings</span>
            <span className="vertical"></span>
            <span className="logo">
              <img src={offer} />
            </span>
            <span className="middle">50% OFF</span>
            <span className="offer-text">on first 3 products</span>
          </div>
        </div>
      </div>
      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
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
              {currentItems.map((product) => (
                <ProductCard product={product} vendor={vendor} id={vendorId} />
              ))}
            </div>
            <div className="pagination">
              <Pagination classes={{ ul: classes.ul }} count={pgNumbers.length} page={currentPage} variant="outlined" onChange={handleClick} size="large"/>
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

// {/* <Card className="w-100 ">
// <Card.Body className="d-flex">
//   <div className="w-50">
// <img src={vendor.storeImage} className="product_img" />
//     {/* <h6>Offers Available</h6>
//     <ul className="list pl-3">
//       <li className="list_item">
//         Special 50% Offer with ABC Bank Credit Card
//       </li>
//       <li className="list_item">
//         Cashback 20% on the payment of Paytm
//       </li>
//       <li className="list_item">
//         Free Coupon Voucher for purchase of 2 items
//       </li>
//     </ul> */}
//   </div>
//   <div className="product_info p-3 w-50">
//     <h4 className="text-primary">{vendor.storeName}</h4>
//     <br />
//     <h6 className="text-dark  mt-2">
//       Store Phone Number : {vendor.vendorPhonenumber}
//     </h6>
//     <h6 className="text-dark  mt-2">{vendor.storeContactNo}</h6>
//     <h6 className="text-dark  mt-2">{vendor.storeEmail}</h6>
//     <h6 className="text-dark  mt-2">{vendor.storeAddress}</h6>

//     <div className="d-flex w-100 mt-5">
//       <Button variant="outline-primary">
//         <img
//           className="mr-2"
//           src="./../../icons/star.svg"
//           width="25px"
//         />
//         Rate & Review Shop
//       </Button>
//     </div>
//   </div>
// </Card.Body>
// </Card> */}
