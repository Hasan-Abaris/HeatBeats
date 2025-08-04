// app/blogs/[id]/page.jsx
import BlogCards from "@/components/view/BlogCards";
import { getBlogDetails } from "@/app/comman/FrontApi";
import { baseUrl, xApiKey } from "@/app/comman/UrlCollection";
import React from "react";

// ✅ Optional: Pre-render known blog IDs
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export async function generateMetadata({ params }) {
  const { id: blogId } = params; // ✅ Correct destructuring

  try {
    const res = await fetch(`${baseUrl}api/blogs/get-blog-details/${blogId}`, {
      headers: {
        "x-api-key": xApiKey,
      },
      cache: "no-store",
    });

    const response = await res.json();
    const blog = response?.data;

    return {
      title: blog?.title ? `${blog.title} | EduNation` : `Blog #${blogId} | EduNation`,
      description: blog?.meta_description || `Read blog post number ${blogId} in detail.`,
    };
  } catch (error) {
    return {
      title: `Blog #${blogId} | EduNation`,
      description: `Blog post details for ID ${blogId}`,
    };
  }
}

// ✅ Blog Details Page (Async Server Component)
export default async function BlogDetailsPage({ params }) {
  const blogId = params?.id;

  if (!blogId) {
    return (
      <div className="text-center text-gray-600 py-10">
        Invalid blog ID.
      </div>
    );
  }

  try {
    const response = await getBlogDetails(blogId);
    const blog = response?.data?.data;

    if (!blog || !blog.title) {
      return (
        <div className="text-center text-gray-600 py-10">
          Blog not found.
        </div>
      );
    }

    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <BlogCards blog={blog} />
      </main>
    );
  } catch (error) {
    console.error("❌ Blog fetch failed:", {
      blogId,
      message: error?.message,
      response: error?.response?.data,
    });

    return (
      <div className="text-center text-red-600 py-10">
        Failed to load blog data. Please try again later.
      </div>
    );
  }
}
