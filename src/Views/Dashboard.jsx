import React, { useEffect, useState } from "react";
import { GetallStores } from "../ApiService";
import { Container } from "react-bootstrap";
import Header from "./../components/Header.jsx";
import StoreCard from "./../components/StoreCard.jsx";
import CategoryCard from "./../components/CategoryCard.jsx";
import BrandCard from "./../components/BrandCard.jsx";
import Products from "./../components/Products.jsx";
import Slider from "./../components/Slider.jsx";

const DashBoard = () => {
  const [stores, setStores] = useState([]);
  const categories = [
    {
      name: "Dogs",
      imageUrl: "./../../img/dog_img_4.png",
    },
    {
      name: "Cats",
      imageUrl: "./../../img/cat_img_1.png",
    },
    {
      name: "Birds",
      imageUrl: "./../../img/bird_img_1.png",
    },
    {
      name: "Rabbits",
      imageUrl: "./../../img/rabbit_img_1.png",
    },
  ];

  const brands = [
    {
      name: "Wild Earth",
      imageUrl: "./../../img/brand_img_1.png",
    },
    {
      name: "Pedigree",
      imageUrl: "./../../img/brand_img_2.png",
    },
    {
      name: "Royal Canin",
      imageUrl: "./../../img/brand_img_3.png",
    },
    {
      name: "Big Heart",
      imageUrl: "./../../img/brand_img_4.png",
    },
  ];

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
        {/* shob by category */}
        <h5 className="text-primary text-center mt-5">Shop By Category</h5>
        <div className="row mt-5">
          <div className="col-12 category_container">
            {categories.map((category) => (
              <CategoryCard category={category} />
            ))}
          </div>
        </div>

        {/* Shop Recommended for You */}
        <h5 className="text-primary text-center mt-5">Shop Recommended for You</h5>
        <div className="row mt-5">
          {stores.map((store, i) => (
            <StoreCard store={store} />
          ))}
        </div>
      </Container>

      {/* Best Selling Brands */}
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
        <Products stores={stores} />
      </Container>
    </div>
  );
};

export default DashBoard;
