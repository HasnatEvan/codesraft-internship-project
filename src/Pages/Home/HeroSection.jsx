import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import bannerImage from '../../assets/Banner/banner-01.png';

const HeroSection = () => {
    const staticText = "Hi, ";
    const animatedFullText = "I’m Jone Lee\na UI/UX Designer.";
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (charIndex < animatedFullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(animatedFullText.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayText("");
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex]);

    // Highlight "Jone Lee" in pink
    const renderAnimatedText = () => {
        const match = /Jone Lee/;
        const index = displayText.search(match);

        if (index === -1) return displayText;

        const start = displayText.slice(0, index);
        const middle = displayText.slice(index, index + 9);
        const end = displayText.slice(index + 9);

        return (
            <>
                {start}
                <span className="text-[#FF014F]">{middle}</span>
                {end}
            </>
        );
    };

    const iconClass = `bg-white shadow rounded-lg p-2 transition cursor-pointer hover:shadow-lg
      hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] hover:text-white`;

    return (
        <section className="bg-[#f4f8fc] py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="uppercase text-sm sm:text-base tracking-widest text-gray-600 mb-3">
                        Welcome to my world
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug mb-4 min-h-[120px] whitespace-pre-wrap">
                        {staticText}
                        {renderAnimatedText()}
                        <span className="animate-pulse">|</span>
                    </h1>

                    <p className="text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
                        I use animation as a third dimension to simplify experiences and guide users through every interaction. Not just to make things pretty — but purposeful.
                    </p>

                    {/* Buttons */}
                    <div className="mb-8 flex justify-center lg:justify-start gap-4">
                        <button className="bg-[#FF014F] hover:bg-[#e10045] text-white px-6 py-3 rounded-md font-semibold transition">
                            Get Started
                        </button>

                        <button className="bg-white border border-[#FF014F] text-[#FF014F] hover:bg-[#FF014F] hover:text-white px-6 py-3 rounded-md font-semibold transition">
                            Learn More
                        </button>
                    </div>

                    {/* Social & Skills */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 justify-center lg:justify-start">
                        {/* Social */}
                        <div>
                            <p className="uppercase text-sm font-semibold text-gray-700 mb-2">Find with me</p>
                            <div className="flex justify-center sm:justify-start space-x-3 text-gray-800">
                                <a href="#" className={iconClass} title="Facebook">
                                    <FaFacebookF className="text-lg" />
                                </a>
                                <a href="#" className={iconClass} title="Twitter">
                                    <FaTwitter className="text-lg" />
                                </a>
                                <a href="#" className={iconClass} title="LinkedIn">
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <p className="uppercase text-sm font-semibold text-gray-700 mb-2">Best skill on</p>
                            <div className="flex justify-center sm:justify-start space-x-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="InVision" className="w-10 h-10 bg-white p-1 rounded-lg shadow" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Sketch" className="w-10 h-10 bg-white p-1 rounded-lg shadow" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Figma" className="w-10 h-10 bg-white p-1 rounded-lg shadow" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={bannerImage}
                        alt="Jone Lee"
                        className="rounded-xl shadow-lg w-full max-w-[250px] sm:max-w-sm md:max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
