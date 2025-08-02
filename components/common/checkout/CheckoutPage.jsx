'use client';
import React, { useState } from 'react';

const CheckoutPage = () => {
  // Step 1: Create a state to store form values
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: '',
  });

  // Step 2: Update state on input change
  const handleChange = (e) => {
    setForm({
      ...form,                  // copy existing values
      [e.target.name]: e.target.value // update only the changed field
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);

    // Later: Send this form data to your API
    // Example:
    // await axios.post(`${base_url}/checkout`, form, {
    //   headers: { 'X-API-Key': your_api_key }
    // });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Address</label>
          <input
            type="text"
            name="address"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* City and ZIP */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">ZIP Code</label>
            <input
              type="text"
              name="zip"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              value={form.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            value={form.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Payment Method --</option>
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
