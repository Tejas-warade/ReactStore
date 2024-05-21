import React from "react";
import "./Banner3.scss";
import BannerImg from "../../../assets/banner3.png";
import { useNavigate } from "react-router-dom";

const Banner3 = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-banner3">
      <div className="content">
        <div className="text-content">
          <h1>
            Ignite Your <br /> Mobile <br /> Experience.
          </h1>
          <p>Elevate Your Smartphone Experience</p>
          <div className="ctas">
            <div className="banner-cta v1">
              <a href="https://www.croma.com/lp-buying-guide/mobile-phone">
                Read More
              </a>
            </div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/category/6")}
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

export default Banner3;
