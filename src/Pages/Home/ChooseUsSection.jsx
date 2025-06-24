import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { FaRocket, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

const stats = [
  { id: 1, title: "Projects Completed", value: 1250, suffix: "+" },
  { id: 2, title: "Happy Clients", value: 900, suffix: "+" },
  { id: 3, title: "Awards Won", value: 15, suffix: "" },
];

const features = [
  {
    id: 1,
    icon: <FaRocket className="text-pink-500 w-10 h-10" />,
    title: "Fast & Reliable",
    desc: "We deliver quality work on time to keep your business moving forward.",
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-pink-500 w-10 h-10" />,
    title: "Secure Solutions",
    desc: "Your data and privacy are our top priority with robust security measures.",
  },
  {
    id: 3,
    icon: <FaThumbsUp className="text-pink-500 w-10 h-10" />,
    title: "Customer Satisfaction",
    desc: "Our clients love us! We strive to exceed expectations every time.",
  },
];

const ChooseUsSection = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          setStartCount(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f4f8fc] py-20 px-4 sm:px-6 lg:px-12"
    >
  <div className="max-w-7xl mx-auto text-center mb-10">
  <h2 className="text-pink-600 text-sm font-semibold uppercase tracking-wide mb-6 border-b-2 border-pink-500 inline-block pb-1">
    Why Choose Us
  </h2>
  <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Key Strengths</h1>
  <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
    We pride ourselves on delivering exceptional services with a focus on quality, security, and customer satisfaction. Here’s why our clients trust us:
  </p>
</div>


      {/* Number Ticker Section */}
      <div className="max-w-6xl mx-auto flex justify-center gap-12 mb-16">
        {stats.map(({ id, title, value, suffix }) => (
          <div key={id} className="text-center">
            <div className="text-5xl font-extrabold text-pink-500">
              {startCount ? <CountUp end={value} duration={2} /> : 0}
              {suffix}
            </div>
            <p className="mt-2 text-gray-600 font-medium">{title}</p>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
        {features.map(({ id, icon, title, desc }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-5">{icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ChooseUsSection;
