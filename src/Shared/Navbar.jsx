import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinkClass = ({ isActive }) =>
        `hover:text-black transition ${
            isActive ? "text-black font-semibold" : "text-gray-700"
        }`;

    return (
        <nav className="bg-[#fefefa] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold text-black">
                        Businsment
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <NavLink to="/product" className={navLinkClass}>Product</NavLink>
                        <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
                        <NavLink to="/sales" className={navLinkClass}>Sales</NavLink>
                        <NavLink to="/topics" className={navLinkClass}>Pick a Topic</NavLink>
                        <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                    </div>

                    {/* Sign Up Button */}
                    <div className="hidden md:block">
                        <NavLink to="/signup">
                            <button className="bg-black text-white px-5 py-2 rounded-sm text-sm font-semibold hover:bg-gray-800 transition">
                                Sign Up
                            </button>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-2xl text-black">
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        menuOpen ? "max-h-96 py-4" : "max-h-0"
                    }`}
                >
                    <div className="flex flex-col space-y-3 text-sm font-medium">
                        <NavLink to="/product" className={navLinkClass}>Product</NavLink>
                        <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
                        <NavLink to="/sales" className={navLinkClass}>Sales</NavLink>
                        <NavLink to="/topics" className={navLinkClass}>Pick a Topic</NavLink>
                        <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                        <NavLink to="/signup">
                            <button className="bg-black text-white px-5 py-2 rounded-sm text-sm font-semibold w-fit hover:bg-gray-800 transition">
                                Sign Up
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
