"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Example: load cart items from localStorage or API
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // keep storage updated
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.thumbnail || "/course-placeholder.jpg"}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600">
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-xl">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ₹{getTotalPrice()}</h3>
            <Link href="/checkout">
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
