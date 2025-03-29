import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import deletelogo from "../assets/frontend_assets/bin_icon.png";
import { updateQuantity } from '../utils/cartSlice';
import { removeFromCart } from '../utils/cartSlice';
import axios from "axios";
const CartItem = ({item}) => {
  const dispatch=useDispatch();
    const currency=useSelector(store=>store.home.currency)
    const { image, name, price, selectedSize, quantity,_id } = item;
    const [localQuantity, setLocalQuantity] = useState(quantity);
    const handleQuantityChange = async(e) => {
      e.preventDefault();
      const newQuantity = e.target.value;
      console.log("new quantity :",newQuantity);
      //if (newQuantity === '' || (!isNaN(newQuantity) && Number(newQuantity) > 0)) {
          //setLocalQuantity(newQuantity);
      
      const token=localStorage.getItem("token");
      dispatch(updateQuantity({_id:_id,newQuantity}));
      console.log("local quantity to send :",newQuantity);
      const response=await axios.post("http://localhost:5000/cart/update",{_id,name,selectedSize,quantity:newQuantity}, { headers: { Authorization: `Bearer ${token}` } });
      console.log("response after update ",response);
      if (response.data.success) {
        dispatch(updateQuantity({ _id, localQuantity: newQuantity }));
      } else {
        console.log("Error updating quantity:", response.data.message);
      }
      
  };
  const handleDelete=async()=>{
    const token=localStorage.getItem("token");
    dispatch(removeFromCart({_id:_id,selectedSize:selectedSize}));
     const response=await axios.post("http://localhost:5000/cart/remove",{_id,name,selectedSize}, { headers: { Authorization: `Bearer ${token}` } });
  }
   
  return (
    <div className='w-[80vw] flex  space-x-8 lg:text-xl text-xs sm:text-base font-medium py-6 justify-between'>
        <img src={image[0]} className='w-20 h-20 lg:aspect-auto lg:h-auto  my-auto'/>
        <div className='flex flex-col justify-center  py-2 space-y-2'>
            <p className='text-xs  font-semibold lg:text-xl'>{name}</p>
            <div className='flex space-x-5 items-center' >
                <p>{currency}{price}</p>
                <p className='bg-slate-50 px-2 sm:px-3 py-2 border'>{selectedSize}</p>
            </div>
            
        </div>
        <div className='flex justify-around items-center space-x-4 lg:space-x-8 cursor-pointer  lg:text-xl'>
                <input type="number" className='max-w-10 sm:max-w-24 border px-2 sm:px-2 py-1 text-black' min="1" value={localQuantity} onChange={handleQuantityChange}/>
                <img src={deletelogo} className='w-5 max-w-6' onClick={handleDelete}/>
            </div>
      
    </div>
  )
}

export default CartItem
