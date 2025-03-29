import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contact from "../assets/frontend_assets/contact_img.png";
import NewsBox from "../components/NewsBox";
import { setIsSearchOpen } from "../utils/homeSlice";
import { useDispatch } from "react-redux";
const Contact = () => {
  const dispatch=useDispatch();
  const toggleSearch = () => {
      dispatch(setIsSearchOpen());
    };
  return (
    <div className="px-[5vw] sm:px-[7vw]  lg:px-[9vw] text-center">
      <Navbar toggleSearch={toggleSearch} /> 
      <hr className="border-none h-[1px] bg-gray-200 mb-10"/>

      <div className="flex flex-col w-full sm:w-3/4 mx-auto sm:flex-row sm:space-x-12 my-10">
        <div>
          <img
            src={contact}
            className=" w-full  mb-10 sm:mb-0 sm:min-w-[450px] max-w-[500px]"
          />
        </div>
        <div className="flex items-center text-left">
          <div className="flex flex-col space-y-8">
            <div>
              <p className="text-gray-900 font-bold text-lg">Our Store</p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">RGUKT Nuzvid</p>
              <p className="text-gray-500 font-medium">
                Mylavaram road, Nuzvid,A.P, India
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">Tel:(415) 555-0132</p>
              <p className="text-gray-500 font-medium">
                Email:prasad@rguktn.ac.in
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-bold text-lg">
                Careers at Forever{" "}
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-medium">
                Learn more about our teams and job openings.
              </p>
            </div>
            <div>
              <button className="bg-white text-black cursor-pointer p-4 hover:bg-black hover:text-white font-medium border-[1px] border-black  transition-all duration-300 ease-in-out ">Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24"><NewsBox/></div>
      <Footer />
    </div>
  );
};

export default Contact;
