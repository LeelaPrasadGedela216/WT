import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { setIsSearchOpen } from "../utils/homeSlice";
import { useDispatch } from "react-redux";
import Title from '../components/Title';
import { useSelector } from 'react-redux';

import { useState,useEffect } from 'react';
const Orders = () => {
  const cartDetailedInfo=useSelector(store=>store.cart.cartDetailedInfo);
  const currency=useSelector(store=>store.home.currency);
  const dispatch=useDispatch();

  const toggleSearch = () => {
      dispatch(setIsSearchOpen());
    };

      const [currentDate, setCurrentDate] = useState('');
      useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString(); 
        setCurrentDate(formattedDate);
      }, []);

  return (
    <div className='px-[5vw] sm:px-[7vw]  lg:px-[9vw] text-center'>
      <Navbar toggleSearch={toggleSearch} /> 
      <hr className="border-none h-[1px] bg-gray-200 mb-10"/>
      <div className='flex flex-col  w-full mb-20'>
       <div className='mb-10'>
       <Title text1={"MY"} text2={"ORDERS"}/>
       </div>
      <div className='divide-y-2 divide-y-gray-300 border-y-[1px]'>
        
       {
        cartDetailedInfo.map((CartItem, index)=>(
          <div key={index} className='flex flex-col md:flex-row justify-between py-4 text-sm sm:text-base'>
        <div className='flex space-x-6 items-center text-left w-full md:max-w-[500px]' >
          <img src={CartItem.image[0]} className='w-20'/>
          <div className='flex flex-col gap-y-2'>
            <p className='lg:text-xl font-medium '>{CartItem.name}</p>
            <p className='lg:text-lg text-black'><span className='mr-2'>{currency}{CartItem.price}</span> <span className='mr-2'>Quantity: {CartItem.quantity}</span> <span>Size : {CartItem.selectedSize}</span></p>
            <p>Date: <span className='text-gray-400'>{currentDate}</span></p>
            <p>Payment: <span className='text-gray-400'>COD</span></p>
          </div>

        </div>
        <div className='flex justify-between items-center w-full max-w-[500px] my-2 sm:my-0'>
          <div className='flex space-x-2 items-center'>
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
            <p className='font-medium lg:text-lg'>Order Placed</p>
          </div>
          <div className='py-1 px-2 border-[1px] border-gray-400 font-medium'>
            Track order
          </div>

        </div>

       </div>
        ) )
       }
      </div>


      </div>
      <Footer/>
    </div>
  )
}


export default Orders;
