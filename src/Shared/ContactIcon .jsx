import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContacting, setIsContacting] = useState(false);
  const timeoutRef = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsapp = () => {
    setIsContacting(true);
    scrollToBottom();
    setTimeout(() => {
      window.location.href = `https://wa.me/8801824481881`;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 2500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-between items-center px-6 md:px-14 z-50">
      {/* WhatsApp Button */}
      <div className="relative group">
        <div
          onClick={handleWhatsapp}
          className="bg-[#25D366] hover:bg-[#1EBE57] p-4 rounded-full shadow-2xl cursor-pointer transition-transform duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <FaWhatsapp className="text-white w-6 h-6" />
          {isContacting && (
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-[#25D366] text-xs font-medium px-2 py-0.5 rounded-full shadow-md animate-pulse">
              Contacting...
            </span>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-[#FF014F] hover:bg-[#d80d42] p-4 rounded-full shadow-2xl transition-transform duration-300 transform hover:scale-110 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ContactIcon;
