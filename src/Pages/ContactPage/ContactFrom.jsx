import { FaFacebookF, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import image from '../../assets/Contact/contact1.png';
import { motion } from 'framer-motion';

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const ContactForm = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-100" id="contact">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex justify-center">
          <motion.h2
            variants={fadeInUp}
            className="text-sm font-medium text-pink-600 uppercase mb-4 inline-block border-b-2 border-pink-600 pb-1"
          >
            Contact
          </motion.h2>
        </div>


        <motion.h1
          variants={fadeInUp}
          className="text-center text-2xl sm:text-4xl font-bold text-gray-800 mb-10"
        >
          Get in Touch
        </motion.h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            variants={fadeInScale}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
          >
            <motion.img
              src={image}
              alt="Contact"
              className="rounded-xl w-full object-cover mb-6 max-h-72 md:max-h-80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            />

            <h2 className="text-xl font-semibold text-gray-800">CodeSpark IT</h2>
            <p className="text-sm text-gray-500 mb-4">Digital Solutions Provider</p>
            <p className="text-gray-600 mb-2">
              We are open to business inquiries, collaborations, and tech consultations.
              Reach out to us and our team will get back to you shortly.
            </p>
            <p className="text-gray-600 text-sm">Phone: +880 1234 567 890</p>
            <p className="text-gray-600 text-sm mb-4">Email: contact@codespark.com</p>

            <p className="text-gray-700 text-sm mb-2">FIND US ON</p>
            <div className="flex flex-wrap gap-4 text-white">
              {[
                { icon: <FaFacebookF />, link: 'https://facebook.com/codespark', color: '#3b5998' },
                { icon: <FaWhatsapp />, link: 'https://wa.me/8801234567890', color: '#25D366' },
                { icon: <MdEmail />, link: 'mailto:contact@codespark.com', color: '#EA4335' },
                { icon: <FaGlobe />, link: 'https://codespark.com', color: '#0A66C2' },
              ].map((item, index) => (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 text-gray-700 rounded-xl transition"
                  style={{ transition: 'all 0.3s ease-in-out' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = item.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            variants={fadeInScale}
            className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message!");
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600">Phone Number</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-600">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Subject</label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Your Message</label>
              <textarea
                rows="6"
                required
                className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#FF014F] to-[#EA6478] rounded-lg text-sm font-medium text-white shadow hover:shadow-md transition"
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
