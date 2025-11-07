"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(null);

  // Simulate username check (static)
  const checkUsernameAvailability = (value) => {
    if (!value) return;
    setUsernameAvailable(value.toLowerCase() !== "admin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "username") checkUsernameAvailability(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameAvailable === false) {
      alert("❌ Username is already taken!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("⚠️ Passwords do not match!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("✅ Registered successfully! (Static Demo)");
    }, 1500);
  };

  return (
    <section className=" min-h-screen flex items-center justify-center">
      {loading && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center text-white text-xl z-50">
          Loading...
        </div>
      )}

      <div className="bg-gray-900 flex rounded-2xl shadow-lg max-w-3xl items-center overflow-hidden">
        {/* LEFT SIDE - Signup Form */}
        <div className="md:w-1/2 text-center md:text-start py-8 px-8 md:px-8 bg-gray-800 flex flex-col justify-center text-white">
          <h2 className="font-bold text-2xl text-green-400">Sign Up</h2>
          <p className="text-xs mt-2 text-green-400">Signup to continue...</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
              className="p-2 rounded-xl border border-gray-600 bg-gray-700 text-sm placeholder-gray-300"
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border border-gray-600 bg-gray-700 text-sm placeholder-gray-300"
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border border-gray-600 bg-gray-700 text-sm placeholder-gray-300"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border border-gray-600 bg-gray-700 text-sm placeholder-gray-300"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            {formData.username && usernameAvailable === false && (
              <p className="text-sm text-red-500">❌ Username already taken</p>
            )}
            {formData.username && usernameAvailable === true && (
              <p className="text-sm text-green-400">✅ Username available</p>
            )}

            <input
              className="p-2 rounded-xl border border-gray-600 bg-gray-700 text-sm placeholder-gray-300"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border border-gray-600 bg-gray-700 text-sm placeholder-gray-300"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 rounded-xl text-white py-2 font-semibold transition-all duration-300 disabled:opacity-50"
              disabled={usernameAvailable === false}
            >
              Register Now
            </button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-gray-300">
            <p>Already have an account?</p>
            <Link
              href="/login"
              className="py-2 px-5 bg-gray-700 border border-gray-600 rounded-xl hover:bg-green-600 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="md:block hidden w-1/2 flex items-center justify-center bg-gray-900">
          <Image
            className="rounded-2xl object-contain"
            width={400}
            height={400}
            alt="Signup Illustration"
            src="/images/face.png"
          />
        </div>
      </div>
    </section>
  );
}
