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

  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle image upload to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setForm({ ...form, photo: data.secure_url });
        setImagePreview(data.secure_url);
      } else {
        alert("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.photo) {
      alert("Please upload an image");
      return;
    }

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
            <label className="block text-gray-600 mb-1">Blog Image</label>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-3 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg border-2 border-blue-200"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview("");
                    setForm({ ...form, photo: "" });
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
                >
                  ✕
                </button>
              </div>
            )}

            {/* File Input */}
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
              />

              {/* Upload Progress */}
              {uploading && (
                <div className="mt-2 flex items-center gap-2 text-blue-600">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span className="text-sm">Uploading image...</span>
                </div>
              )}
            </div>
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
