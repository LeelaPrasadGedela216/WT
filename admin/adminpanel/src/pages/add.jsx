import React, { useState, useEffect } from "react";
import upload from "../assets/upload_area.png";
import axios from "axios"
import { toast } from "react-toastify";
const Add = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubcategory] = useState("");
  const token=localStorage.getItem("AdminToken");
const url="http://localhost:5000/product/add"

  useEffect(() => {
    return () => {
      if (image1) URL.revokeObjectURL(image1);
      if (image2) URL.revokeObjectURL(image2);
      if (image3) URL.revokeObjectURL(image3);
      if (image4) URL.revokeObjectURL(image4);
    };
  }, [image1, image2, image3, image4]);

  const handleFileChange = (e) => {
    if (e.target.name === "image1") {
      setImage1(e.target.files[0]);
    }
    if (e.target.name === "image2") {
      setImage2(e.target.files[0]);
    }
    if (e.target.name === "image3") {
      setImage3(e.target.files[0]);
    }
    if (e.target.name === "image4") {
      setImage4(e.target.files[0]);
    }
  };

  const handleSizeToggle = (selectedSize) => {
    if (size.includes(selectedSize)) {
      setSize(size.filter((s) => s !== selectedSize));
    } else {
      setSize([...size, selectedSize]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('bestseller', bestseller);
    formData.append('category', category);
    formData.append('subCategory', subCategory);
    formData.append('sizes', JSON.stringify(size));
    if (image1) formData.append('image1', image1);
    if (image2) formData.append('image2', image2);
    if (image3) formData.append('image3', image3);
    if (image4) formData.append('image4', image4);
    try {
      
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
           'token':token
        },
      });
      toast.success(response.data.message)

      console.log("Response:", response);
      setImage1(null);
      setImage2(null);
      setImage3(null);
      setImage4(null);
      setPrice('');
      setName('');
      setDescription('');
      setSize([]);
      setBestseller(false);
      
    } catch(error){
      console.log("Failed to add Product :",error);
      alert("Failed to add Product :",error)
    }
    
  };

  return (
    <div className="pl-[5vw] flex flex-col justif-start text-gray-600 gap-4 max-w-2xl">
      <div className="flex flex-col gap-2">
        <p>Upload Images</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:flex">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name="image1"
              onChange={handleFileChange}
            />
            <img
              src={image1 === null ? upload : URL.createObjectURL(image1)}
              className="w-20"
              alt="Upload"
            />
          </label>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name="image2"
              onChange={handleFileChange}
            />
            <img
              src={image2 === null ? upload : URL.createObjectURL(image2)}
              className="w-20"
              alt="Upload"
            />
          </label>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name="image3"
              onChange={handleFileChange}
            />
            <img
              src={image3 === null ? upload : URL.createObjectURL(image3)}
              className="w-20"
              alt="Upload"
            />
          </label>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name="image4"
              onChange={handleFileChange}
            />
            <img
              src={image4 === null ? upload : URL.createObjectURL(image4)}
              className="w-20"
              alt="Upload"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p>Product Name</p>
        <input
          type="text"
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          placeholder="Enter Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>Description</p>
        <textarea
          type="text"
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          placeholder="Enter Here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex sm:space-x-6 flex-wrap justify-start">
        <div className="flex flex-col gap-2 flex-1">
          <p>Category</p>
          <select
            className="p-2 border-[1px] border-gray-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <p>Sub Category</p>
          <select
            className="p-2 border-[1px] border-gray-400"
            value={subCategory}
            onChange={(e) => setSubcategory(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <p>Price</p>
          <input
            className="p-2 border-[1px] border-gray-400 max-w-48"
            placeholder="250"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p>Product Sizes</p>
        <div className="flex gap-2 sm:gap-4">
          {sizes.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer border-[1px] border-gray-400 p-2 min-w-6 sm:min-w-10 flex justify-center items-center ${
                size.includes(item) ? "bg-gray-300 border-gray-500" : "bg-slate-100"
              }`}
              onClick={() => handleSizeToggle(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller(!bestseller)}
        />
        <label>Add to Bestseller</label>
      </div>

      <div className="my-8">
        <button
          className="p-2 bg-black text-white px-8"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Add;
