import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Category from "./CategoryList/CategoryList";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import BrandList from "./BrandList/BrandList";
import Slider from "./Slider/Slider"

const Home = () => {
  const {
    products,
    setProducts,
    categories,
    setCategories,
    brands,
    setBrands,
  } = useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
    getBrands();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  const getBrands = () => {
    fetchDataFromApi("/api/brands?populate=*").then((res) => {
      setBrands(res);
      //   console.log(res);
    });
  };

  return (
    <div>
      <Slider/>
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <BrandList brands={brands} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
