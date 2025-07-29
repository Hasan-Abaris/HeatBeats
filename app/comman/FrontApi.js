import axios from "axios";
import { baseUrl, xApiKey } from "./UrlCollection";

//  Registration API
export const registration = (payload) => {
  return axios.post(`${baseUrl}user/register`, payload, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Login API
export const login = (payload) => {
  return axios.post(`${baseUrl}user/login`, payload, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Update Password API
export const updatePassword = (payload) => {
  return axios.put(`${baseUrl}user/update-password`, payload, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
};

//  Request Call API
export const getRequestCall = (payload) => {
  return axios.post(`${baseUrl}popup/user-call-request`, payload, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Contact Query API
export const postContactQuery = (payload) => {
  return axios.post(`${baseUrl}popup/user-query`, payload, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Blog List API
export const getBlogList = () => {
  return axios.get(`${baseUrl}blog/get-all-blogs`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Review List API
export const getReviewList = () => {
  return axios.get(`${baseUrl}review/get-all-reviews`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Category List API
export const getCategiryList = () => {
  return axios.get(`${baseUrl}category/get-all-categories`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Clients List API
export const getClientsList = () => {
  return axios.get(`${baseUrl}client/get-all-clients`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  New: Hiring Companies API
export const getHiringCompanies = () => {
  return axios.get(`${baseUrl}company/get-all-hiring-companies`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

//  Course APIs

// 1. Get All Courses
export const getAllCourses = () => {
  return axios.get(`${baseUrl}course/get-all-courses`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

// 2. Get Course Details by ID
export const getCourseDetails = (id) => {
  return axios.get(`${baseUrl}course/get-course-details/${id}`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};

// 3. Get All Courses by Category ID
export const getCoursesByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `${baseUrl}course/get-all-courses?category_id=${categoryId}`,
      { headers: { "x-api-key": xApiKey } }
    );
    console.log("getCoursesByCategory response: ", response.data);
    return response;
  } catch (error) {
    console.error("Error in getCoursesByCategory", error);
    throw error;
  }
};

export const submitCounsellorQuery = async (data) => {
  return await axios.post(`${baseUrl}course/counsellor-query`, data, {
    headers: { "x-api-key": xApiKey },
  });
};

export const searchCourses = async (query) => {
  return await axios.get(`${baseUrl}course/search?query=${query}`, {
    headers: { "x-api-key": xApiKey },
  });
};

//  Get All Course Categories API
export const getAllCourseCategories = async () => {
  return axios.get(`${baseUrl}category/get-all-categories`, {
    headers: {
      "x-api-key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};
// ✅ 4. Get All Courses by Course Category ID
export const getCoursesByCourseCategory = async (courseCategoryId) => {
  try {
    const response = await axios.get(
      `${baseUrl}course/get-all-courses?course_category_id=${courseCategoryId}`,
      {
        headers: {
          "X-API-Key": xApiKey,
        },
      }
    );
    console.log("getCoursesByCourseCategory response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in getCoursesByCourseCategory", error);
    throw error;
  }
};


//  Blog Details API (NEW - Needs to be added)
export const getBlogDetails = (id) => {
  return axios.get(`${baseUrl}blog/get-blog-details/${id}`, {
    headers: {
      "X-API-Key": xApiKey,
      "Content-Type": "application/json",
    },
  });
};
export const getSiteMenus = () => {
  return axios.post(`${baseUrl}menu/get-site-menus`, {}, {
    headers: {
      'X-API-Key': xApiKey,
      'Content-Type': 'application/json',
    },
  });
};
//  Get All Banners API
export const getAllBanners = () => {
  return axios.get(`${baseUrl}banner/get-all-banners`, {
    headers: {
      'X-API-Key': xApiKey,
      'Content-Type': 'application/json',
    },
  });
};
//  Get Banner Details (POST with payload)
export const getBannerDetails = (payload) => {
  return axios.post(`${baseUrl}banner/get-banner-details`, payload, {
    headers: {
      'X-API-Key': xApiKey,
      'Content-Type': 'application/json',
    },
  });
};

//  Get Site Settings
export const getSiteSettings = () => {
  return axios.get(`${baseUrl}setting/get-site-settings`, {
    headers: {
      'X-API-Key': xApiKey,
    },
  });
};

export const checkUsernameAvailability = async (username) => {
  return axios.get(`${baseUrl}user/check-availability?field=username&value=${username}`, {
    headers: {
      'x-api-key': xApiKey,
    },
  });
};

// Webinars Api

export const getWebinarDetails = async (id) => {
  return axios.get(`${baseUrl}webinar/get-webinar-details/${id}`, {
    headers: {
      'x-api-key': xApiKey,
    },
  });
};
export const getAllWebinars = async () => {
  return axios.get(`${baseUrl}webinar/get-all-webinars`, {
    headers: {
      'x-api-key': xApiKey,
    },
  });
};
export const getWebinarsByCategory = async (categoryId) => {
  return axios.get(`${baseUrl}webinar/get-all-webinars?category_id=${categoryId}`, {
    headers: {
      'x-api-key': xApiKey,
    },
  });
};

export const registerWebinar = async (id, payload) => {
  return axios.post(`${baseUrl}webinar/${id}/register`, payload, {
    headers: {
      'x-api-key': xApiKey,
      'Content-Type': 'application/json',
    },
  });
};

// Training 

export const submitTrainingQuery = async (formData) => {
  return axios.post(`${baseUrl}training/query`, formData, {
    headers: {
      'x-api-key': xApiKey,
      'Content-Type': 'application/json'
    }
  });
};

// designation api

export const getAllDesignations = async () => {
  return axios.get(`${baseUrl}designation/get-all-designations`, {
    headers: {
      "x-api-key": xApiKey,
    },
  });
};


