import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";
import { setIsSearchOpen } from "../utils/homeSlice";
import { useDispatch } from "react-redux";
import { addListener } from "@reduxjs/toolkit";
import { addToCart } from "../utils/cartSlice";
import axios from "axios";
import {toast} from "react-toastify";
const Product = () => {
  const dispatch=useDispatch();

  const toggleSearch = () => {
      dispatch(setIsSearchOpen());
    };
  const { _id } = useParams();
const products=useSelector(store=>store.home.products)
  const cartItems=useSelector((store)=>store.cart.cartItems)
  const product = products.find((item) => item._id.toString() === _id.toString());
  const currency = useSelector((store) => store.home.currency);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const[relatedProducts,setRelatedProducts]=useState([]);
  const [token,setToken]=useState('');
  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    if (product) {
      const related = products.filter(
        (item) =>
          item.category === product.category &&
          item.subCategory === product.subCategory
      );
      setRelatedProducts(related.slice(0, 5));
    }
  }, [product, products]);
 
  useEffect(()=>{
    const token=localStorage.getItem("token");
    setToken(token)
  },[])

  const handleAddToCart = async(_id,selectedSize,name) => {
    if (!selectedSize) {
      setError(true);
    } else {
      setError(false);
      dispatch(addToCart({_id:_id,selectedSize:selectedSize}));  
    }

    const response=await axios.post("http://localhost:5000/cart/add",{_id,name,selectedSize}, { headers: { Authorization: `Bearer ${token}` } });
    if(response.data.success){
      toast.success(response.data.message)
    }
  };

  if (!product) {
    return (
      <div className="px-[5vw] sm:px-[7vw] lg:px-[9vw]">
        <Navbar toggleSearch={toggleSearch} /> 
        <hr className="border-none h-[1px] bg-gray-200 mb-10" />
        <div className="py-20">Loading product...</div>
      </div>
    );
  }

  return (
    <div className="px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-center ">
      <Navbar />
      <hr className="border-none h-[1px] bg-gray-200 mb-10" />
      <div className="flex flex-col justify-center sm:flex-row md:flex-row gap-x-6 sm:justify-between">
        <div className="w-full  sm:w-1/2 flex flex-col justify-center  sm:flex-row gap-4 sm:space-x-4">
          <div className="flex flex-row sm:flex-col w-full gap-4 order-2 sm:order-1">
            {product.image.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Product ${index}`}
                className="w-20 cursor-pointer overflow-hidden w-full"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="w-full flex-1 mx-auto  order-1 sm:order-2">
            <img src={mainImage || product.image[0]} alt={product.name} className="w-full sm:min-w-[200px] lg:min-w-[450px] lg:max-w-[500px]" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col text-left gap-6 sm:pr-10 mt-6 md:mt-0">
          <div className="flex flex-col gap-2 flex-wrap">
            <p className="text-xl font-bold text-black">{product.name}</p>
            <p className="text-orange-500 text-xl">
              ★★★★☆ <span className="text-black">(122)</span>
            </p>
          </div>
          <p className="text-2xl font-bold text-black">
            {currency}{product.price}
          </p>
          <p className="text-gray-500">{product.description}</p>
          <div className="flex flex-row space-x-2">
            {sizes.map((size, index) => (
              <div
                key={index}
                value={size}
                onClick={() => {
                  setSelectedSize(size);
                  setError(false);
                }}
                className={`p-2 sm:p-3 bg-slate-50 text-black text-lg border-2 min-w-12 text-center aspect-square max-w-12 cursor-pointer
                  ${
                    selectedSize === size
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
              >
                {size}
              </div>
            ))}
          </div>

          <div>
            <button
              className="px-4 py-2 bg-black text-white disabled:bg-gray-400 cursor-pointer active:bg-gray-500"
              onClick={()=>{handleAddToCart(product._id,selectedSize,product.name)}}
              disabled={!selectedSize}
            >
              ADD TO CART
            </button>
          </div>
          <div className="flex flex-col text-gray-400">
            <hr className="border-none bg-gray-300 h-[1px] mb-4" />
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div class="my-20 text-left">
        <div class="flex">
          <b class="border px-5 py-3 text-sm">Description</b>
          <p class="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div class="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="mb-28">
        <div className="my-6"><Title text1={"REATED"} text2={"PRODUCTS"}/></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {relatedProducts.map(item=>(<ProductItem key={item._id} {...item}/>))}
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Product;
