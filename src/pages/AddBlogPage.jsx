// pages/AddBlogPage.jsx
import { useState } from "react";
import { addBlog } from "../services/blogService";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";

export default function AddBlogPage() {
  const [form, setForm] = useState({
    photo: "",
    title: "",
    description: "",
    author: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add createdAt timestamp automatically
    const blogWithDate = {
      ...form,
      createdAt: new Date().toISOString(), // store in ISO format
    };

    await addBlog(blogWithDate);
    navigate("/blogs");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 pt-32">
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingHearts />
      </div>

      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#212878] mb-8 text-center">
        ✍️ Add Blog
      </h1>

      {/* Form Container */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Create a New Blog Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Image URL</label>
            <input
              name="photo"
              placeholder="Enter image link"
              value={form.photo}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Title</label>
            <input
              name="title"
              placeholder="Enter blog title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Author</label>
            <input
              name="author"
              placeholder="Enter author name"
              value={form.author}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1aab3c] hover:bg-[#212878] text-white py-3 rounded-lg text-lg font-semibold shadow-md transition duration-200"
          >
            🚀 Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}
