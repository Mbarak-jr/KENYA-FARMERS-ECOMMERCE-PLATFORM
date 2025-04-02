import React from "react";
import { Wheat, Leaf, Carrot, Apple } from "lucide-react"; // Using alternative farm-related icons

const products = [
  { 
    id: 1, 
    name: "Corn", 
    price: "$10 per kg", 
    icon: <Wheat size={80} color="#F59E0B" strokeWidth={1.5} />, 
    bgColor: "#FEF3C7" 
  },
  { 
    id: 2, 
    name: "Spinach", 
    price: "$5 per bunch", 
    icon: <Leaf size={80} color="#10B981" strokeWidth={1.5} />, 
    bgColor: "#ECFDF5" 
  },
  { 
    id: 3, 
    name: "Carrots", 
    price: "$8 per kg", 
    icon: <Carrot size={80} color="#EAB308" strokeWidth={1.5} />, 
    bgColor: "#FEF9C3" 
  },
  { 
    id: 4, 
    name: "Apples", 
    price: "$15 per kg", 
    icon: <Apple size={80} color="#DC2626" strokeWidth={1.5} />, 
    bgColor: "#FEE2E2" 
  },
];

const FeaturedProducts = () => {
  return (
    <div className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8">Featured Farm Produce</h2>
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
              <p className="text-lg text-green-600 font-medium my-2">{product.price}</p>
              <button className="w-full mt-3 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-12 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors font-medium">
        View All Products
      </button>
    </div>
  );
};

export default FeaturedProducts;
