import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { getNewProducts } from '../../ApiService';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#F67F2A',
    },
  },
}));

const NewProducts = () => {
  useEffect(() => {
    getNewProducts().then(({ data }) => setNewProds(data.newProducts));
  }, []);

  const [newProds, setNewProds] = useState([]);
  const [state, setState] = useState({ currentPage: 1, itemsPerPage: 6 });
  const { currentPage, itemsPerPage } = state;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = newProds.slice(firstIndex, lastIndex);

  const pgNumbers = [];

  for (let i = 1; i <= Math.ceil(newProds.length / itemsPerPage); i++) {
    pgNumbers.push(i);
  }

  function handleClick(e, val) {
    setState((state) => {
      return {
        ...state,
        currentPage: val,
      };
    });
  }

  const classes = useStyles();

  return (
    <div>
      <div className="row mt-5 mb-5">
        {currentItems.map((prod, i) => (
          <ProductCard
            product={prod}
            vendor={prod['vendorID']}
            id={prod['vendorID']?.id}
          />
        ))}
      </div>
      <div className="pagination ">
        <Pagination
          classes={{ ul: classes.ul }}
          count={pgNumbers.length}
          page={currentPage}
          variant="outlined"
          onChange={handleClick}
          size="large"
        />
      </div>
    </div>
  );
};

export default NewProducts;
