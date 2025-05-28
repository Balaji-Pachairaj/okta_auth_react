import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => { 
    navigate("/dashboard")
   }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-4xl text-white font-bold">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-400 mt-4">
        This is a simple home page built with React.
      </p>
      <button onClick={handleGetStarted} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default Home;
