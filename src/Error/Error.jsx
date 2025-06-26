import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="max-w-md">
        <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Sorry! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#FF014F] text-white px-6 py-3 rounded-lg hover:bg-[#ff014db9] transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
