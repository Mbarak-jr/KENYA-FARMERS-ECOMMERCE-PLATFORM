import React from "react";

const HeroBanner = () => {
  return (
    <div 
      className="bg-cover bg-center h-64 flex items-center justify-center text-center text-white p-4" 
      style={{ 
        backgroundImage: "url('/api/placeholder/1200/600')",
        backgroundColor: "#2d3748" // Fallback color
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Welcome to Our Marketplace</h1>
        <p className="text-lg">Explore the best products from top categories and enjoy exclusive offers!</p>
        <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-400 transition-colors">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroBanner;