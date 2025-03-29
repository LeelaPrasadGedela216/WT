import React from 'react'
import Title from './Title'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
const CartTotal = () => {
    const cart = useSelector((store) => store.cart.cartItems); // Fetching cart items from Redux store
    const products = useSelector((store) => store.home.products); // Fetching products from Redux store
    const [cartItems, setCartItems] = useState([]); // Local state for merged cart items
    const currency = useSelector((store) => store.home.currency); // Currency symbol (e.g., $, €)
    const navigate=useNavigate();
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
     
    }, [cart, products]);
  
    useEffect(() => {
      console.log(cartItems); // This will log the updated cartItems
    }, [cartItems]); // Currency symbol (e.g., $, €)
 const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity; // Multiply by quantity in case there are multiple items
  }, 0); 
  console.log("cart items", cartItems)
  return (
    <div className=" w-full ">
          <div className="text-left flex justify-start mt-16 mb-8">
            <Title text1={"CART"} text2={"TOTAL"} />
          </div>
          <div className="flex flex-col divide-y-2 font-medium  divide-y-gray-300">
            <div className="flex text-sm justify-between text-gray-900 py-2">
              <p>Subtotal</p>
              <p>
                {currency}
                {subtotal.toFixed(2)} 
              </p>
            </div>
            <div className="flex text-sm justify-between text-gray-900 py-2">
              <p>Shipping Fee</p>
              <p>
                {currency}10.00 
              </p>
            </div>
            <div className="flex text-sm justify-between font-bold text-gray-900 py-2">
              <p>Total</p>
              <p>
                {currency}
                {(subtotal + 10).toFixed(2)} {/* Add shipping fee to total */}
              </p>
            </div>
          </div>
          
        </div>
  )
}

export default CartTotal;

