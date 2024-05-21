import React from "react";
import "./Banner2.scss";
import BannerImg from "../../../assets/banner2.png";
import { useNavigate } from "react-router-dom";

const Banner2 = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-banner2">
      <div className="content">
        <div className="text-content">
          <h1>
            Smart TV,
            <br /> Smarter <br /> Choices.
          </h1>
          <p>Experience Stunning 4K with Our Latest Smart TV Selection</p>
          <div className="ctas">
            <div className="banner-cta v1">
              <a href="https://economictimes.indiatimes.com/top-trending-products/buying-guide/tv-buying-guide-how-to-choose-the-right-tv-for-the-best-entertainment/articleshow/102162581.cms?from=mdr">
                Read More
              </a>
            </div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/category/7")}
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

export default Banner2;
