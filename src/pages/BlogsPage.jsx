// pages/BlogsPage.jsx
import { useEffect, useState } from "react";
import { getBlogs } from "../services/blogService";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // loader state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false); // stop loader after fetch
      }
    };
    fetchBlogs();
  }, []);

  // Convert ISO timestamp to "time ago"
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
    if (diffMinutes < 60)
      return `${diffMinutes} min${diffMinutes > 1 ? "s" : ""} ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30)
      return `${Math.floor(diffDays / 7)} week${
        Math.floor(diffDays / 7) > 1 ? "s" : ""
      } ago`;
    if (diffDays < 365)
      return `${Math.floor(diffDays / 30)} month${
        Math.floor(diffDays / 30) > 1 ? "s" : ""
      } ago`;
    return `${Math.floor(diffDays / 365)} year${
      Math.floor(diffDays / 365) > 1 ? "s" : ""
    } ago`;
  };

  return (
    <div className="min-h-screen px-6 pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingHearts />
      </div>
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#212878] pt-10">
          Blogs
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Discover articles, stories, and insights from our community
        </p>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center mt-20 h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      ) : blogs.length === 0 ? (
        // No blogs message
        <div className="text-center text-gray-500 mt-20 text-lg">
          🚀 No blogs yet. Start by adding one!
        </div>
      ) : (
        // Blog Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer group transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              {/* Image with hover zoom */}
              <div className="overflow-hidden relative">
                <img
                  src={blog.photo}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-t-2xl transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-80 transition"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#212878] mb-2 line-clamp-2 group-hover:text-[#1aab3c] transition">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.shortDescription ||
                    blog.description?.slice(0, 100) + "..."}
                </p>

                {/* Meta Info */}
                <div className="mt-5 flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center gap-1 text-lg">
                    ✍️ {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    👀 {blog.views || 0}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏰ {timeAgo(blog.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
