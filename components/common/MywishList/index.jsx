'use client';
import React from 'react'
import Image from 'next/image';


const wishlistData = [
  {
    id: 1,
    name: "Python Programin with intenship",
    price: "₹ 19000",
    date: "May 15, 2025",
    image: "/images/popv-4.jpeg",
    buttonLabel: "Add To Cart",
    buttonType: "add",
  },
  {
    id: 2,
    name: "Data Science (CS)",
    price: "₹ 17000 – ₹ 25000",
    date: "October 13, 2024",
    image: "/images/popv-3.png",
    buttonLabel: "Select Options",
    buttonType: "select",
  },
  {
    id: 3,
    name: "Java Programing Language",
    price: "₹ 30,000",
    date: "October 13, 2024",
    image: "/images/pop-7.png",
    buttonLabel: "Add To Cart",
    buttonType: "add",
  },
];

function MywishList() {
    return (
        <div className=" bg-white shadow-lg z-50 overflow-y-auto border border-gray-200">
            <div className="bgBlueDark text-white px-4 py-3 flex justify-between items-center">
                <h2 className="font-semibold text-lg">My Wishlist ({wishlistData.length})</h2>
            </div>

            <div className="divide-y divide-gray-100">
                {wishlistData.map((item) => (
                    <div key={item.id} className="flex items-start p-4 gap-4">
                        <Image src={item.image} alt={item.name} width={60} height={60} className="object-contain" />
                        <div className="flex-grow">
                            <p className="text-green-700 font-semibold">{item.name}</p>
                            <p className="text-black font-bold">{item.price}</p>
                            <p className="text-gray-500 text-sm">{item.date}</p>
                        </div>
                        <button
                            className={`rounded-full px-5 py-2 text-white text-sm font-semibold ${item.buttonType === 'add' ? 'bgOrange' : 'bgOrange'
                                }`}
                        >
                            {item.buttonLabel}
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-lime-700">
                <a href="#" className="underline">CONTINUE COURSE</a>
            </div>
        </div>
    );
}

export default MywishList
