import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from '../../src/assets/Footer/Footerimage-01.png';

const Footer = () => {
    const isGradient = true;

    const iconClass = `bg-white shadow-md rounded-md p-3 transition cursor-pointer hover:shadow-lg ${
        isGradient
            ? 'hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] hover:text-white'
            : 'hover:bg-pink-50'
    }`;

    return (
        <footer className="bg-[#f5f7fa]">
            <div className="py-10 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">
                    
                    {/* Profile + Social */}
                    <div className="text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
                            <img
                                src={Image}
                                alt="profile"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <span className="text-2xl font-semibold text-gray-500">INBIO</span>
                        </div>
                        <div className="flex justify-center sm:justify-start gap-4">
                            <div className={iconClass} title="Facebook">
                                <FaFacebookF className="text-xl" />
                            </div>
                            <div className={iconClass} title="Twitter">
                                <FaTwitter className="text-xl" />
                            </div>
                            <div className={iconClass} title="LinkedIn">
                                <FaLinkedinIn className="text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Link */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-pink-600 font-semibold text-lg mb-4">QUICK LINK</h2>
                        <ul className="space-y-2">
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-pink-600 font-semibold text-lg mb-4">RESOURCES</h2>
                        <ul className="space-y-2">
                            <li>Authentication</li>
                            <li>System Status</li>
                            <li>Terms of Service</li>
                            <li>Pricing</li>
                            <li>Over Right</li>
                        </ul>
                    </div>

                    {/* Developers */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-pink-600 font-semibold text-lg mb-4">DEVELOPERS</h2>
                        <ul className="space-y-2">
                            <li>Documentation</li>
                            <li>Authentication</li>
                            <li>API Reference</li>
                            <li>Support</li>
                            <li>Open Source</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center py-5 border-t border-gray-300 text-sm text-gray-500">
                © {new Date().getFullYear()} INBIO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
