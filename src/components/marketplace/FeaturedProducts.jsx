import React from "react";

const products = [
  { 
    id: 1, 
    name: "Organic Corn", 
    price: "$10 per kg", 
    image: "https://images.unsplash.com/photo-1601593768790-1aaf56e7a1e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JnYW5pYyUyMGNvcm58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    description: "Fresh locally grown golden corn",
    farmer: "Mwangi Farms"
  },
  { 
    id: 2, 
    name: "Fresh Spinach", 
    price: "$5 per bunch", 
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBzcGluYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    description: "Organic leafy greens packed with nutrients",
    farmer: "Green Valley Produce"
  },
  { 
    id: 3, 
    name: "Sweet Carrots", 
    price: "$8 per kg", 
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description: "Naturally sweet and crunchy",
    farmer: "Roots & Shoots Farm"
  },
  { 
    id: 4, 
    name: "Seasonal Apples", 
    price: "$15 per kg", 
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    description: "Crisp and juicy varieties",
    farmer: "Orchard Fresh"
  },
  { 
    id: 5, 
    name: "Organic Tomatoes", 
    price: "$12 per kg", 
    image: "https://images.unsplash.com/photo-1592841200221-a6897f6f5e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JnYW5pYyUyMHRvbWF0b2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    description: "Vine-ripened heirloom varieties",
    farmer: "Sunny Acres"
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="group relative h-96 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <span className="px-3 py-1 bg-white/90 text-green-700 font-medium rounded-full text-sm">
              {product.price}
            </span>
          </div>
          <p className="text-gray-200 mb-1">{product.description}</p>
          <p className="text-gray-300 text-sm mb-4">From {product.farmer}</p>
          <div className="flex space-x-3">
            <button className="px-5 py-2 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors">
              Add to Cart
            </button>
            <button className="px-5 py-2 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Fresh From Our Farms
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Farm Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked selection of our freshest seasonal produce
          </p>
        </div>

        {/* Products Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
            Browse All Products
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

export default FeaturedProducts;