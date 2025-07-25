// FeaturesSection.jsx
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: 'Web Development',
    desc: 'Custom, scalable and responsive websites built using modern technologies like React, Next.js, and Node.js.',
    gradient: true,
  },
  {
    title: 'Mobile App Development',
    desc: 'Native & cross-platform apps using React Native and Flutter for high performance and user satisfaction.',
    gradient: true,
  },
  {
    title: 'Cloud Solutions',
    desc: 'Secure and scalable cloud architecture with AWS, Firebase & Azure tailored to your business needs.',
    gradient: true,
  },
  {
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive and user-centric design that enhances customer experience and engagement.',
    gradient: true,
  },
  {
    title: 'SEO & Digital Marketing',
    desc: 'Improve visibility and drive traffic with on-page SEO, SEM, and performance-focused campaigns.',
    gradient: true,
  },
  {
    title: 'IT Consultancy',
    desc: 'Expert advice and strategic planning to transform your business with modern digital solutions.',
    gradient: true,
  },
];

const OfferSection = () => {
  return (
    <section className="bg-[#f4f8fc] py-16 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          What We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            className={`group rounded-xl shadow-md p-6 transition duration-300 transform 
              hover:-translate-y-1 hover:shadow-xl focus:shadow-xl active:shadow-lg cursor-pointer
              bg-[#F5F8F9] text-gray-800
              ${
                item.gradient
                  ? 'hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] hover:text-white'
                  : 'hover:bg-pink-50'
              }`}
          >
            {/* Icon */}
            <div
              className="w-10 h-10 border-4 border-[#FF014F] rounded-full flex items-center justify-center mb-4 bg-white"
            >
              <div className="w-3 h-3 rounded-full bg-[#FF014F]"></div>
            </div>

            {/* Title */}
            <h3
              className={`text-lg font-semibold mb-2 
                ${item.gradient ? 'group-hover:text-white' : 'text-gray-800'}`}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed 
                ${item.gradient ? 'group-hover:text-white/90' : 'text-gray-600'}`}
            >
              {item.desc}
            </p>

            {/* Arrow Icon */}
            {item.gradient && (
              <div className="mt-4 text-2xl sm:text-3xl text-white group-hover:translate-x-1 transition-transform">
                <FiArrowRight />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
