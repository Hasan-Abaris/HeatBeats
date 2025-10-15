// app/blogs/[id]/page.jsx
import BlogCards from "@/components/view/BlogCards";
import { getBlogDetails } from "@/app/comman/FrontApi";
import React from "react";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export async function generateMetadata({ params }) {
  const { id } = params; // ✅ use the correct param
  try {
    const res = await fetch(`${baseUrl}api/blogs/get-blog-details/${id}`, {
      headers: { "x-api-key": xApiKey },
      cache: "no-store",
    });
    const response = await res.json();
    const blog = response?.data;

    return {
      title: blog?.title ? `${blog.title} | EduNation` : `Blog #${id} | EduNation`,
      description: blog?.meta_description || `Read blog post number ${id} in detail.`,
    };
  } catch (error) {
    return {
      title: `Blog #${id} | EduNation`,
      description: `Blog post details for ID ${id}`,
    };
  }
}

export default async function BlogDetailsPage({ params }) {
  const { id } = params; // ✅ use the correct param
  if (!id) {
    return (
      <div className="text-center text-gray-600 py-10">
        Invalid blog ID.
      </div>
    );
  }

  try {
    const response = await getBlogDetails(id);
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
      blogId: id,
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
