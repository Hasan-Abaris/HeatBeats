import axios from "axios";
import { baseUrl, xApiKey } from "./UrlCollection";

// ==================== USER APIs ====================

// Registration
export const registration = (payload) =>
  axios.post(`${baseUrl}user/register`, payload, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// Login
export const login = (payload) =>
  axios.post(`${baseUrl}user/login`, payload, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// Update Password
export const updatePassword = (payload) =>
  axios.put(`${baseUrl}user/update-password`, payload, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

// ==================== POPUPS & CONTACT ====================

export const getRequestCall = (payload) =>
  axios.post(`${baseUrl}popup/user-call-request`, payload, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const postContactQuery = (payload) =>
  axios.post(`${baseUrl}popup/user-query`, payload, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// ==================== BLOG & REVIEWS ====================

export const getBlogList = () =>
  axios.get(`${baseUrl}blog/get-all-blogs`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getBlogDetails = (id) =>
  axios.get(`${baseUrl}blog/get-blog-details/${id}`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getReviewList = () =>
  axios.get(`${baseUrl}review/get-all-reviews`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// ==================== CATEGORY & CLIENTS ====================

export const getCategiryList = () =>
  axios.get(`${baseUrl}category/get-all-categories`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getAllCourseCategories = () =>
  axios.get(`${baseUrl}category/get-all-categories`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getAllCourseCategoriesV2 = () =>
  axios.get(`${baseUrl}course/get-all-course-categories`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getClientsList = () =>
  axios.get(`${baseUrl}client/get-all-clients`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// ==================== COMPANY ====================

export const getHiringCompanies = () =>
  axios.get(`${baseUrl}company/get-all-hiring-companies`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// ==================== COURSES ====================

export const getAllCourses = () =>
  axios.get(`${baseUrl}course/get-all-courses`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getCourseDetails = (id) =>
  axios.get(`${baseUrl}course/get-course-details/${id}`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getCoursesByCategory = (categoryId) =>
  axios.get(`${baseUrl}course/get-all-courses?category_id=${categoryId}`, {
    headers: { "X-API-Key": xApiKey },
  });

export const submitCounsellorQuery = (data) =>
  axios.post(`${baseUrl}course/counsellor-query`, data, {
    headers: { "X-API-Key": xApiKey },
  });

export const searchCourses = (query) =>
  axios.get(`${baseUrl}course/search?query=${query}`, {
    headers: { "X-API-Key": xApiKey },
  });

// ✅ NEW: Popular Courses API
export const getPopularCourses = () =>
  axios.get(`${baseUrl}course/get-all-courses?is_popular=1`, {
    headers: { "X-API-Key": xApiKey },
  });

// ✅ Store Popular Search (POST) — called when user searches
export const storePopularSearch = (payload) =>
  axios.post(`${baseUrl}search/store-popular-search`, payload, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });

  // ✅ Get Popular Searches (GET)
export const getPopularSearches = () =>
  axios.get(`${baseUrl}search/get-popular-searches`, {
    headers: { "X-API-Key": xApiKey },
  });

// ==================== SITE SETTINGS & MENUS ====================

// ✅ Get menu by single slug
export const getMenuBySlug = (slug) =>
  axios.post(
    `${baseUrl}menu/get-site-menus`,
    { slugs: [slug] }, // only one slug in array
    {
      headers: {
        "X-API-Key": xApiKey,
        "Content-Type": "application/json",
      },
    }
  );

// ✅ Get all menus (no slug filter, returns all menu groups)
export const getAllMenus = () =>
  axios.post(
    `${baseUrl}menu/get-site-menus`,
    {}, // empty body → API returns all menus
    {
      headers: {
        "X-API-Key": xApiKey,
        "Content-Type": "application/json",
      },
    }
  );



export const getAllBanners = () =>
  axios.get(`${baseUrl}banner/get-all-banners`, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getBannerDetails = (payload) =>
  axios.post(`${baseUrl}banner/get-banner-details`, payload, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

export const getSiteSettings = () =>
  axios.get(`${baseUrl}setting/get-site-settings`, {
    headers: { "X-API-Key": xApiKey },
  });

// ==================== WEBINARS ====================

export const getWebinarDetails = (id) =>
  axios.get(`${baseUrl}webinar/get-webinar-details/${id}`, {
    headers: { "X-API-Key": xApiKey },
  });

export const getAllWebinars = () =>
  axios.get(`${baseUrl}webinar/get-all-webinars`, {
    headers: { "X-API-Key": xApiKey },
  });

export const getWebinarsByCategory = (categoryId) =>
  axios.get(`${baseUrl}webinar/get-all-webinars?category_id=${categoryId}`, {
    headers: { "X-API-Key": xApiKey },
  });

export const registerWebinar = (id, payload) =>
  axios.post(`${baseUrl}webinar/${id}/register`, payload, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// ==================== TRAINING ====================

export const submitTrainingQuery = (formData) =>
  axios.post(`${baseUrl}training/query`, formData, {
    headers: { "X-API-Key": xApiKey, "Content-Type": "application/json" },
  });

// ==================== DESIGNATIONS ====================

export const getAllDesignations = () =>
  axios.get(`${baseUrl}designation/get-all-designations`, {
    headers: { "X-API-Key": xApiKey },
  });
