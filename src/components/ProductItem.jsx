import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductItem = ({ _id, name, price,image }) => {
  
  const currency = useSelector((store) => store.home.currency);
  return (
    <div className="flex flex-col overflow-hidden ">
      <Link to={`/product/${_id}`}>
        <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out "
          alt={name}
        />
        </div>
      </Link>

      <p className="text-gray-600 text-sm text-left font-medium">{name}</p>
      <p className="text-sm  text-left font-semibold">
        <span>{currency}</span>
        {price}
      </p>
    </div>
  );
};

export default ProductItem;
