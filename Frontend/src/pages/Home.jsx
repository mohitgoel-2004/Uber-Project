import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full relative">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/Traffic.jpeg)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between">
        
        {/* Top Logo */}
        <div className="pt-10 px-6">
          <img
            className="w-24 bg-white px-4 py-2 rounded-lg shadow-xl"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
          />
        </div>

        {/* Bottom Sheet */}
        <div className="bg-white w-full p-8 rounded-t-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-2">Get started with Uber</h2>
          <p className="text-gray-600 text-center mb-6">Request a ride, hop in, and go.</p>

          <Link to="/user-login" className="flex items-center justify-center w-full bg-black text-white py-4 rounded-lg text-lg font-semibold active:scale-95 transition-transform hover:bg-gray-900">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
