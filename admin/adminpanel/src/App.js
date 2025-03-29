import React, { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import List from "./pages/list";
import Orders from "./pages/orders";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(
      localStorage.getItem("AdminToken") ? localStorage.getItem("AdminToken") : ""
    );

  }, [token]);

  return (
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen">
        {token ==='' ? (
          <Login  setToken={setToken}/>
        ) : (
          <>
          
            <Navbar setToken={setToken} />
            <div className="px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[7vw] flex">
              <ToastContainer />
              <div className="w-[20%]">
                <Sidebar />
              </div>

              <div className="w-[70%] ml:max(5vw, 25px) mx-auto my-10 text-base text-gray-600">
                <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/order" element={<Orders />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
