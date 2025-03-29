import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const url ="http://localhost:5000/auth/signup"
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), 
      });
      alert("request sent")
    alert(response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Token saved: " + data.token);
      }
      if (data._id) {
        localStorage.setItem("userId", data._id);
        alert("UserId saved: " + data._id);
      }
      alert("Registration Successful..!");
      navigate("/")
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Failed to sign Up. Please try again." +error );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
