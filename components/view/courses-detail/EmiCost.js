"use client";
import React from 'react';
import { FcCustomerSupport } from 'react-icons/fc';

function EmiCost({ isOpen, setIsOpen }) {
  const closeModal = () => setIsOpen({ ...isOpen, knowMore: false });

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full relative overflow-hidden p-6">

            <button
              onClick={closeModal}
              className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold text-gray-600 hover:bg-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h4 className="text-lg font-semibold text-left text-gray-800 mb-4 flex items-center justify-center">
              NO COST EMI
            </h4>
            <p className="text-sm text-gray-600 mb-4 text-center">0% interest rates | No hidden cost</p>
            <hr />
            <p className="text-sm text-gray-600 mb-4 ">3 Month EMI plans at no extra cost. Share your details below to avail this payment option.</p>
            <form className="space-y-4">


              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  className="mt-1 block w-full rounded-md border-black shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>
            </form>
            <button className='w-full mt-6 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 rounded transition'>
              GET IN TOUCH
            </button>
            <div className='bg-gray-500 p-2'>
              <h6 className='text-sm font-bold'>Financing Options</h6> <br />

              Financing options available without any credit/debit card. The interest amount will be discounted from the price of the course and will be borne by Edureka. You will be charged the course price minus the interest.
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default EmiCost;
