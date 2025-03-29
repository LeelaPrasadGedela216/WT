import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, Search, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../components/ProductItem";
import { setIsSearchOpen } from "../utils/homeSlice";
import axios from "axios";
const Collections = () => {
  const url = "http://localhost:5000/product/list";
  
  const products=useSelector(store=>store.home.products);
  const dispatch = useDispatch(); // ✅ Import useDispatch
  const [isshow, setIsshow] = useState(false);
  // const products = useSelector((store) => store.home.products);
  const isSearchOpen = useSelector((store) => store.home.searchOpen);

  // Filters and Sorting States
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState("Relevant");
  const [searchText, setSearchtext] = useState("");

  // ✅ Corrected function to dispatch Redux action
  const toggleSearch = () => {
    dispatch(setIsSearchOpen());
  };

  // Category Selection
  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prevCategories) =>
      checked
        ? [...prevCategories, value]
        : prevCategories.filter((cat) => cat !== value)
    );
  };

  // Type Selection
  const handleSelectType = (e) => {
    const { value, checked } = e.target;
    setSelectedTypes((prevTypes) =>
      checked
        ? [...prevTypes, value]
        : prevTypes.filter((type) => type !== value)
    );
  };

  // Sorting Option Change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchtext(e.target.value);
  };

  // Filtering Products
  let filteredProducts = products.filter(
    (item) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)) &&
      (selectedTypes.length === 0 ||
        selectedTypes.includes(item.subCategory)) &&
      (searchText.trim() === "" ||
        item.name.toLowerCase().includes(searchText.toLowerCase()))
  );

  // Sorting Logic
  if (sortOption === "Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="px-[5vw] sm:px-[7vw] lg:px-[9vw] text-center">
      {/* ✅ Corrected toggleSearch function passed */}
      <Navbar toggleSearch={toggleSearch} />
      <hr className="border-none h-[1px] bg-gray-200 mb-10" />

      {isSearchOpen && (
        <div className="w-full border-y-2 bg-gray-50 text-center p-4 mb-8 flex justify-center items-center relative space-x-2">
          {/* Search Box */}
          <div className="w-3/4 flex items-center max-w-md border-[1px] rounded-2xl p-2">
            <input
              className="w-full outline-none pl-2"
              placeholder="Search"
              type="text"
              value={searchText}
              onChange={handleSearchChange}
            />
            <Search className="text-gray-400 mr-3" size={20} />
          </div>

          {/* Close Button */}
          <X
            className="text-gray-500 cursor-pointer hover:text-black"
            size={24}
            onClick={() => {
              dispatch(setIsSearchOpen()); // ✅ Dispatch Redux action
              setSearchtext("");
            }}
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 mb-28">
        {/* Filters Section */}
        <div className="flex flex-col gap-8 items-start w-full sm:w-[250px] text-sm text-gray-500 sm:flex-shrink-0">
          <div className="flex items-center w-full sm:w-auto">
            <p className="text-lg text-black font-semibold pt-2">FILTERS</p>
            <span
              className={`cursor-pointer transition-transform duration-300 ${
                isshow ? "rotate-90" : ""
              }`}
              onClick={() => setIsshow((prev) => !prev)}
            >
              <ChevronRight size={24} className="sm:hidden" />
            </span>
          </div>

          {/* Filter Options */}
          <div
            className={`${
              isshow ? "flex" : "hidden"
            } sm:flex flex-col gap-y-6 w-full`}
          >
            {/* Category Filter */}
            <div className="border border-gray-300 p-4 w-full">
              <p className="text-black font-medium mb-4">CATEGORIES</p>
              <div className="flex flex-col space-y-2">
                {["Men", "Women", "Kids"].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-5 mr-2"
                      value={category}
                      onChange={handleSelectCategory}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="border border-gray-300 p-4 w-full">
              <p className="text-black font-medium mb-4">TYPE</p>
              <div className="flex flex-col space-y-2">
                {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-5 mr-2"
                      value={type}
                      onChange={handleSelectType}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-2 font-semibold text-sm sm:text-2xl">
              <p className="text-gray-500">ALL</p>
              <p className="text-gray-800">COLLECTIONS</p>
              <hr className="w-[50px] border-none bg-gray-800 h-[2px]" />
            </div>

            <select
              className="py-2 px-3 border-2 text-sm sm:text-base sm:w-auto w-full rounded"
              onChange={handleSortChange}
            >
              <option value="Relevant">Sort by: Relevant</option>
              <option value="Low to High">Sort by: Low to High</option>
              <option value="High to Low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filteredProducts.map((item) => (
              <ProductItem key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;
