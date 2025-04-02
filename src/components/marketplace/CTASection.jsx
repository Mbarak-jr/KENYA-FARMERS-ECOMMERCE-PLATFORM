import React from "react";

const CTASection = () => {
  return (
    <div className="relative py-20 bg-gradient-to-r from-green-700 to-green-500 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white opacity-5"></div>
      </div>
      
      {/* Content container */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Join Our Farming Community
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white opacity-90">
          Sign up today to access premium farm products, expert advice, and connect with fellow farming enthusiasts.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold transition duration-300 hover:bg-white hover:text-green-700">
            Learn More
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-10 text-white opacity-90">
          <p className="text-sm">Join over 10,000+ farmers who trust our community</p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;