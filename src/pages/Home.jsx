import React, {useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import NewsBox from '../components/NewsBox'
import Footer from '../components/Footer'
import { setIsSearchOpen } from "../utils/homeSlice";
import { useDispatch } from "react-redux";
import { addAsset } from '../utils/homeSlice'
import axios from "axios"
const Home = () => {
  const dispatch=useDispatch();
  const toggleSearch = () => {
      dispatch(setIsSearchOpen());
    };
    const url = "http://localhost:5000/product/list";
     const [products, setProducts] = useState([]);
     const fetchData = async () => {
       const response = await axios.get(url);
       setProducts(response?.data?.products);
       dispatch(addAsset(response?.data?.products))
     };
     useEffect(() => {
       fetchData();
     }, []);
  return (
    <div className='px-[5vw] sm:px-[7vw]  lg:px-[9vw] text-center'>
      <Navbar toggleSearch={toggleSearch} /> 
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <Ourpolicy/>
      <NewsBox/>
      <Footer/>
    </div>
  )
}

export default Home
