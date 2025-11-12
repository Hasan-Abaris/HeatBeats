"use client";
import React from "react";
import { ExternalLink, Tag, ShoppingBag, Megaphone } from "lucide-react";

export default function Ads() {
  const ads = [
    {
      title: "Gaming Laptop Sale",
      company: "Asus ROG",
      desc: "Up to 30% off on high-performance ROG laptops with RTX GPUs and ultra-fast displays.",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/computer-1836330_1280.jpg",
      link: "#",
      tag: "🔥 Hot Deal",
    },
    {
      title: "Streamer Setup Kit",
      company: "Logitech",
      desc: "Bundle offer: Blue Yeti Mic, HD Pro Webcam & LED lighting for your ultimate stream setup.",
      image: "https://cdn.pixabay.com/photo/2020/09/11/12/54/microphone-5563526_1280.jpg",
      link: "#",
      tag: "⏳ Limited Time",
    },
    {
      title: "RGB Gaming Chair",
      company: "SecretLab",
      desc: "Comfort meets design — get 20% off on premium gaming chairs with LED backlight support.",
      image: "https://cdn.pixabay.com/photo/2018/11/10/14/44/chair-3807260_1280.jpg",
      link: "#",
      tag: "⚡ Trending",
    },
    {
      title: "Gaming Monitor Offer",
      company: "Alienware",
      desc: "144Hz QHD curved display — perfect for competitive and immersive gaming experiences.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/03/20/abstract-1868104_1280.jpg",
      link: "#",
      tag: "🆕 New Arrival",
    },
  ];

  return (
    <div className="min-h-screen mt-10 mb-12 px-5 space-y-14">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Megaphone size={36} className="text-emerald-400" />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
            Advertisements
          </h1>
        </div>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Discover exclusive gaming deals, setup upgrades, and limited-time offers from trusted brands 🎮
        </p>
      </div>

      {/* Ads Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {ads.map((a, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
              />
              <span className="absolute top-3 left-3 bg-emerald-600/90 text-xs px-3 py-1 rounded-full text-white font-medium flex items-center gap-1">
                <Tag size={12} /> {a.tag}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <ShoppingBag size={18} className="text-emerald-500" />
                {a.title}
              </h2>
              <p className="text-sm text-emerald-400 font-medium">{a.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>

              <button
                onClick={() => window.open(a.link, "_blank")}
                className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:opacity-90 transition-all"
              >
                View Offer <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-2 text-sm">
          Want to showcase your gaming brand or product to the HeatsBeasts community?
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 mx-auto">
          <Megaphone size={18} /> Post Your Advertisement
        </button>
      </div>
    </div>
  );
}
