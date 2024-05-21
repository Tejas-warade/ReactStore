import React, { useContext, useEffect } from "react";
import BrandList from "../Home/BrandList/BrandList";
import CategoryList from "../Home/CategoryList/CategoryList";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import "./Collections.scss";

const Collections = () => {
  const { categories, setCategories, brands, setBrands } = useContext(Context);
  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  const getBrands = () => {
    fetchDataFromApi("/api/brands?populate=*").then((res) => {
      setBrands(res);
      // console.log(res);
    });
  };

  return (
    <div className="layout">
      <div className="sec-heading">Categories</div>
      <CategoryList categories={categories} />
      <div className="sec-heading">Brands</div>
      <BrandList brands={brands} />
    </div>
  );
};

export default Collections;
