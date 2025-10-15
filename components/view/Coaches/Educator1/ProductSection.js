import React from "react";

function ProductSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4">
        
        {/* Left Side — Image with Sale Badge */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <span className="absolute top-4 left-4 bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
            Sale!
          </span>
          <img
            src="/images/Educators/john.jpg"
            alt="Coach bradders"
            className="max-w-sm w-full object-contain"
          />
        </div>

        {/* Right Side — Product Info */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            60 Minute Private Lesson with Coach bradders
          </h2>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.401 8.182L12 18.896l-7.335 3.849 1.401-8.182L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
            </div>
            <span className="text-gray-500 text-sm">(customer reviews)</span>
          </div>

          {/* Price */}
          <div className="space-x-3">
            <span className="text-gray-400 line-through text-xl">$90.00</span>
            <span className="text-green-600 text-2xl font-bold">$80.00</span>
          </div>

          {/* Dropdown */}
          <div>
            <select className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 w-60">
              <option>Clash of Clans</option>
            </select>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">-</button>
              <span className="px-4 py-2">1</span>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">+</button>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
                />
              </svg>
              ADD TO CART
            </button>
          </div>

          {/* PayPal Option */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">
              <strong>PayPal</strong> Buy now, pay later.{" "}
              <a href="#" className="text-green-600 hover:underline">
                Learn more
              </a>
            </p>
            <button className="bg-yellow-400 text-black font-semibold w-60 py-3 rounded-md hover:bg-yellow-500 transition">
              PayPal
            </button>
          </div>

          {/* Product Meta Info */}
          <div className="text-sm text-gray-500 pt-6 space-y-1">
            <p>
              <strong>SKU:</strong> PRODUCT-6933-COACHING-CLASH-OF-CLANS
            </p>
            <p>
              <strong>Categories:</strong> Clash of Clans, Mobile Gaming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
