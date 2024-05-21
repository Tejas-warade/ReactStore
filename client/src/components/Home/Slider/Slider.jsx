import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import Banner3 from "../Banner/Banner3";
import Banner4 from "../Banner/Banner4";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Banner />
        </Carousel.Item>
        <Carousel.Item>
          <Banner2 />
        </Carousel.Item>
        <Carousel.Item>
          <Banner3 />
        </Carousel.Item>
        <Carousel.Item>
          <Banner4 />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
