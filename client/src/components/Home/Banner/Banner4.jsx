import React from "react";
import "./Banner4.scss";
import BannerImg from "../../../assets/banner4.png";
import { useNavigate } from "react-router-dom";

const Banner4 = () => {
  const navigate = useNavigate();
  
  return (
    <div className="hero-banner4">
      <div className="content">
        <div className="text-content">
          <h1>
            Tablets,
            <br /> Elevate <br /> Experience.
          </h1>
          <p>Built for Work, Designed for Ease</p>
          <div className="ctas">
            <div className="banner-cta v1">
              <a href="https://www.consumerreports.org/electronics-computers/tablets/buying-guide/">
                Read More
              </a>
            </div>
            <div className="banner-cta v2"onClick={() => navigate("/category/8")}>Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner4;
