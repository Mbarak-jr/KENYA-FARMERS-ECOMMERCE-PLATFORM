import React from "react";

const categories = [
  { 
    id: 1, 
    name: "Grains & Cereals", 
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhaW5zJTIwYW5kJTIwY2VyZWFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    count: "42 Products"
  },
  { 
    id: 2, 
    name: "Fresh Vegetables", 
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2glMjB2ZWdldGFibGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    count: "36 Products"
  },
  { 
    id: 3, 
    name: "Fruits & Nuts", 
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzJTIwYW5kJTIwbnV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    count: "28 Products" 
  },
  { 
    id: 4, 
    name: "Dairy Products", 
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcnklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    count: "19 Products"
  },
  { 
    id: 5, 
    name: "Organic Herbs", 
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMGhlcmJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    count: "15 Products"
  }
];

const CategoryCard = ({ category }) => {
  return (
    <div className="group relative h-80 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <img
        src={category.image}
        alt={category.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
          <p className="text-gray-200 mb-4">{category.count}</p>
          <button className="px-5 py-2 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse Farm Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fresh produce from our local farmers
          </p>
        </div>

        {/* Categories Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
            View All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;