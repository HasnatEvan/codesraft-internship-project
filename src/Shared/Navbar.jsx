import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight, FaHome, FaBlog, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import image from '../../src/assets/Navbar/Navbarimage-01.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 ${
      isActive
        ? "text-black font-semibold bg-gray-200"
        : "text-gray-700 hover:text-black hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-[#ECF0F3] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 text-2xl font-bold text-black select-none"
          >
            <img
              src={image}
              alt="CodeSpark IT Logo"
              className="w-10 h-10 object-cover rounded-full shadow-sm"
              loading="lazy"
            />
            CodeSpark IT
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
              <FaHome className="text-lg" /> Home
            </NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>
              <FaBlog className="text-lg" /> Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              <FaEnvelope className="text-lg" /> Contact Us
            </NavLink>

            {/* Get Started Button */}
            <NavLink to="/" onClick={closeMenu}>
              <button
                className="flex items-center gap-2 px-6 py-2 rounded-sm text-sm font-semibold bg-[#E7ECEF] shadow-md
                text-[#FF014F] transition-all duration-300
                hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] hover:text-white"
              >
                Get Started
                <FaArrowRight className="text-black group-hover:text-white transition duration-300" />
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl text-black focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 text-sm font-medium px-2">
            <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
              <FaHome className="text-lg" /> Home
            </NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>
              <FaBlog className="text-lg" /> Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              <FaEnvelope className="text-lg" /> Contact Us
            </NavLink>

            <NavLink to="/" onClick={closeMenu}>
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-2 rounded-sm text-sm font-semibold
                bg-[#E7ECEF] shadow-md text-[#FF014F] transition-all duration-300
                hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] hover:text-white"
              >
                Get Started
                <FaArrowRight className="text-black transition duration-300 group-hover:text-white" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
