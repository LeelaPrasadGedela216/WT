import React from "react";
import logo from "../assets/frontend_assets/finallogo.png";
const Footer = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] text-sm text-left mb-10  font-medium space-y-8 sm:space-y-0">
        <div className="flex flex-col ">
          <img src={logo} className="mb-4 h-16  w-[150px]" />
          <p className="text-gray-400 pr-[14vw] text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-semibold text-black mb-4 h-16 flex items-center">
            <p>COMPANY</p>
          </div>
          <ul className="flex flex-col text-gry-400 ml-0 list-none text-gray-600 space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivey</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-xl font-semibold text-black mb-4  h-16">
            <p className="">GET IN TOUCH</p>
          </div>
          <div className="flex flex-col space-y-2">
          <p className="text-gray-600">+1-000-000-0000</p>
          <p className="text-gray-600">prasad@rguktn.ac.in</p>
          <p className="text-gray-600">linkedin</p>
          </div>
        </div>
      </div>
      <hr className="border-none bg-gray-300 h-[1px] "/>
      <p className="text-gray-800 text-center py-6 font-semibold">Copyright 2024@ prasad@rguktn - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
