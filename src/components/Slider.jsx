import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <div className="main_silder_contanier">
      <AwesomeSlider>
        <div data-src="./../../img/banner_1.png" />
        <div data-src="./../../img/banner_2.png" />
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
