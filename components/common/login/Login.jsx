"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loadar from "@/app/comman/Loader";
import { login } from "@/app/comman/FrontApi";
import { ErrorTosters, Tosters } from "@/app/comman/Tosters";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [studentData, setStudentData] = useState({ username: "", password: "" });
  const [employerData, setEmployerData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // 🔹 Student login
  const handleStudentLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await login(studentData);
      if (res.status === 200) {
        const userData = res.data.data.user; // check if it's "user" or "username"
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(userData));

        Tosters("Logged in successfully!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      ErrorTosters(err?.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Employer login
  const handleEmployerLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!employerData.email || !employerData.password) {
        toast.error("Please fill in all fields");
        return;
      }

      const res = await login(employerData);
      if (res.status === 200) {
        const userData = res.data.data.user;
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(userData));

        Tosters("Employer logged in successfully!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      console.error("Employer login error:", error);
      ErrorTosters(error?.response?.data?.message || "Employer login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 flex items-center justify-center grayBackground">
      {loading && <Loadar />}
      <div className="rounded bg-white border py-6 px-6">
        <Tabs defaultValue="Student" className="w-[350px]">
          <TabsList className="grid w-full grid-cols-2 p-0">
            <TabsTrigger value="Student">Student</TabsTrigger>
            <TabsTrigger value="Employer">Employer / T&P</TabsTrigger>
          </TabsList>

          {/* Student Login */}
          <TabsContent value="Student">
            <form onSubmit={handleStudentLogin} className="flex flex-col gap-4 text-start">
              <div className="mb-2">
                <Label htmlFor="studentEmail">User Name</Label>
                <Input
                  id="studentEmail"
                  type="text"
                  placeholder="username"
                  value={studentData.username}
                  onChange={(e) =>
                    setStudentData({ ...studentData, username: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <Label htmlFor="studentPassword">Password</Label>
                <Input
                  id="studentPassword"
                  type="password"
                  placeholder="Password"
                  value={studentData.password}
                  onChange={(e) =>
                    setStudentData({ ...studentData, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-[#002D74] text-white py-2 rounded hover:scale-105 duration-300"
              >
                Login
              </button>

              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>

              <button
                type="button"
                className="bg-white border py-2 w-full rounded mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
              >
                <FcGoogle />
                <span className="pl-2">Login with Google</span>
              </button>

              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <Link href="/change-password">Forgot your password?</Link>
              </div>
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <Link
                  href="/signup"
                  className="py-2 px-5 bg-white border rounded hover:scale-110 duration-300"
                >
                  Register
                </Link>
              </div>
            </form>
          </TabsContent>

          {/* Employer Login */}
          <TabsContent value="Employer">
            <form onSubmit={handleEmployerLogin} className="flex flex-col gap-4 text-start">
              <div className="mb-2">
                <Label htmlFor="employerEmail">Email</Label>
                <Input
                  id="employerEmail"
                  type="email"
                  placeholder="employer@example.com"
                  value={employerData.email}
                  onChange={(e) =>
                    setEmployerData({ ...employerData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <Label htmlFor="employerPassword">Password</Label>
                <Input
                  id="employerPassword"
                  type="password"
                  placeholder="Password"
                  value={employerData.password}
                  onChange={(e) =>
                    setEmployerData({ ...employerData, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-[#002D74] text-white py-2 rounded hover:scale-105 duration-300"
              >
                Login
              </button>

              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <Link href="/change-password">Forgot your password?</Link>
              </div>
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <Link
                  href="/signup"
                  className="py-2 px-5 bg-white border rounded hover:scale-110 duration-300"
                >
                  Register
                </Link>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
