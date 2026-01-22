// pages/BlogDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../services/blogService";
import FloatingHearts from "../components/FloatingHearts";

// Reuse same timeAgo util as BlogsPage
const timeAgo = (timestamp) => {
  if (!timestamp) return "Unknown";
  const blogDate = new Date(timestamp);
  if (isNaN(blogDate.getTime())) return "Unknown";

  const now = new Date();
  const diffMs = now - blogDate;
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) return "Now";
  if (diffMinutes < 60) return `${diffMinutes} min${diffMinutes > 1 ? "s" : ""} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? "s" : ""} ago`;
  return `${Math.floor(diffDays / 365)} year${Math.floor(diffDays / 365) > 1 ? "s" : ""} ago`;
};

// ⬇⬇ FORMAT BLOG TEXT WITH DYNAMIC HEADINGS ⬇⬇
const formatBlogText = (text) => {
  if (!text) return "";

  return text
    // 🔵 MAIN HEADING: *Heading*
    .replace(
      /^\*(.+?)\*$/gm,
      "<h2 class='text-2xl font-bold text-[#212878] mt-6 mb-2'>$1</h2>"
    )

    // 🟢 SECOND MAIN HEADING: #Heading#
    .replace(
      /^#(.+?)#$/gm,
      "<h3 class='text-xl font-semibold text-[#1aab3c] mt-4 mb-1'>$1</h3>"
    )

    // 🧾 Paragraph formatting
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>")

    // Wrap everything in <p>
    .replace(/^/, "<p>")
    .concat("</p>");
};


export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 animate-pulse">
        <div className="w-full h-72 bg-gray-200 rounded-lg mb-6"></div>
        <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <p className="p-6 text-center text-gray-500">Blog not found ❌</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingHearts />
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-96">
        <img
          src={blog.photo}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center px-4">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-2xl -mt-16 relative z-10">
        <div className="flex flex-wrap justify-between items-center text-gray-600 text-sm mb-6">
          <span>✍️ By <span className="font-semibold">{blog.author}</span></span>
          <span>👀 {blog.views || 0} views</span>
          <span>⏰ {timeAgo(blog.createdAt)}</span>
        </div>

        {/* ⬇⬇ Render formatted HTML here ⬇⬇ */}
        <div
          className="text-gray-700 leading-relaxed text-lg space-y-4"
          dangerouslySetInnerHTML={{ __html: formatBlogText(blog.description) }}
        ></div>
      </div>
    </div>
  );
}
