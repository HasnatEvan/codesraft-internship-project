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
    <footer className="bg-[#f5f7fa] border-t-2 border-gray-200">
      <div className="py-10 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700">

          {/* Profile + Social */}
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
              <img
                src={Image}
                alt="Company Logo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-2xl font-semibold text-gray-500">CodeSpark IT</span>
            </div>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className={iconClass} title="Facebook">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className={iconClass} title="Twitter">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className={iconClass} title="LinkedIn">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h2 className="text-pink-600 font-semibold text-lg mb-4">QUICK LINKS</h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-pink-600 transition">About</a></li>
              <li><a href="#portfolio" className="hover:text-pink-600 transition">Portfolio</a></li>
              <li><a href="#services" className="hover:text-pink-600 transition">Services</a></li>
              <li><a href="#blog" className="hover:text-pink-600 transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-pink-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h2 className="text-pink-600 font-semibold text-lg mb-4">RESOURCES</h2>
            <ul className="space-y-2">
              <li><a href="/career" className="hover:text-pink-600 transition">Career</a></li>
              <li><a href="/privacy-policy" className="hover:text-pink-600 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-pink-600 transition">Terms of Service</a></li>
              <li><a href="/faq" className="hover:text-pink-600 transition">FAQ</a></li>
              <li><a href="/support" className="hover:text-pink-600 transition">Support</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div className="text-center sm:text-left">
            <h2 className="text-pink-600 font-semibold text-lg mb-4">DEVELOPERS</h2>
            <ul className="space-y-2">
              <li><a href="/docs" className="hover:text-pink-600 transition">Documentation</a></li>
              <li><a href="/api" className="hover:text-pink-600 transition">API Reference</a></li>
              <li><a href="/opensource" className="hover:text-pink-600 transition">Open Source</a></li>
              <li><a href="/partners" className="hover:text-pink-600 transition">Partnership</a></li>
              <li><a href="/contact-dev" className="hover:text-pink-600 transition">Developer Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-5 border-t border-gray-300 text-sm text-gray-500">
        © {new Date().getFullYear()} CodeSpark IT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
