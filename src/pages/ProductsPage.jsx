import React from "react";

// Sample list of products with working image URLs
const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Fresh and organic tomatoes harvested daily.",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1603063916823-2d59b3a12a09",
  },
  {
    id: 2,
    name: "Fresh Cucumbers",
    description: "Crisp and crunchy cucumbers perfect for salads.",
    price: "$3.49",
    image: "https://images.unsplash.com/photo-1568700565-df5e49eada87",
  },
  {
    id: 3,
    name: "Lettuce",
    description: "Organic lettuce grown without pesticides.",
    price: "$2.99",
    image: "https://images.unsplash.com/photo-1600413124134-6fe9b20f7783",
  },
  {
    id: 4,
    name: "Green Bell Peppers",
    description: "Fresh green bell peppers full of flavor.",
    price: "$5.49",
    image: "https://images.unsplash.com/photo-1590851575145-d6013a142c92",
  },
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-green-600">{product.price}</p>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
