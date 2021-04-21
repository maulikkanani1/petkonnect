import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import {
  get_all_products,
  get_vendorbased_product,
  get_all_products_cat,
  get_brand_based_products,
  getAllProducts,
} from '../ApiService';
import Header from './../components/Header.jsx';
import Slider from './../components/Slider.jsx';
import ProductCard from './../components/ProductCard.jsx';
import CartSide from '../components/CartSide';

const Products = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const vendorId = params.get('vendorId');
  const category = params.get('category');
  const product_category = params.get('product_category');
  const brand = params.get('brand');
  const [products, setProducts] = useState([]);
  const [filterData, setfilterData] = useState([]);

  useEffect(() => {
    if (vendorId && category) {
      get_vendorbased_product(category, vendorId).then(({ data }) => {
        setProducts(data.products);
        setfilterData(data.products);
      });
    } else if (category) {
      get_all_products(category)
        .then(({ data }) => {
          setProducts(data.products);
          setfilterData(data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (product_category) {
      get_all_products_cat(product_category)
        .then(({ data }) => {
          setProducts(data.products);
          setfilterData(data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (brand) {
      get_brand_based_products(brand)
        .then(({ data }) => {
          setProducts(data.products);
          setfilterData(data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getAllProducts().then(({ data }) => {
        setProducts(data.products);
        setfilterData(data.products);
      });
    }
  }, [vendorId, category, product_category, brand]);

  const searchText = (search, keys) => {
    search = search.toLowerCase();
    if (!search || search === '') {
      setfilterData(products);
    } else {
      const filteredName = products.filter((item) =>
        keys.find((inneritem) =>
          String(item[inneritem]).toLowerCase().match(search)
        )
      );
      setfilterData(filteredName);
    }
  };

  return (
    <div className="product_listing_page">
      <Header />
      <Slider />
      <input
        type="text"
        placeholder="Search Products"
        onChange={(e) =>
          searchText(e.target.value, [
            'productName',
            'productBrand',
            'petType',
            'productCategory',
          ])
        }
        className="inventory-Searchbox"
      />
      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12"></div>

              {filterData ? (
                filterData.map((product) => (
                  <ProductCard
                    product={product}
                    vendor={product['vendorID']}
                    id={vendorId}
                  />
                ))
              ) : (
                <h1 className="text-center m-5"> Products not found. </h1>
              )}
            </div>
          </div>
          <CartSide />
        </div>
      </Container>
    </div>
  );
};

export default Products;
