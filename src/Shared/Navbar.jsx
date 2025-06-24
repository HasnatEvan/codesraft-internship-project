import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight, FaHome, FaBlog, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import image from '../../src/assets/Navbar/Navbarimage-01.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 ${isActive
            ? "text-black font-semibold bg-gray-200"
            : "text-gray-700 hover:text-black hover:bg-gray-100"
        }`;

    return (
        <nav className="bg-[#ECF0F3] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 text-2xl font-bold text-black select-none"
                        onClick={closeMenu}
                    >
                        <img src={image} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
                        Businsment
                    </NavLink>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                            <FaHome /> Home
                        </NavLink>
                        <NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>
                            <FaBlog /> Blog
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
                            <FaEnvelope /> Contact Us
                        </NavLink>

                        {/* Get Started Button */}
                        <NavLink to="/get-started" className="group">
                            <button className="bg-[#E7ECEF] shadow-md px-5 py-2 rounded-sm text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] group-hover:text-white">
                                <span className="text-[#FF014F] group-hover:text-white transition-all duration-300">
                                    Get Started
                                </span>
                                <FaArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                            </button>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-2xl text-black focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96 py-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col space-y-4 text-sm font-medium px-2">
                        <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                            <FaHome /> Home
                        </NavLink>
                        <NavLink to="/blog" className={navLinkClass} onClick={closeMenu}>
                            <FaBlog /> Blog
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
                            <FaEnvelope /> Contact Us
                        </NavLink>
                        <NavLink to="/get-started" className="group" onClick={closeMenu}>
                            <button className="bg-[#E7ECEF] shadow-md px-5 py-2 rounded-sm text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] group-hover:text-white w-full justify-center">
                                <span className="text-[#FF014F] group-hover:text-white transition-all duration-300">
                                    Get Started
                                </span>
                                <FaArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
