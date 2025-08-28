"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  searchCourses,
  getAllCourseCategories,
  getRequestCall,
} from "@/app/comman/FrontApi";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = (searchParams.get("query") || "").trim();

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);

  // form states
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  // 🔍 Search courses on query
  useEffect(() => {
    if (!query) return;
    let alive = true;
    (async () => {
      setLoading(true);
      try {
        console.log("🔍 Searching courses for query:", query);
        const res = await searchCourses(query);
        console.log("✅ searchCourses response:", res);

        if (alive) setResults(res?.data?.data || []);
      } catch (e) {
        console.error("❌ searchCourses failed:", e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [query]);

  // 📂 Fetch categories
  useEffect(() => {
    (async () => {
      try {
        console.log("📂 Fetching categories...");
        const res = await getAllCourseCategories();
        console.log("✅ getAllCourseCategories response:", res);

        setCategories(res?.data?.data?.slice(0, 12) || []);
      } catch (e) {
        console.error("❌ getAllCourseCategories failed:", e);
      }
    })();
  }, []);

  // 📞 Handle callback form submit
  const handleCallBack = async (e) => {
    e.preventDefault();
    setFormMessage("");
    setFormError("");

    console.log("📞 Submitting callback request with data:", { phone, email });

    try {
      const res = await getRequestCall({ phone, email });
      console.log("✅ getRequestCall response:", res);

      if (res?.status) {
        setFormMessage(res.message || "✅ Request submitted successfully!");
        setPhone("");
        setEmail("");
      } else {
        console.warn("⚠️ getRequestCall returned false status:", res);
        setFormError("❌ Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("❌ getRequestCall failed:", err);
      setFormError("❌ Failed to submit request.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {query && (
        <h1 className="text-xl md:text-2xl font-semibold mb-6">
          {results.length} courses for{" "}
          <span className="text-blue-600">“{query}”</span>
        </h1>
      )}

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading…</p>}

      {/* Results */}
      {!loading && results.length > 0 && (
        <div className="space-y-5">
          {results.map((course) => (
            <div
              key={course.id}
              className="flex gap-5 border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{course.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {course.category_name}
                </p>

                <ul className="text-sm text-gray-700 mt-2 list-disc pl-5">
                  <li>Some key feature here</li>
                  <li>Another feature here</li>
                  <li>Etc…</li>
                </ul>

                <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                  <span>{course.learners || 0}+ Learners</span>
                  <span>
                    ⭐ {course.rating || "4.2"} ({course.reviews || 1000})
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <button
                  onClick={() => router.push(`/all-courses/${course.id}`)}
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md"
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results fallback */}
      {!loading && query && results.length === 0 && (
        <>
          <div className="rounded-xl border p-5 bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-2">
              Your search "{query}" did not match any courses
            </h2>
            <p className="text-sm text-gray-600">
              Tell us what you are looking for and we will help you find it
            </p>

            <form
              onSubmit={handleCallBack}
              className="mt-3 flex flex-col items-center gap-3"
            >
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your mobile number"
                className="border rounded-md px-3 py-2 w-full max-w-sm"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border rounded-md px-3 py-2 w-full max-w-sm"
                required
              />
              <button className="bg-gray-800 text-white rounded-md px-4 py-2 w-full max-w-sm">
                Get a call back
              </button>
            </form>

            {formMessage && (
              <p className="text-sm mt-2 text-green-600">{formMessage}</p>
            )}
            {formError && (
              <p className="text-sm mt-2 text-red-600">{formError}</p>
            )}
          </div>

          {/* Discover Categories */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">
              Discover Top Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className="px-4 py-2 border rounded-full hover:bg-gray-50"
                  onClick={() => router.push(`/courses?category=${cat.id}`)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
