import React from "react";
import hero from "../assets/frontend_assets/hero_img.png";

const Hero = () => {
  return (
    <div >
      <div className="flex flex-col md:flex-row justify-center items-center border-[1px] border-gray-400">
        {/* Text Section */}
        <div className="flex justify-center w-full  md:w-1/2 p-6">
        <div className="flex flex-col items-start space-y-2 "> {/* Ensure left alignment */}
          <div className="flex items-center space-x-2 w-full">
            <hr className="w-[50px] border-none h-[2px] bg-gray-700" />
            <p className="text-gray-700 font-semibold text-lg">OUR BESTSELLERS</p>
          </div>
          <p className="text-3xl text-gray-700 text-left w-full">Latest Arrivals</p>
          <div className="flex items-center space-x-2 w-full">
            <p className="text-gray-700 font-semibold text-lg">SHOP NOW</p>
            <hr className="w-[50px] border-none h-[1px] bg-gray-700" />
          </div>
        </div>
        </div>
        {/* Image Section */}
        <img src={hero} className="w-full md:w-1/2" />
      </div>
    </div>
  );
};

export default Hero;
