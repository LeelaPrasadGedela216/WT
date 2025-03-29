import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const url ="http://localhost:5000/auth/signin"
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Fixed: Changed from formDataToSend to formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Token saved: " + data.token);
        
      }
      if (data.userId) {
        localStorage.setItem("userId", data.userId);
        alert("UserId saved: " + data.userId);

      }
      alert("Login Successful..!");
      navigate("/home");
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Failed to sign in. Please try again.");
    }
    
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
