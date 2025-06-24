import React, { useEffect, useState } from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to load blogs:", err));
  }, []);

  return (
    <div className="bg-[#f4f8fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#FF014F] inline-block border-b-2 border-[#FF014F] pb-2">
            Latest Blog Posts
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md overflow-hidden transition hover:shadow-xl flex flex-col min-h-[350px]"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                  <FiCalendar className="text-[#FF014F]" />
                  <span>{blog.date}</span>
                </div>

                <h2 className="text-lg font-semibold text-gray-700 mt-1 mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                <div className="mt-auto">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-[#FF014F] font-medium text-sm inline-flex items-center gap-1 hover:underline"
                  >
                    Read More <FiArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
