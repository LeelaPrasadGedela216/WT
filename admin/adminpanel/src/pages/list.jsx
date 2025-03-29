import React from "react";
import { useState,useEffect } from "react";
import axios from"axios";
import {X} from "lucide-react";
const List = () => {
  const url = "http://localhost:5000/product/list";
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
      const response = await axios.get(url);
      setProducts(response?.data?.products);
    };
    useEffect(() => {
      fetchData();
    }, [products]);
  return (
    <div className="flex flex-col ml-max(5vw,25px) text-gray-600 gap-4">
      <p classsName="text-lg font-medium">All Products</p>
      <div>
        <div >
        <b className="w-full  mb-8 text-sm md:text-base grid grid-cols-[1fr_3fr_1fr]   md:grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-slate-200 text-center py-2 px-1">
          <p className="mx-auto">Image</p>
          <p className="hidden md:block mx-auto">Name</p>
          <p className="hidden md:block mx-auto">Category</p>
          <p className="mx-auto">Price</p>
          <p className="mx-auto">Action</p>
        </b>
        </div>
        

          <div className="w-full flex flex-col gap-4 ">
           { products.map((item,index)=>(
            <div className=" w-full text-sm   md:text-base grid  grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center  text-center justify-center border-[1px] p-2 shadow-lg">
              <img className="w-12 mx-auto" src={item.image[0]} alt={item.name}/>
          <p className="hidden md:block mx-auto">{item.name}</p>
          <p className="hidden md:block mx-auto">{item.category}</p>
          <p className="mx-auto">₹{item.price}</p>
          <X className="w-24 mx-auto"/>
              
            </div>

          ))
        }
            </div>
        

      </div>
    </div>
  );
};

export default List;
