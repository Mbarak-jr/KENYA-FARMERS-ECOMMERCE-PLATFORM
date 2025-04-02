import React from "react";

const topSellers = [
  { 
    id: 1, 
    name: "John's Farm", 
    sales: "1,200 Sales", 
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    rating: 4.9,
    reviews: 328,
    location: "Nakuru, Kenya",
    products: ["Organic Vegetables", "Fresh Fruits", "Dairy"],
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    id: 2, 
    name: "GreenHarvest", 
    sales: "900 Sales", 
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    rating: 4.7,
    reviews: 215,
    location: "Mombasa, Kenya",
    products: ["Grains", "Seeds", "Farm Equipment"],
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    id: 3, 
    name: "Farm Fresh", 
    sales: "750 Sales", 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    rating: 4.8,
    reviews: 189,
    location: "Nairobi, Kenya",
    products: ["Organic Fertilizers", "Pesticides", "Tools"],
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    id: 4, 
    name: "Maasai Organics", 
    sales: "1,050 Sales", 
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    rating: 4.9,
    reviews: 276,
    location: "Kajiado, Kenya",
    products: ["Organic Meat", "Honey", "Herbs"],
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  { 
    id: 5, 
    name: "Lakeview Produce", 
    sales: "850 Sales", 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    rating: 4.7,
    reviews: 198,
    location: "Kisumu, Kenya",
    products: ["Fish", "Rice", "Vegetables"],
    farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const SellerCard = ({ seller }) => {
  return (
    <div className="group relative h-96 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <img
        src={seller.farmImage}
        alt={seller.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 p-6 w-full">
          {/* Seller profile */}
          <div className="flex items-center mb-4">
            <img 
              src={seller.image} 
              alt={seller.name} 
              className="h-14 w-14 rounded-full border-2 border-white object-cover mr-3"
            />
            <div>
              <h3 className="text-xl font-bold text-white">{seller.name}</h3>
              <p className="text-gray-200 text-sm">{seller.location}</p>
            </div>
          </div>
          
          {/* Rating and sales */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <StarRating rating={seller.rating} />
              <span className="text-gray-200 ml-2 text-sm">({seller.reviews})</span>
            </div>
            <span className="px-3 py-1 bg-white/90 text-green-700 font-medium rounded-full text-sm">
              {seller.sales}
            </span>
          </div>
          
          {/* Products */}
          <div className="mb-4">
            <p className="text-gray-200 text-sm mb-2">Top Products:</p>
            <div className="flex flex-wrap gap-2">
              {seller.products.map((product, index) => (
                <span key={index} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                  {product}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex space-x-3">
            <button className="px-5 py-2 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors">
              Shop Now
            </button>
            <button className="px-5 py-2 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopSellers = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Marketplace Leaders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Performing Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted farmers and suppliers delivering quality products
          </p>
        </div>

        {/* Sellers Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {topSellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
            View All Sellers
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

export default TopSellers;