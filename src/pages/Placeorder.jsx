import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import stripe from "../assets/frontend_assets/stripe_logo.png"
import razor from "../assets/frontend_assets/razorpay_logo.png"
import { useSelector } from "react-redux";
const Placeorder = () => {
  const subTotoal=useSelector((store)=>store.cart.subTotoal);
  const cartItems=useSelector(store=>store.cart.cartItems);
  const products=useSelector(store=>store.home.products);
  const delivery_fee=10;
    const [formData,setFormData]=useState({
      firstName:'',
      lastName:'',
      email:'',
      street:'',
      city:'',
      state:'',
      country:'',
      zipcode:'',
      phone:''
  
    });
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    // try{
    //   let orderItems=[];
    //   for (const item in cartItems)
    //   {
    //     for (const size in cartItems[item])
    //     {
    //       if(cartItems[item][size]>0)
    //       {
    //         const itemInfo= structuredClone(products.find(item=>item._id===))
    //       }
    //     }
    //   }

    // }catch(//error){

    // }
    const orderData={
      address:formData,
      amount:subTotoal+delivery_fee
     //items

    }
  }
  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setFormData((data)=>({...data,[name]:value}));
  }
  const [paymethod,setPaymethod]=useState("cash")
  return (
    <form className="px-[5vw] sm:px-[7vw] lg:px-[9vw] ">
      <Navbar />
      <hr className="border-none h-[1px] bg-gray-200 mb-10" />
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-20">
        <div className="flex flex-col gap-4 max-w-[500px] ">
          <div className="text-left md:space-x-6">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="flex justify-between w-full space-x-6">
            <input
           
              type="text"
              className=" w-full flex-1 border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
              placeholder="First Name"
              name="firstName"
              value= {formData.firstName}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              className="w-full flex-1 border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
              placeholder="last Name"
              name="lastName"
              value= {formData.lastName}
              onChange={onChangeHandler}
            />
          </div>
          <input
            type="text"
            className="w-full border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
            placeholder="Email address"
            name="email"
            value= {formData.email}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            className="w-full border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
            placeholder="Street"
            name="street"
              value= {formData.street}
              onChange={onChangeHandler}
          />
          <div className="flex justify-between w-full space-x-6">
            <input
              type="text"
              className="w-full flex-1 border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
              placeholder="City"
              name="city"
              value= {formData.city}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              className="w-full flex-1 border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
              placeholder="State"
              name="state"
              value= {formData.state}
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex justify-between w-full space-x-6">
            <input
              type="text"
              className="w-full flex-1 border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
              placeholder="Zip Code"
              name="zipcode"
              value= {formData.zipcode}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              className="w-full flex-1 border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
              placeholder="Country"
              name="country"
              value= {formData.country}
              onChange={onChangeHandler}
            />
          </div>
          <input
            type="text"
            className="w-full border-[1px] border-gray-300 rounded-md py-2 px-3.5 placeholder-gray-400"
            placeholder="Phone"
            name="phone"
              value= {formData.phone}
              onChange={onChangeHandler}
          />
        </div>
        <div className="flex  flex-col items-end justify-center w-full max-w-[550px]">
          <div className="w-full">
            {" "}
            <CartTotal />
            
            <div className="w-full ">
              <div className="text-lg">
                <div
                  className={`flex  items-center space-x-1 font-semibold mt-8 flex-wrap p-1 xs:p-0 my-6`}
                >
                  <p className=" text-gray-500">{"PAYMENT"}</p>
                  <p className=" text-gray-800">{"METHOD"}</p>
                  <hr className="w-[50px] border-none bg-gray-800 h-[2px]" />
                </div>
                <div className="flex justify between space-x-4 ">
                  <div className=" flex space-x-4 items-center  px-3.5 py-1 border-[1px] border-gray-300 " onClick={()=>setPaymethod("stripe")}>
                    <div className={`w-3 h-3 rounded-full mx-2  border-2 border-gray-200 ${paymethod==="stripe"? "bg-green-500":""} `}></div>
                    <img src={stripe} className="w-12"/>
                  </div>
                  <div className=" flex space-x-4 items-center  px-3.5 py-1 border-[1px] border-gray-300 " onClick={()=>setPaymethod("razor")} >
                    <div className={`w-3 h-3 rounded-full mx-2  border-2 border-gray-200 ${paymethod==="razor"? "bg-green-500":""} `}></div>
                    <img src={razor} className="w-12"/>
                  </div>
                  <div className=" flex space-x-4 items-center  px-3.5 py-1 border-[1px] border-gray-300 " onClick={()=>setPaymethod("cash")}>
                    <div className={`w-3 h-3 rounded-full mx-2  border-2 border-gray-200 ${paymethod==="cash"? "bg-green-500":""} `}></div>
                     <div className="text-gray-500 font-medium">CASH ON DELIVERY</div>
                  </div>

                </div>
                
              </div>
            </div>
          </div>
          <div className="flex justify-end my-6">
              <button
               type="submit"
                className="bg-black  py-2 text-white px-8"
                onClick={handleSubmit}
              >
                PLACE ORDER
              </button>
            </div>
        </div>
      </div>

      <Footer />
    </form>
  );
};

export default Placeorder;
