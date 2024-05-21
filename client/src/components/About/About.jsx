import React from "react";
import "./About.scss";
import aboutImg from "../../assets/about.jpg";
import { useNavigate } from "react-router-dom";
import Accordian from "./Accordian/Accordian";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="about-container">
        <div className="left">
          <h1 className="heading ">About Us</h1>
          <div className="desc">
            <p>
              Welcome to our online store, where technology meets convenience!
              At ReactStore, we pride ourselves on offering a diverse selection
              of cutting-edge gadgets and accessories to enhance every aspect of
              your digital lifestyle.
            </p>
            <p>
              Whether you're in search of the latest smartphones boasting
              state-of-the-art features, sleek and stylish mobiles to stay
              connected on the go, sophisticated watches blending fashion with
              functionality, immersive headphones and earphones for your music
              pleasure, or powerful speakers to elevate your entertainment
              experience, we have you covered.
            </p>
            <p>
              With a curated collection spanning smartphones, mobiles, watches,
              headphones, earphones, speakers, and more, we strive to provide
              our customers with the latest trends and innovations in
              technology. Explore our catalog and discover the perfect devices
              to complement your lifestyle, all delivered with exceptional
              quality and service.
            </p>
          </div>
          <button className="shop-btn" onClick={() => navigate("/")}>
            Shop Now
          </button>
        </div>
        <div className="right">
          <img src={aboutImg} alt="about" />
        </div>
      </div>
      <Accordian />
    </>
  );
};

export default About;
