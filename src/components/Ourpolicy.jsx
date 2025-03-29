import React from "react";
import exchange1 from "../assets/frontend_assets/exchange_icon.png";
import quality from "../assets/frontend_assets/quality_icon.png";
import support from "../assets/frontend_assets/support_img.png";
const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center sm:w-3/4 mx-auto text-sm sm:text-base mb-16 ">
      <div className="flex flex-col justify-center items-center p-4">
        <img src={exchange1} className="w-12 mb-4" />
        <p className="font-semibold  text-black ">Easy Exchange Policy</p>

        <p className=" text-gray-500 ">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <img src={quality} className="w-12 mb-4" />
        <p className="font-semibold  text-black ">7 Days Return Policy</p>

        <p className=" text-gray-500 ">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <img src={support} className="w-12 mb-4" />
        <p className="font-semibold  text-black ">Best customer support</p>

        <p className=" text-gray-500 ">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Ourpolicy;
