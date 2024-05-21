import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Brand.scss";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][brand][id]=${id}`
  );

  console.log(data);
  return (
    <div className="brand-main-content">
      <div className="layout">
        <div className="brand-title">
          {data?.data?.[0]?.attributes?.brand?.data?.attributes?.brand_name}
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
