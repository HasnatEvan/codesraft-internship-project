import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import image from '../../assets/InsideOurStudio/image1 (3).jpg';

const features = [
  {
    title: 'Smart Team Collaboration',
    desc: 'Boost productivity with streamlined communication and shared goals under one workspace.',
    details:
      'Collaborate in real-time with your team through shared boards, project timelines, and built-in communication tools. Avoid email overload and miscommunications by keeping everyone aligned with visual updates and shared documentation. Whether in-office or remote, your team stays connected and in sync.',
  },
  {
    title: 'Deadline-Driven Execution',
    desc: 'Break down projects into manageable steps to ensure every task hits its deadline.',
    details:
      'Never miss a deadline again! Our platform enables you to assign deadlines, prioritize tasks, and set milestones with clarity. Get reminders, visualize dependencies, and track progress with our intuitive dashboard — all designed to keep teams focused and on time.',
  },
  {
    title: 'Skill-Based Task Assignment',
    desc: 'Assign the right tasks to the right people based on their skills and strengths.',
    details:
      'Make the most of your team’s potential by mapping tasks to individuals based on their unique strengths. Our intelligent matching system ensures the most efficient use of resources and boosts overall performance. You’ll experience better quality output and improved team morale.',
  },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFeature = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f8fc] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center md:text-left mb-12">
          <span className="inline-block px-4 py-1 border-2 border-gray-200 text-sm text-[#FF014F] font-medium rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-[#7567C7] hover:to-[#EA6478] hover:text-white">
            Our Featured
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Plan Better, Work Smarter <br className="hidden sm:block" />
            with Our Proven Strategies
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Accordion Section */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Visually plan, track, and deliver work projects without the last-minute rush or stress.
              With our simple drag-and-drop timelines and skill-aligned task planning, managing work becomes delightfully simple.
            </p>

            <div className="space-y-4">
              {features.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    className="border-t pt-4 cursor-pointer"
                    onClick={() => toggleFeature(i)}
                  >
                    <div className="flex justify-between items-center text-gray-700 hover:text-pink-600 transition">
                      <p className={`font-medium ${isActive ? 'text-pink-600 font-semibold' : ''}`}>
                        {item.title}
                      </p>
                      {isActive ? (
                        <FaChevronUp className="text-sm" />
                      ) : (
                        <FaChevronDown className="text-sm" />
                      )}
                    </div>

                    {/* Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[500px] mt-3' : 'max-h-0'}`}
                    >
                      <div className="text-gray-600 space-y-2 text-sm pr-2 pl-1">
                        <p className="font-medium">{item.desc}</p>
                        <p>{item.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-full">
            <img
              src={image}
              alt="Team Planning"
              className="rounded-xl w-full h-full max-h-[500px] object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
