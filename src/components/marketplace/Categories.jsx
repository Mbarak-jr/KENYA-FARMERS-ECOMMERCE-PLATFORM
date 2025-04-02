import React from "react";
import { Wheat, Sprout, Apple, ShoppingCart, Leaf } from "lucide-react"; // Farm-related icons

const categories = [
  { 
    id: 1, 
    name: "Grains & Cereals", 
    icon: <Wheat size={64} color="#F59E0B" strokeWidth={1.5} />, 
    bgColor: "#FEF3C7" 
  },
  { 
    id: 2, 
    name: "Fresh Vegetables", 
    icon: <Sprout size={64} color="#10B981" strokeWidth={1.5} />, 
    bgColor: "#ECFDF5" 
  },
  { 
    id: 3, 
    name: "Fruits & Nuts", 
    icon: <Apple size={64} color="#DC2626" strokeWidth={1.5} />, 
    bgColor: "#FEE2E2" 
  },
  { 
    id: 4, 
    name: "Farm Produce", 
    icon: <ShoppingCart size={64} color="#A855F7" strokeWidth={1.5} />, 
    bgColor: "#EDE9FE" 
  },
  { 
    id: 5, 
    name: "Organic Herbs", 
    icon: <Leaf size={64} color="#22C55E" strokeWidth={1.5} />, 
    bgColor: "#DCFCE7" 
  }
];

const Categories = () => {
  return (
    <div className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8">Shop by Farm Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div 
              className="w-full h-48 flex items-center justify-center" 
              style={{ backgroundColor: category.bgColor }}
            >
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold py-4">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
