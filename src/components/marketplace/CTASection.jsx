import React from "react";

const CTASection = () => {
  return (
    <div className="relative py-24 overflow-hidden bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-amber-700/80"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-amber-300/10 animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/5 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-green-300/10 animate-float3"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Heading with decorative underline */}
        <div className="inline-block mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Grow With Our Farming Community
          </h2>
          <div className="h-1.5 bg-gradient-to-r from-amber-400 to-green-400 w-3/4 mx-auto rounded-full"></div>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
          Join thousands of farmers accessing premium products, expert advice, and exclusive marketplace opportunities to grow your agricultural business.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="relative overflow-hidden group bg-gradient-to-r from-amber-400 to-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="relative overflow-hidden group border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white hover:shadow-lg">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex -space-x-3 mb-4">
            {[1,2,3,4,5].map((i) => (
              <img 
                key={i}
                src={`https://randomuser.me/api/portraits/${i%2===0?'women':'men'}/${i+20}.jpg`}
                alt="Farmer"
                className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md"
              />
            ))}
          </div>
          <p className="text-white/80 text-sm md:text-base">
            Trusted by <span className="font-bold text-amber-300">10,000+</span> farmers across Kenya
          </p>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 15px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, 10px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -10px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default CTASection;