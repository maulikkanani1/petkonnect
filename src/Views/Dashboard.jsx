import React, { useEffect, useState } from 'react';
import { GetallStores } from '../ApiService';
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Header from './../components/Header.jsx';
import Footer from './../components/footer.jsx';
import StoreCard from './../components/StoreCard.jsx';
import CategoryCard from './../components/CategoryCard.jsx';
import BrandCard from './../components/BrandCard.jsx';
import Products from './../components/Products.jsx';
import Slider from './../components/Slider.jsx';

const DashBoard = (props) => {
  console.log(props);
  const history = useHistory();
  const [stores, setStores] = useState([]);

  const categories = [
    {
      name: 'Dog',
      imageUrl: './../../img/dog_img_4.png',
    },
    {
      name: 'Cat',
      imageUrl: './../../img/cat_img_1.png',
    },
    {
      name: 'Birds',
      imageUrl: './../../img/bird_img_1.png',
    },
    {
      name: 'Fish',
      imageUrl: './../../img/fish_2.png',
    },
    {
      name: 'Turtle',
      imageUrl: './../../img/turtle_1.png',
    },
    {
      name: 'Small Pets',
      imageUrl: './../../img/small_pets_1.png',
    },
  ];

  const brands = [
    {
      name: 'Wild Earth',
      imageUrl: './../../img/brand_img_1.png',
    },
    {
      name: 'Pedigree',
      imageUrl: './../../img/brand_img_2.png',
    },
    {
      name: 'Royal Canin',
      imageUrl: './../../img/brand_img_3.png',
    },
    {
      name: 'Big Heart',
      imageUrl: './../../img/brand_img_4.png',
    },
  ];

  const handleViewProducts = () => {
    history.push('/Products');
  };

  useEffect(() => {
    GetallStores().then(({ data }) => {
      setStores(data.vendors);
    });
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <Container>
        <h5 className="text-primary text-center mt-5">Shop For My Pet</h5>
        <div className="row mt-5 ">
          <div className="col-12 category_container">
            {categories.map((category) => (
              <CategoryCard category={category} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button
            className="px-4"
            onClick={handleViewProducts}
            variant="secondary"
          >
            View all Products
          </Button>
        </div>
        <h5 className="text-primary text-center mt-5">Shops Near for You</h5>
        <div className="row mt-5">
          {stores.map((store, i) => (
            <StoreCard store={store} />
          ))}
        </div>
      </Container>

      <div className="brand_bg p-2 mt-5 ">
        <h5 className="text-primary text-center mt-5">Best Selling Brands</h5>
        <div className="row my-5 mx-0">
          <div className="col-12 brand_container">
            {brands.map((brand) => (
              <BrandCard brand={brand} />
            ))}
          </div>
        </div>
      </div>
      <Container>
        <Products />
      </Container>
      <Footer />
    </div>
  );
};

export default DashBoard;
