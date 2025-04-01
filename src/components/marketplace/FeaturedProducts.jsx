import React from "react";
import { Smartphone, Laptop, Headphones, Watch } from "lucide-react";

const products = [
  { 
    id: 1, 
    name: "Smartphone", 
    price: "$599", 
    icon: <Smartphone size={80} color="#3B82F6" strokeWidth={1.5} />,
    bgColor: "#EFF6FF"
  },
  { 
    id: 2, 
    name: "Laptop", 
    price: "$999", 
    icon: <Laptop size={80} color="#10B981" strokeWidth={1.5} />,
    bgColor: "#ECFDF5" 
  },
  { 
    id: 3, 
    name: "Headphones", 
    price: "$199", 
    icon: <Headphones size={80} color="#8B5CF6" strokeWidth={1.5} />,
    bgColor: "#EDE9FE" 
  },
  { 
    id: 4, 
    name: "Watch", 
    price: "$149", 
    icon: <Watch size={80} color="#EC4899" strokeWidth={1.5} />,
    bgColor: "#FCE7F3" 
  },
];

const FeaturedProducts = () => {
  return (
    <div className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div 
              className="w-full h-56 flex items-center justify-center" 
              style={{ backgroundColor: product.bgColor }}
            >
              {product.icon}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-orange-500 font-medium my-2">{product.price}</p>
              <button className="w-full mt-3 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-12 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition-colors font-medium">
        View All Products
      </button>
    </div>
  );
};

export default FeaturedProducts;