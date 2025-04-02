import React from "react";

const topSellers = [
  { id: 1, name: "John's Farm", sales: "1.2k Sales", image: "https://via.placeholder.com/150" },
  { id: 2, name: "GreenHarvest", sales: "900 Sales", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Farm Fresh", sales: "750 Sales", image: "https://via.placeholder.com/150" },
];

const TopSellers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
            Marketplace Leaders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Sellers</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the best sellers in our marketplace with outstanding sales records.
          </p>
        </div>
        {/* Sellers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topSellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
            >
              <img
                src={seller.image}
                alt={seller.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl text-gray-800">{seller.name}</h3>
              <p className="text-gray-600">{seller.sales}</p>
            </div>
          ))}
        </div>
        {/* View more sellers button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-yellow-600 text-yellow-600 font-bold rounded-lg hover:bg-yellow-600 hover:text-white transition-colors duration-300">
            View All Sellers
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
