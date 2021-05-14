import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
// import StoreCard from "./../components/StoreCard.jsx";
import ProductCard from '../components/ProductCard';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import '../scss/pagination.scss'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FeaturedProducts from './Product Tabs/FeaturedProducts';
import NewProducts from './Product Tabs/NewProducts';
import TopSellingProducts from './Product Tabs/TopSellingProducts'

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#F67F2A"
    }
  }
}));

const Products = ({ stores,featuredProducts,newProducts, topSelling}) => {
  const [state, setState] = useState({ currentPage: 1, itemsPerPage: 6 });
  const [key,setKey] = useState('home');

  const { currentPage, itemsPerPage } = state;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = stores.slice(firstIndex, lastIndex);

  const pgNumbers = [];

  for (let i = 1; i <= Math.ceil(stores.length / itemsPerPage); i++) {
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



  console.log('hey items:', currentItems.length);
  console.log('hey products:', stores);
  const classes = useStyles();
  return (
    <div className="products_container">
      <h5 className="text-primary text-center mt-5">Top Products</h5>
      <Tabs
      className="justify-content-center mt-5"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      variant='pills'
    >
      <Tab eventKey="home" title="Featured Products">
        <div>
          <FeaturedProducts featuredProds={featuredProducts}/>
        </div>
      </Tab>
      <Tab eventKey="profile" title="New Products">
        <NewProducts newProds={newProducts}/>
      </Tab>
      <Tab eventKey="contact" title="Top Selling" >
        <TopSellingProducts topSelling={topSelling}/>
      </Tab>
    </Tabs>
      {/* <nav aria-label="Page navigation example justify-content-center">
        <ul className="pagination">
          <li
            className="page-link"
            style={{ cursor: 'pointer' }}
            onClick={handlePrev}
          >
            Prev
          </li>
          {displayPageNumbers}
          <li
            className="page-link"
            style={{ cursor: 'pointer' }}
            onClick={handleNext}
          >
            Next
          </li>
        </ul>
      </nav> */}
      {/* <div className="pagination">
        <Pagination classes={{ ul: classes.ul }} count={pgNumbers.length} page={currentPage} variant="outlined" onChange={handleClick} size="large"/>
      </div> */}
    </div>
  );
};

export default Products;
