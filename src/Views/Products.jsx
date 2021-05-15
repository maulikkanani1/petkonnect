import React, { useEffect, useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '../scss/pagination.scss'

import {
  get_all_products,
  get_vendorbased_product,
  get_all_products_cat,
  get_brand_based_products,
  getAllProducts,
  searchType,
} from '../ApiService';
import Header from './../components/Header.jsx';
import Slider from './../components/Slider.jsx';
import ProductCard from './../components/ProductCard.jsx';
import CartSide from '../components/CartSide';
import Dashboard from '../Views/Dashboard';


const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#F67F2A",
    }
  }
}));

const Products = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const vendorId = params.get('vendorId');
  const category = params.get('category');
  const product_category = params.get('product_category');
  const brand = params.get('brand');
  const search = params.get('search');
  console.log(search);
  console.log(product_category);
  const [products, setProducts] = useState([]);
  const [header, setHeader] = useState('');
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
    } else if (search) {
      setHeader(search);
      searchType({ search }).then(({ data }) => setfilterData(data.products));
    } else {
      getAllProducts().then(({ data }) => {
        console.log('dddd',data)
        setProducts(data.products);
        setfilterData(data.products);
      });
    }
  }, [vendorId, category, product_category, brand, search]);

  // const searchText = (search, keys) => {
  //   search = search.toLowerCase();
  //   if (!search || search === '') {
  //     setfilterData(products);
  //   } else {
  //     const filteredName = products.filter((item) =>
  //       keys.find((inneritem) =>
  //         String(item[inneritem]).toLowerCase().match(search)
  //       )
  //     );
  //     setfilterData(filteredName);
  //   }
  // };
  const [state, setState] = useState({ currentPage: 1, itemsPerPage: 6 });

  const { currentPage, itemsPerPage } = state;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filterData.slice(firstIndex, lastIndex);

  const pgNumbers = [];

  for (let i = 1; i <= Math.ceil(filterData.length / itemsPerPage); i++) {
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
    <div className="product_listing_page">
      <Header />
      <Slider />

      <Container>
        {/* <div>
          <Form.Control
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
        </div> */}
        <Card>
          <Card.Header>
            <h5 className="mb-0">{header}</h5>
          </Card.Header>
        </Card>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12"></div>

              {currentItems ? (
                currentItems.map((product) => (
                  
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
        <div className="pagination">
            <Pagination classes={{ ul: classes.ul }} count={pgNumbers.length} page={currentPage} variant="outlined" onChange={handleClick} size="large"/>
          </div>
      </Container>
    </div>
  );
};

export default Products;
