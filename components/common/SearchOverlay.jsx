"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  getAllCourseCategories,
  getPopularCourses,
  storePopularSearch,
  searchCourses,
  getPopularSearches,
  postContactQuery,
  getSiteSettings,
} from "@/app/comman/FrontApi";

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [popularSearches, setPopularSearches] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [queryForm, setQueryForm] = useState({
    phone: "",
    email: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const [siteSettings, setSiteSettings] = useState(null);
  const router = useRouter();

  // Debounce function to limit API calls
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch search results
  const fetchSearchResults = useCallback(
    debounce(async (query) => {
      if (query.trim().length >= 3) { // Only trigger search for 3 or more characters
        try {
          setLoading(true);
          const res = await searchCourses(query);
          const data = res.data?.data || [];
          setSearchResults(data);
        } catch (err) {
          console.error("Error fetching search results:", err);
          setSearchResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setSearchResults([]); // Clear results if less than 3 characters
        setLoading(false); // Ensure loading is off for fewer than 3 characters
      }
    }, 300),
    []
  );

  // Load site settings, popular searches, categories, and courses
  useEffect(() => {
    if (isOpen) {
      // Fetch site settings
      const fetchSiteSettings = async () => {
        try {
          const res = await getSiteSettings();
          setSiteSettings(res.data?.data || {});
        } catch (err) {
          console.error("Error fetching site settings:", err);
          setSiteSettings({});
        }
      };
      fetchSiteSettings();

      getPopularSearches()
        .then((res) => {
          const keywords =
            res.data?.data?.map((item) => item.search_keyword) || [];
          setPopularSearches(keywords.slice(0, 6));
        })
        .catch((err) => {
          console.error("Popular searches API failed:", err);
          const saved = JSON.parse(
            localStorage.getItem("popularSearches") || "[]"
          );
          setPopularSearches(saved.slice(0, 6));
        });

      getAllCourseCategories()
        .then((res) => setPopularCategories(res.data?.data?.slice(0, 5) || []))
        .catch((err) => console.error("Categories API failed:", err));

      getPopularCourses()
        .then((res) => setPopularCourses(res.data?.data || []))
        .catch((err) => console.error("Courses API failed:", err));
    }
  }, [isOpen]);

  // Trigger search API when query changes
  useEffect(() => {
    fetchSearchResults(searchQuery);
  }, [searchQuery, fetchSearchResults]);

  // Handle search submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const keyword = searchQuery.trim();

    try {
      await storePopularSearch({ search_keyword: keyword });

      let searches = JSON.parse(
        localStorage.getItem("popularSearches") || "[]"
      );
      searches = [keyword, ...searches.filter((k) => k !== keyword)].slice(
        0,
        10
      );
      localStorage.setItem("popularSearches", JSON.stringify(searches));
      setPopularSearches(searches);

      router.push(`/search?query=${encodeURIComponent(keyword)}`);
      onClose();
    } catch (err) {
      console.error("Error storing search keyword:", err);
    }
  };

  // Handle query form submission
  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postContactQuery({
        query: queryForm.query,
        phone: `+91${queryForm.phone}`, // Prepend +91 for Edureka format
        email: queryForm.email,
      });
      alert("Query submitted successfully!");
      setQueryForm({ phone: "", email: "", query: "" });
    } catch (err) {
      console.error("Error submitting query:", err);
      alert("Failed to submit query. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-white w-screen h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="modal-content bg-white rounded-lg h-full flex flex-col">
          {/* Header with close button and search bar */}
          <div className="flex items-center mb-6 p-6">
            <button
              onClick={onClose}
              className="text-gray-700 mr-4 hover:text-gray-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
              </svg>
            </button>
            <form onSubmit={handleSearchSubmit} className="flex-1">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search courses"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500"
                  id="search-input"
                  autoComplete="off"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.613 19.646"
                    className="w-5 h-5 fill-gray-600"
                  >
                    <path
                      fill="#5a6484"
                      d="M71.879-16.12a5.565 5.565 0 0 1-7.866 0 5.565 5.565 0 0 1 0-7.866 5.565 5.565 0 0 1 7.866 0 5.565 5.565 0 0 1 0 7.866zm-9.552-9.551a7.944 7.944 0 0 0 0 11.237 7.939 7.939 0 0 0 10.325.773L77.578-8.7a1.191 1.191 0 0 0 1.686 0 1.191 1.191 0 0 0 0-1.686l-4.925-4.958a7.938 7.938 0 0 0-.773-10.324 7.943 7.943 0 0 0-11.237 0z"
                      transform="translate(-60 28)"
                    />
                  </svg>
                </span>
              </div>
            </form>
          </div>

          {searchQuery && searchQuery.trim().length >= 3 ? ( // Only show results section if 3 or more characters
            <section className="mb-6 px-6 flex-1 overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Search Results
              </h3>
              {loading ? (
                <div className="text-center text-gray-600">Loading...</div>
              ) : searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {searchResults.map((course) => (
                    <div
                      key={course.id}
                      className="border border-gray-200 rounded-lg p-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer w-full"
                      onClick={() => {
                        router.push(`/courses-detail/${course.id}`);
                        onClose();
                      }}
                    >
                      <h4 className="font-medium text-base text-gray-900 line-clamp-2">
                        {course.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                        {course.category_name}
                      </p>
                      <span className="flex items-center gap-1 text-yellow-500 mt-2 text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="29"
                          viewBox="0 0 31 39"
                          className="w-4 h-5"
                        >
                          <text
                            data-name="😊"
                            transform="translate(0 30)"
                            fill="#192f60"
                          >
                            <tspan x="0" y="0">
                              😊
                            </tspan>
                          </text>
                        </svg>
                        &nbsp;{course.learners || "0"}+ Satisfied Learners
                      </span>
                      <a
                        href={`/courses-detail/${course.id}`}
                        className="text-blue-600 text-xs mt-2 block hover:underline flex items-center gap-1"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/all-courses/${course.id}`);
                          onClose();
                        }}
                      >
                        KNOW MORE
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="12"
                          viewBox="0 0 1024 1024"
                          className="fill-blue-600"
                        >
                          <path d="M487.304 0l-85.534 84.932 360.207 360.207h-731.859v120.471h715.595l-343.944 343.341 85.534 85.534 496.941-497.544-496.941-496.941z"></path>
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="searchfilterdata_search_field_nodata__30Prs flex-1 overflow-y-auto">
                  <div className="searchfilterdata_usersearch_input__2p0fy text-center text-gray-700 mb-4">
                    We did not understand your query{" "}
                    <span id="no-data-input">"{searchQuery}"</span>. Please
                    change your query.
                  </div>
                  <div className="searchfilterdata_titile__35FHH text-center text-gray-900 mb-4">
                    Or, share it with a course counsellor
                  </div>
                  <div className="searchfilterdata_form_field_num__1fezc searchfilterdata_otp_view_bx__3lXDI">
                    <form onSubmit={handleQuerySubmit}>
                      <div className="searchfilterdata_title__3WUh5 text-sm font-semibold mb-2 text-gray-900">
                        Drop us your query
                      </div>
                      <div className="form-group mb-3">
                        <textarea
                          rows="3"
                          placeholder="Type your query here*"
                          value={queryForm.query}
                          onChange={(e) =>
                            setQueryForm({
                              ...queryForm,
                              query: e.target.value,
                            })
                          }
                          className="form-control w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        ></textarea>
                      </div>
                      <div className="form-group mb-3 position-relative">
                        <label className="form-label text-xs text-gray-600 mb-1 block">
                          Contact Details
                        </label>
                        <div className="flex items-center">
                          <span className="countrycodedropdown_countryCodeLabel__1ZQyS text-gray-700 mr-2">
                            +91
                          </span>
                          <input
                            type="tel"
                            placeholder="Enter Phone Number*"
                            value={queryForm.phone}
                            onChange={(e) =>
                              setQueryForm({
                                ...queryForm,
                                phone: e.target.value,
                              })
                            }
                            className="form-control w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          placeholder="Enter your email*"
                          value={queryForm.email}
                          onChange={(e) =>
                            setQueryForm({
                              ...queryForm,
                              email: e.target.value,
                            })
                          }
                          className="form-control w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                        disabled={loading}
                      >
                        {loading
                          ? "Submitting..."
                          : "Send to Course Counsellor"}
                      </button>
                    </form>
                    <div className="searchfilterdata_or_text__plRm8 text-center text-gray-500 mt-4">
                      Or
                    </div>
                    <div className="searchfilterdata_num_call_text__1H5aE mt-4">
                      <div className="searchfilterdata_title__3WUh5 text-sm font-semibold mb-2 text-gray-900">
                        Talk to a course counsellor
                      </div>
                      <div className="searchfilterdata_num_ico__2H4Aa flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.523"
                          height="16.491"
                          viewBox="0 0 16.523 16.491"
                          className="fill-current text-gray-700 mr-2"
                        >
                          <path
                            fill="#192f60"
                            data-name="Path 24546"
                            d="M53.8,12.05l-2.3-2.3a1.569,1.569,0,0,0-2.2,0,2.092,2.092,0,0,0-.4.6,1.566,1.566,0,0,1-1.8,1,7.3,7.3,0,0,1-4.3-4.3,1.431,1.431,0,0,1,1-1.8,1.584,1.584,0,0,0,1-1.9,2.092,2.092,0,0,0-.4-.6L42.1.45a1.569,1.569,0,0,0-2.2,0l-1.6,1.6c-1.6,1.6.2,6,4,9.8,3.9,3.9,8.2,5.7,9.8,4l1.6-1.6a1.485,1.485,0,0,0,.1-2.2"
                            transform="translate(-37.72)"
                          />
                        </svg>
                        <div>
                          <span className="searchfilterdata_num__1lrdh">
                            <a
                              href={`tel:+91${
                                siteSettings?.[
                                  "site.course_counsellor_phone"
                                ] || "9999078612"
                              }`}
                              className="text-blue-600 hover:underline"
                            >
                              +91{" "}
                              {siteSettings?.["site.course_counsellor_phone"] ||
                                "9999078612"}
                            </a>
                          </span>
                          <span className="searchfilterdata_text__3scoe text-xs text-gray-500 block">
                            Available 24x7 for your queries
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          ) : (
            <section className="mb-6 px-6 flex-1 overflow-y-auto">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Popular Suggestions
              </h3>
              <div className="grid grid-cols-5 gap-6 w-full">
                <div className="col-span-2">
                  <div className="p-4 border border-gray-200 rounded-lg bg-white mb-4 hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-semibold mb-2 text-gray-900">
                      Popular Searches
                    </h4>
                    <ul className="list-none space-y-2">
                      {popularSearches.map((keyword, idx) => (
                        <li key={idx}>
                          <a
                            href={`/search/${encodeURIComponent(keyword)}`}
                            className="text-blue-600 hover:underline text-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              setSearchQuery(keyword);
                              fetchSearchResults(keyword);
                            }}
                          >
                            {keyword}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-semibold mb-2 text-gray-900">
                      Popular Course Categories
                    </h4>
                    <ul className="list-none space-y-2">
                      {popularCategories.map((cat) => (
                        <li key={cat.id}>
                          <a
                            href={`/courses?category=${cat.id}`}
                            className="text-blue-600 hover:underline text-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(`/courses?category=${cat.id}`);
                              onClose();
                            }}
                          >
                            {cat.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="p-4 border border-gray-200 rounded-lg bg-white mb-4 hover:shadow-md transition-shadow">
                    <h4 className="text-sm font-semibold mb-2 text-gray-900">
                      Popular Courses
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {popularCourses.slice(0, 2).map((course) => (
                        <div key={course.id} className="p-2">
                          <a
                            href={`/all-courses/${course.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(`/all-courses/${course.id}`);
                              onClose();
                            }}
                          >
                            <div className="border rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
                              <h4 className="font-medium text-sm text-gray-900">
                                {course.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {course.category_name}
                              </p>
                              <span className="flex items-center gap-1 text-yellow-500 mt-1 text-xs">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="29"
                                  viewBox="0 0 31 39"
                                  className="w-4 h-5"
                                >
                                  <text
                                    data-name="😊"
                                    transform="translate(0 30)"
                                    fill="#192f60"
                                  >
                                    <tspan x="0" y="0">
                                      😊
                                    </tspan>
                                  </text>
                                </svg>
                                &nbsp;{course.learners || "0"}+ Satisfied
                                Learners
                              </span>
                              <div className="text-blue-600 text-sm mt-2 flex items-center gap-1 hover:underline">
                                KNOW MORE
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="12"
                                  viewBox="0 0 1024 1024"
                                  className="fill-blue-600"
                                >
                                  <path d="M487.304 0l-85.534 84.932 360.207 360.207h-731.859v120.471h715.595l-343.944 343.341 85.534 85.534 496.941-497.544-496.941-496.941z"></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a
                        href="/all-courses"
                        className="text-blue-600 hover:underline text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/all-courses");
                          onClose();
                        }}
                      >
                        View All Courses
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}