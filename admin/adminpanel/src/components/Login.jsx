import React, { useState } from 'react'
import axios from "axios"
const Login= ({setToken}) => {
    const url="http://localhost:5000/auth/admin"
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(url, { 
            email,
            password,
          });
          console.log(response)
          console.log("Login successful:", response.data);
          alert("login Sucessful ..!")
          if(response.data.token){
            localStorage.setItem("AdminToken",response.data.token);
            setToken(response.data.token);
          }
         
        } catch (error) {
          console.error("Login failed:",  error.message);
          alert("Login failed: " +  error.message);
        }
      };
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col min-w-[300px] max-w-md justify-center items-center my-auto shadow-lg font-medium bg-white text-black px-8 py-6 gap-4 rounded-lg'>
        <p className='text-xl '>Admin Panel</p>
        <div className='text-xs flex flex-col gap-2 w-full'>
            <p>Email Address</p>
            <input type="email" placeholder='Enter your Email' value={email} className=' w-full px-4 placeholder-gray-300 py-2 border-[1px] border-gray-400 ' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='text-xs flex flex-col gap-2 w-full'>
            <p>Password</p>
            <input type="password" placeholder='Enter your password' value={password} className=' w-full px-4 placeholder-gray-300 py-2 border-[1px] border-gray-400 ' onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className='w-full'>
            <button type="Submit" className='bg-black text-white text-center w-full py-2' onClick={handleSubmit}>Login</button>
        </div>
      
    </div>
    </div>
  )
}

export default Login;
