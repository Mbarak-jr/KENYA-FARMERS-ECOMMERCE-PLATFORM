import React from "react";
import { useParams } from "react-router-dom";

// Sample list of products (mocked for this example)
const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Fresh and organic tomatoes harvested daily.",
    price: "$4.99",
    image: "https://via.placeholder.com/400",
    details: "These tomatoes are handpicked from local farms. They are rich in flavor and nutrients.",
  },
  {
    id: 2,
    name: "Fresh Cucumbers",
    description: "Crisp and crunchy cucumbers perfect for salads.",
    price: "$3.49",
    image: "https://via.placeholder.com/400",
    details: "Our cucumbers are grown in the finest conditions, offering a refreshing taste in every bite.",
  },
  {
    id: 3,
    name: "Lettuce",
    description: "Organic lettuce grown without pesticides.",
    price: "$2.99",
    image: "https://via.placeholder.com/400",
    details: "Fresh lettuce leaves, perfect for salads or sandwiches, packed with nutrients.",
  },
  {
    id: 4,
    name: "Green Bell Peppers",
    description: "Fresh green bell peppers full of flavor.",
    price: "$5.49",
    image: "https://via.placeholder.com/400",
    details: "Green bell peppers are packed with vitamins and a deliciously mild flavor, perfect for cooking.",
  },
];

const ProductDetailPage = () => {
  // Get the product ID from the URL params
  const { id } = useParams();

  // Find the product by its ID
  const product = products.find((product) => product.id === parseInt(id));

  // If product not found, return an error message
  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-500 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-green-600 mb-4">{product.price}</p>
          <p className="text-sm text-gray-700">{product.details}</p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
