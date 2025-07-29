'use client';

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ErrorTosters, Tosters } from "@/app/comman/Tosters";
import { registration } from "@/app/comman/FrontApi";
import { useRouter } from 'next/navigation';
import Loadar from "@/app/comman/Loader";
import { baseUrl, xApiKey } from '@/app/comman/UrlCollection';

export default function SignupPage() {
  const router = useRouter();
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

  const checkUsernameAvailability = async (value) => {
    if (!value) return;
    try {
      const res = await axios.get(`${baseUrl}user/check-availability`, {
        params: {
          field: "username",
          value: value,
        },
        headers: {
          'x-api-key': xApiKey,
        },
      });
      setUsernameAvailable(res.data.available);
    } catch (err) {
      console.error("Username check failed:", err);
      setUsernameAvailable(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "username") {
      checkUsernameAvailability(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usernameAvailable === false) {
      ErrorTosters("Username is already taken.");
      return;
    }

    setLoading(true);

    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
    };

    try {
      const res = await registration(payload);
      if (res.status === 201) {
        localStorage.setItem("registertoken", res.data.data.token);
        Tosters('Registered successfully!');
        setLoading(false);
        setTimeout(() => router.push('/login'), 2000);
      }
    } catch (err) {
      setLoading(false);
      ErrorTosters(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {loading && <Loadar />}
      <div className="bgBlueDark flex rounded-2xl shadow-lg max-w-3xl items-center">
        <div className="md:w-1/2 text-center md:text-start py-8 px-8 md:px-8 bg-gray-100">
          <h2 className="font-bold text-2xl text-[#002D74]">Sign up</h2>
          <p className="text-xs mt-2 text-[#002D74]">Signup to continue...</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-4 rounded-xl border text-sm"
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border text-sm"
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border text-sm"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border text-sm"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {formData.username && (
              <p className={`text-sm ${usernameAvailable ? "text-green-600" : "text-red-600"}`}>
                {usernameAvailable === true
                  ? " Username is available"
                  : usernameAvailable === false
                  ? " Username already taken"
                  : ""}
              </p>
            )}
            <input
              className="p-2 rounded-xl border text-sm"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border text-sm"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              disabled={usernameAvailable === false}
            >
              Register Now
            </button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <Link
              href={"/login"}
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            width={400}
            height={500}
            alt="Login"
            src="/assets/9472338.webp"
          />
        </div>
      </div>
    </section>
  );
}
