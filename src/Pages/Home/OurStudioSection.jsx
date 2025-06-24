import image1 from '../../assets/InsideOurStudio/image1 (1).jpg';
import image2 from '../../assets/InsideOurStudio/image1 (2).jpg';
import image3 from '../../assets/InsideOurStudio/image1 (3).jpg';
import image4 from '../../assets/InsideOurStudio/image1 (4).jpg';
import { FaCheckCircle } from 'react-icons/fa';

const OurStudioSection = () => {
  return (
    <section className="bg-[#f4f8fc] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

        {/* Text Section */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-pink-600 text-sm font-semibold uppercase tracking-wider mb-4 border-b-2 border-pink-500 inline-block pb-1">
            Inside Our Studio
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            A Glimpse Into Our <br className="hidden sm:block" /> Creative World
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Discover where ideas come to life. Our studio is built for creativity,
            collaboration, and innovation. These snapshots reflect the vibrant spirit and
            teamwork that fuel every project we take on.
          </p>

          {/* Points Section */}
          <div className="space-y-3">
            {[
              'Creative minds united in one workspace',
              'Every corner tells a story of collaboration',
              'Inspiration flows through every wall',
              'Celebrating creativity in every form',
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3 text-gray-700">
                <FaCheckCircle className="text-pink-500 mt-1" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From brainstorming sessions to launch celebrations — this is how we work,
            connect, and grow together.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-6 h-auto lg:h-[620px]">
          {/* Large Image (Left side) */}
          <div className=" overflow-hidden shadow-md group hover:shadow-xl transition duration-300 bg-white">
            <img
              src={image1}
              alt="Studio Large"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right side: 3 images stacked vertically */}
          <div className="grid grid-rows-3 gap-4">
            {[image2, image3, image4].map((img, index) => (
              <div
                key={index}
                className=" overflow-hidden shadow-md group hover:shadow-xl transition duration-300 bg-white"
              >
                <img
                  src={img}
                  alt={`Studio ${index + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStudioSection;
