"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [studentData, setStudentData] = useState({ username: "", password: "" });
  const [employerData, setEmployerData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLoginSuccess = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("userChange"));
    alert(`✅ Welcome ${user.username || user.email}!`);
    router.push("/");
  };

  const handleStudentLogin = (e) => {
    e.preventDefault();
    if (!studentData.username || !studentData.password) {
      alert("⚠️ Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleLoginSuccess({ type: "student", username: studentData.username });
    }, 1000);
  };

  const handleEmployerLogin = (e) => {
    e.preventDefault();
    if (!employerData.email || !employerData.password) {
      alert("⚠️ Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleLoginSuccess({ type: "employer", email: employerData.email });
    }, 1000);
  };

  return (
    <section className="py-20 flex items-center justify-center min-h-screen">
      {loading && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center text-white text-xl z-50">
          Loading...
        </div>
      )}

      <div className="rounded bg-black border border-gray-700 py-6 px-6 text-white">
        <Tabs defaultValue="Student" className="w-[350px]">
          <TabsList className="grid w-full grid-cols-2 p-0">
            <TabsTrigger value="Student">Student</TabsTrigger>
            <TabsTrigger value="Employer">Employer / T&P</TabsTrigger>
          </TabsList>

          {/* Student Login */}
          <TabsContent value="Student">
            <form onSubmit={handleStudentLogin} className="flex flex-col gap-4 text-start">
              <div>
                <Label htmlFor="studentUsername">Username</Label>
                <Input
                  id="studentUsername"
                  type="text"
                  placeholder="Enter your username"
                  value={studentData.username}
                  onChange={(e) =>
                    setStudentData({ ...studentData, username: e.target.value })
                  }
                  className="bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="studentPassword">Password</Label>
                <Input
                  id="studentPassword"
                  type="password"
                  placeholder="Enter your password"
                  value={studentData.password}
                  onChange={(e) =>
                    setStudentData({ ...studentData, password: e.target.value })
                  }
                  className="bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 py-2 rounded font-semibold transition-all duration-300"
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
                onClick={() => alert("🔒 Google Login Coming Soon (Static Demo)")}
                className="bg-gray-800 border py-2 w-full rounded mt-5 flex justify-center items-center text-sm hover:bg-green-500 transition-all duration-300 text-white"
              >
                <FcGoogle />
                <span className="pl-2">Login with Google</span>
              </button>

              <div className="mt-5 text-xs border-b border-green-400 py-4">
                <Link href="/change-password" className="text-green-400">
                  Forgot your password?
                </Link>
              </div>

              <div className="mt-3 text-xs flex justify-between items-center text-green-400">
                <p>Don't have an account?</p>
                <Link
                  href="/signup"
                  className="py-2 px-5 bg-gray-800 border border-green-400 rounded hover:bg-green-500 transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            </form>
          </TabsContent>

          {/* Employer Login */}
          <TabsContent value="Employer">
            <form onSubmit={handleEmployerLogin} className="flex flex-col gap-4 text-start">
              <div>
                <Label htmlFor="employerEmail">Email</Label>
                <Input
                  id="employerEmail"
                  type="email"
                  placeholder="employer@example.com"
                  value={employerData.email}
                  onChange={(e) =>
                    setEmployerData({ ...employerData, email: e.target.value })
                  }
                  className="bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="employerPassword">Password</Label>
                <Input
                  id="employerPassword"
                  type="password"
                  placeholder="Enter your password"
                  value={employerData.password}
                  onChange={(e) =>
                    setEmployerData({ ...employerData, password: e.target.value })
                  }
                  className="bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 py-2 rounded font-semibold transition-all duration-300"
              >
                Login
              </button>

              <div className="mt-5 text-xs border-b border-green-400 py-4">
                <Link href="/change-password" className="text-green-400">
                  Forgot your password?
                </Link>
              </div>

              <div className="mt-3 text-xs flex justify-between items-center text-green-400">
                <p>Don't have an account?</p>
                <Link
                  href="/signup"
                  className="py-2 px-5 bg-gray-800 border border-green-400 rounded hover:bg-green-500 transition-all duration-300"
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
