import React from "react";

const CartPage = () => {
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
      <h1 className="text-3xl font-semibold mb-6">Your Shopping Cart</h1>
      
      {/* Cart Items */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Items in Your Cart</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Total</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.quantity}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">{item.total}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Total */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total Amount:</span>
          <span className="font-semibold text-xl">${totalAmount}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <button
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          onClick={() => window.location.href = "/checkout"}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
