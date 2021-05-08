import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
// import StoreCard from "./../components/StoreCard.jsx";
import ProductCard from "../components/ProductCard";

const Products = ({ stores }) => {

  const [state,setState] = useState({currentPage: 1,itemsPerPage: 6});

  const {currentPage, itemsPerPage} = state;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = stores.slice(firstIndex,lastIndex);

  const pgNumbers = [];

  for (let i = 1; i <= Math.ceil(stores.length / itemsPerPage); i++) {
    pgNumbers.push(i);
  }

  function handleClick(e) {
    setState(state => {
      return {
        ...state,
        currentPage: Number(e.target.id)
      }
    })
  }

  function handleNext() {
    setState(state => {
      return {
        ...state,
        currentPage: currentPage == lastIndex  ? 1 : currentPage+1
      }
    })
  }

  function handlePrev() {
    setState(state => {
      return {
        ...state,
        currentPage: currentPage  == 1 ? lastIndex : currentPage-1
      }
    })
  }

  const displayPageNumbers = pgNumbers.map(pgnum => {
    return (
      <li className = "page-link"  key = {pgnum} id={pgnum} onClick = {handleClick}>
        {pgnum}
      </li>
    );
  });

  console.log('hey items:',currentItems.length);
  console.log('hey products:',stores.length);

  return (
    <div className="products_container">
      <h5 className="text-primary text-center mt-5">Top Products</h5>
      <Nav className="justify-content-center mt-5" variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Featured Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">New Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Top Selling</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="row mt-5 mb-5">
        
        {currentItems.map((store, i) => (
          <ProductCard product={store} vendor={store["vendorID"]} id={store["vendorID"].id} />
        ))}
      </div>
      <nav aria-label="Page navigation example justify-content-center">
        <ul className ="pagination">
          <li className="page-link" >Prev</li>
          {displayPageNumbers}
          <li className="page-link" onClick={handleNext}>Next</li>
        </ul>
    </nav>
    </div>
  );
};

export default Products;
