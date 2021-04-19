import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";

import { GetVendorProduct, GetAllVendorProduct } from "../ApiService";
import Header from "./../components/Header.jsx";
import Slider from "./../components/Slider.jsx";
import ProductCard from "./../components/ProductCard.jsx";
import CartSide from "../components/CartSide";
import MyJumbotron from "../components/MyJumbotron";
import Footer from "../components/footer.jsx";

const Store = () => {
  const location = useLocation();
  const history = useHistory();

  const vendorId = location.state?.vendorId;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (vendorId) {
      GetVendorProduct(vendorId).then(({ data }) => {
        setProducts(data.products);
      });
    } else {
      GetAllVendorProduct().then(({ data }) => {
        const productArr = [];
        data.vendors.map((item) => item.products.map((innerItem) => productArr.push(innerItem)));
        setProducts(productArr);
      });
    }
  }, [vendorId]);

  return (
    <div className="product_listing_page">
      <Header />
      
      <Container>
      <Card className="w-100  ">
              <Card.Body className="d-flex">
                <div className="w-50">
                  <img className="product_img" />
                  <h6>Store img</h6>
                  <br />
                  <br />
                  <br />
                  <h6>storeName</h6>
                  <ul className="list pl-3">
                    <li className="list_item">Phone number</li>
                    <li className="list_item">email</li>
                    <li className="list_item">Address</li>
                  </ul>
                </div>
                <div className="product_info p-3 w-50">
                  
                  
                  <small className="d-block mt-2"></small>
                  
                  <div className="total_contanier mt-4">
                    <label className="mr-5 mb-0"></label>
                    <h4 className="text-primary mb-0 total">
                
                    </h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <div className="row">
              {products.map((product) => (
                <ProductCard product={product} id={vendorId} />
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
