import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setBlog(found);
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 px-4">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="bg-[#f4f8fc] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-[#f4f8fc]  p-5 sm:p-8 ">
        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[600px] object-contain rounded-md mb-6"
        />


        {/* Category & Date */}
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 mb-2">
          <span className="uppercase font-semibold text-[#FF014F]">{blog.category}</span>
          <span className="flex items-center gap-1 mt-1 sm:mt-0">
            <FiCalendar className="text-[#FF014F]" />
            {blog.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {blog.title}
        </h1>

        {/* Excerpt */}
        <p className="text-gray-600 italic mb-6">{blog.excerpt}</p>

        {/* Description */}
        <div className="text-base text-gray-700 space-y-4 leading-relaxed whitespace-pre-line">
          {blog.description}
        </div>

        {/* Back Link */}
        <div className="mt-10">
          <Link
            to="/blog"
            className="text-[#FF014F] text-sm font-medium hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
