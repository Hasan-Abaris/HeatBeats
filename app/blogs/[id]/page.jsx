import { getBlogDetails } from "@/app/comman/FrontApi";
import BlogCards from "@/components/view/BlogCards";

// 🔧 Static params for export mode
export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

// ✅ Blog Details Page
export default async function BlogDetailsPage({ params }) {
  const blogId = params?.id;

  console.log("Blog ID from params:", blogId);

  try {
    const response = await getBlogDetails(blogId);
    const blog = response?.data;

    return (
      <div>
        <BlogCards blog={blog} />
      </div>
    );
  } catch (error) {
    console.error(" Blog fetch failed:", {
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

