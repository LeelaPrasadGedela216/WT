import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Title from "./Title";
import { assets } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";
const LatestCollections = () => {
  const products = useSelector((store) => store.home.products);

  const [latestproducts, setlatestproducts] = useState([]);
  useEffect(() => {
    setlatestproducts(products.slice(0, 10));
  }, []);
  if (latestproducts.length === 0) {
    return <div>Loading...</div>; // or return null;
  }
  return (
    <div >
      <Title text1={"LATEST"} text2={"COLLECTIONS"} className="my-4" />
      <p className="text-gray-800 my-4 mx-auto w-3/4 text-xs sm:text-sm md:text-base ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.{" "}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4 my-8 mb-20">
        {latestproducts.map((item, index) => (
          <ProductItem
            key={index}
            _id={item._id}
            name={item.name}
            price={item.price}
           image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
