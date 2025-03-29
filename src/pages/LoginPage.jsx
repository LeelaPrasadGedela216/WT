import React from "react";
import logo from "../assets/frontend_assets/logo1.png"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate=useNavigate();
    const handleSignIn = ()=>{
        navigate("/email")

    }
    const handleSignUp=(e)=>{
      e.preventDefault(); 
        navigate("/register");
    }
    const handleGoogleSignIn=(e)=>{
      e.preventDefault(); 
      window.open("http://localhost:5000/auth/google", "_self");
    }
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen px-4  ">
      <div className="bg-white shadow-lg rounded-xl flex flex-col lg:flex-row w-full max-w-3xl py-8 px-4">
        
        
        <div className="hidden lg:flex items-center justify-center  p-6 rounded-l-lg">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Login Form Section */}
        <div className="p-8 flex flex-col items-center w-full bg-gray-200 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">Sign in to your account</h2>

          <form className="w-full space-y-4">
            <button className="bg-blue-600 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full hover:bg-blue-700" onClick={handleSignIn}>
              Sign in with Email
            </button>

            <button className="bg-white border flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full shadow hover:bg-gray-100" onClick={handleGoogleSignIn}>
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>

            <button className="bg-green-500 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full hover:bg-blue-800">
              <FaFacebook className="text-2xl" />
              Sign in with Facebook
            </button>

            <button className="bg-gray-900 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full hover:bg-gray-800">
              <FaGithub className="text-2xl" />
              Sign in with GitHub
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-4" onClick={handleSignUp} >
            Don't have an account?{" "}
            
              Sign up
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
