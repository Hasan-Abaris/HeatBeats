"use client";

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RecoverPassword() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="rounded-2xl shadow-lg w-96 md:w-1/2 items-center">
        {/* form */}
        <div className="text-center md:text-start  py-8 px-8 md:px-8 bg-gray-100">
          <h2 className="font-bold text-2xl text-[#002D74]">
            Reset Your Password!
          </h2>
          <p className="text-xs mt-4 text-[#002D74]">
            Enter the email of your account to reset the password. Then you will
            receive a link to email to reset the password. If you have any issue
            about reset password contact us.
          </p>
          <form action className="flex flex-col gap-4">
            <input
              className="p-2 mt-6 rounded-xl border text-sm"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />

            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Reset Password
            </button>
          </form>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <Link href={"/login"}>Sign In in your account</Link>
            <Link
              href="/signup"
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Not a member? Sign Up
            </Link>
          </div>
        </div>
        {/* image */}
      </div>
    </section>
  );
}
