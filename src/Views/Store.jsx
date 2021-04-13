import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";

import { GetVendorProduct, GetAllVendorProduct } from "../ApiService";
import Header from "./../components/Header.jsx";
import Slider from "./../components/Slider.jsx";
import ProductCard from "./../components/ProductCard.jsx";
import CartSide from "../components/CartSide";

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
      <Slider />
      <Container>
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
    </div>
  );
};

export default Store;
