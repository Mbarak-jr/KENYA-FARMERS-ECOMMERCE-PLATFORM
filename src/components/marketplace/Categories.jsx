import React from "react";
import { Tv, ShoppingBag, Home, BookOpen, Sparkles } from "lucide-react";

const categories = [
  { 
    id: 1, 
    name: "Electronics", 
    icon: <Tv size={64} color="#3B82F6" strokeWidth={1.5} />,
    bgColor: "#EFF6FF"
  },
  { 
    id: 2, 
    name: "Fashion", 
    icon: <ShoppingBag size={64} color="#EC4899" strokeWidth={1.5} />,
    bgColor: "#FCE7F3"
  },
  { 
    id: 3, 
    name: "Home Appliances", 
    icon: <Home size={64} color="#10B981" strokeWidth={1.5} />,
    bgColor: "#ECFDF5" 
  },
  { 
    id: 4, 
    name: "Books", 
    icon: <BookOpen size={64} color="#F59E0B" strokeWidth={1.5} />,
    bgColor: "#FEF3C7" 
  },
  { 
    id: 5, 
    name: "Beauty", 
    icon: <Sparkles size={64} color="#8B5CF6" strokeWidth={1.5} />,
    bgColor: "#EDE9FE" 
  }
];

const Categories = () => {
  return (
    <div className="py-16 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-semibold mb-8">Shop by Categories</h2>
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