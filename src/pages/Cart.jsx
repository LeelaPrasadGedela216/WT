import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import { addToCartDetailedInfo } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cart = useSelector((store) => store.cart.cartItems);
 const cartDetailedInfo=useSelector(store=>store.cart.cartDetailedInfo)
  const products = useSelector((store) => store.home.products); // Fetching products from Redux store
  const [cartItems, setCartItems] = useState([]); // Local state for merged cart items
  const currency = useSelector((store) => store.home.currency); // Currency symbol (e.g., $, €)
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    const temp = [];
    if (cart) {
      for (const cartItem of cart) {
        const copy = products.find(
          (item) => item._id.toString() === cartItem._id.toString()
        );
        if (copy) {
          temp.push({ ...copy, ...cartItem });
        }
      }
    }
    setCartItems(temp);
    dispatch(addToCartDetailedInfo(temp));
  }, [cart, products]);

  useEffect(() => {
    console.log("detailed info ", cartDetailedInfo); 
    // This will log the updated cartItems
  }, [cartItems]);

  // Initial value for the accumulator is 0

  // Conditional rendering for cart being empty or not
  if (!cart || cart.length === 0) {
    return (
      <div className="px-[5vw] sm:px-[7vw] lg:px-[9vw] text-center">
        <Navbar />
        <hr className="border-none h-[1px] bg-gray-200 mb-10" />
        <p>YOUR CART IS EMPTY</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="px-[5vw] sm:px-[7vw] lg:px-[9vw] text-center">
      <Navbar />
      <hr className="border-none h-[1px] bg-gray-200 " />
      <div className="w-full flex flex-col justify-center  items-start mb-20">
        <div className="w-full ">
          <div className="text-left flex justify-start mt-16 mb-8">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>
          <div className="flex justify-between">
            <div className="border-y-1 border-gray-300 flex flex-col divide-y-2   divide-y-gray-300">
              {cartItems.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full  lg:max-w-[450px] justify-end mr-0  mx-auto  mb-8">
          <CartTotal />
          <div className="flex justify-end my-6">
            <button
              className="bg-black px-4 py-2 text-white"
              onClick={() => {
                navigate("/placeorder");
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
