import React from "react";

const CheckoutPage = () => {
  // Sample cart items (mocked for this example)
  const cartItems = [
    {
      id: 1,
      name: "Organic Tomatoes",
      quantity: 2,
      price: "$4.99",
      total: "$9.98",
    },
    {
      id: 2,
      name: "Fresh Cucumbers",
      quantity: 1,
      price: "$3.49",
      total: "$3.49",
    },
    {
      id: 3,
      name: "Lettuce",
      quantity: 3,
      price: "$2.99",
      total: "$8.97",
    },
  ];

  // Calculate the total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + parseFloat(item.total.slice(1)), 0).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      
      {/* Cart Items */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.quantity}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total Amount:</span>
          <span className="font-semibold text-xl">${totalAmount}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Shipping Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your shipping address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email address"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
