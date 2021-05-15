import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FeaturedProducts from './Product Tabs/FeaturedProducts';
import NewProducts from './Product Tabs/NewProducts';
import TopSellingProducts from './Product Tabs/TopSellingProducts';

const Products = () => {
  const [key, setKey] = useState('home');

  return (
    <div className="products_container">
      <h5 className="text-primary text-center mt-5">Top Products</h5>
      <Tabs
        className="justify-content-center mt-5"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        variant="pills"
      >
        <Tab eventKey="home" title="Featured Products">
          <div>
            <FeaturedProducts />
          </div>
        </Tab>
        <Tab eventKey="profile" title="New Products">
          <NewProducts />
        </Tab>
        <Tab eventKey="contact" title="Top Selling">
          <TopSellingProducts />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Products;
