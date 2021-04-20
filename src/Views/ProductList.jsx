import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";

import { get_all_products, get_vendorbased_product } from "../ApiService";
import Header from "../components/Header.jsx";
import Slider from "../components/Slider.jsx";
import ProductCard from "../components/ProductCard.jsx";
import CartSide from "../components/CartSide";

const Products = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const vendorId =  params.get('vendorId');
  const category = params.get('category');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (vendorId && category) {
        get_vendorbased_product(category,vendorId).then(( {data} ) => {
        setProducts(data.products);
      });
    } else if(category) {
        get_all_products(category).then(( {data} ) => {
        setProducts(data.products);
      }).catch((err)=>{
          console.log(err);
      });
    }
  }, [vendorId,category]);

  return (
    <div className="product_listing_page">
      <Header />
      <Slider />
      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <div className="row">
                <div className="col-md-6">
                <div className="filter_counts"> Showing 1–12 of 15 results </div>
                </div>
                <div className="col-md-2">
                    <div className="d-flex justify-content-center float-right">
                        <div className="card_icon">
                            <img src={'./../../icons/card_view_2.svg'}  />
                        </div>
                        <div>
                           <img src={'./../../icons/list_view_1.svg'}  />
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <select className="filter_options">
                        <option default>Sort by pouplarity</option>
                        <option>Sort by rate</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>
                  </div>

                  </div>
                  <div className="row p-3">

              {products ? products.map((product) => (
                <ProductCard product={product} id={vendorId} vendor={product['vendorID']} />
              )) : <h1 className="text-center m-5"> Products not found. </h1>}
                  </div>
          </div>
          <CartSide />
        </div>
      </Container>
    </div>
  );
};

export default Products;
