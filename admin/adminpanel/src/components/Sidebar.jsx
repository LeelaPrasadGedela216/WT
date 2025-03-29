import React from 'react'
import add from "../assets/add_icon.png"
import upload from "../assets/upload_area.png"
import order from "../assets/order_icon.png"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    
  return (
    <div className=' h-screen flex flex-col gap-6 py-10 border-r-[1px] border-gray-400 text-sm  items-center px-6'>

        <NavLink to="/add"className='flex gap-2 w-full py-2 border-[1px] px-2 cursor-pointer  min-w-[50px] flex-shrink-0 '>
            <img src={add} className=' min-w-5 flex-shrink-0' alt="add"/>
            <p className='hidden md:block'>Add items</p>
        </NavLink>
        <NavLink to="/list" className='flex gap-2 w-full py-2 border-[1px] px-2 cursor-pointer  min-w-[50px] flex-shrink-0 '>
            <img src={order} className=' min-w-5 flex-shrink-0'alt="list" />
            <p className='hidden md:block'>List Items</p>
        </NavLink>
        <NavLink to="/order" className='flex gap-2 w-full py-2 border-[1px] px-2 cursor-pointer  min-w-[50px] flex-shrink-0'>
            <img src={order} className=' min-w-5 flex-shrink-0' alt="orders"/>
            <p className='hidden md:block'>Orders</p>
        </NavLink>
        
      
    </div>
  )
}

export default Sidebar
