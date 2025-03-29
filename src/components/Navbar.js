import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronLeft } from "lucide-react";
import logo from "../assets/frontend_assets/finallogo.png";
import search from "../assets/frontend_assets/search_icon.png";
import profile from "../assets/frontend_assets/profile_icon.png";
import cart from "../assets/frontend_assets/cart_icon.png";
const Navbar = ({ toggleSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [selected, setSelected] = useState(null);
  const menuItems = ["HOME", "COLLECTIONS", "ABOUT", "CONTACT","ADMIN PANEL"];
  const navigate = useNavigate();
  const handleLogout = async () => {
    // try {
    //   const url = "http://localhost:5000/auth/logout";
    //   const response = await fetch(url, {
    //     method: "POST",
    //     credentials: "include",
    //   });
    //   if (response.ok) {
    //     alert("Successfully logged out ..!");
    //     localStorage.removeItem("token");
    //     navigate("/");
    //   } else {
    //     const data = await response.json();
    //     alert("Failed to logOut " + data.message);
    //   }
    // } catch (error) {
    //   alert("Failed to logOut " + error.message);
    // }
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav
      className={`sm:p-4 flex justify-between items-center ${
        isOpen ? "mb-20 " : " "
      }`}
    >
      <img
        src={logo}
        className="w-[150px]"
        alt="Logo"
        onClick={() => {
          navigate("/home");
        }}
      />
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        {isOpen ? "" : <Menu size={24} />}
      </button>
      <ul
        className={`md:flex md:space-x-4  font-bold  ${
          isOpen ? "mb-20" : "hidden"
        }`}
      >
        {menuItems.map((label, index) => (
          <NavLink
            key={index}
            to={label === "ADMIN PANEL" ? "http://localhost:3001" : `/${label.toLowerCase()}`}
            className={`p-2 text-center flex flex-col justify-center items-center
              ${label==="ADMIN PANEL" ? "border-[1px] rounded-2xl text-xs py-2 px-4":""}
              `} 
              
          >
            <p>{label}</p>
            <hr className="hidden w-1/2 border-none bg-gray-500 h-[1.5px]" />
          </NavLink>
        ))}
      </ul>
      {isOpen && (
        <div className="absolute top-0 right-0 w-full bg-white   text-left">
          <div className="flex flex-col divide-y-2 divide-gray-300">
            <div
              className="flex items-center gap-2 p-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <ChevronLeft className="w-5" />
              <p className="font-medium">Back</p>
            </div>

            {menuItems.map((label, index) => (
              <div
                key={index}
                className={`px-4 font-medium cursor-pointer ${
                  selected === label
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => {
                  setSelected(label);
                  navigate(`/${label.toLowerCase()}`);
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex space-x-4 overflow-hidden">
        <img
          src={search}
          onClick={() => {
            toggleSearch(); // Properly calling the prop function
            navigate("/collections"); // Navigate to collection page
          }}
          className="w-5 cursor-pointer aspect-square"
          alt=""
        />

        <div className="group ">
          <img src={profile} className="w-5 cursor-pointer aspect-square" />
          <div className="hidden absolute sm:right-16 right-0 pt-4 font-semibold  group-hover:block">
            <div className="  flex flex-col justify-center items-center  w-36 bg-slate-100 text-gray-500 rounded-lg ">
              <p className="px-2 py-2 cursor-pointer hover:text-black">
                Profile
              </p>
              <p
                className="px-2 py-2 cursor-pointer hover:text-black"
                onClick={() => {
                  navigate("/orders");
                }}
              >
                Orders
              </p>
              <p
                className="px-2 py-2  cursor-pointer hover:text-black"
                onClick={handleLogout}
              >
                Log Out
              </p>
            </div>
          </div>
        </div>
        <Link className="relative overflow-visible">
          <img
            src={cart}
            className="w-5 min-w-5 cursor-pointer aspect-square"
            onClick={() => {
              navigate("/cart");
            }}
          />
          <p class="absolute bottom-[-5px]  right-[-5px] min-w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
