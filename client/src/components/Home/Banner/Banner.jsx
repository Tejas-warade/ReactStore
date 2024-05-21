import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner1.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>
            Shop Smart, <br /> Save Big!
          </h1>
          <p>Discover exclusive deals and choices</p>
          <div className="ctas">
            <div className="banner-cta v1"><a href="https://www.mi.com/in/product/xiaomi-14/">Read More</a></div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/product/33")}
            >
              Shop Now
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
