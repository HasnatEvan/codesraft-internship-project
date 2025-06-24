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
        <motion.h2
          variants={fadeInUp}
          className="text-center text-sm font-medium text-pink-600 uppercase mb-2"
        >
          Contact
        </motion.h2>

        <motion.h1
          variants={fadeInUp}
          className="text-center text-2xl sm:text-4xl font-bold text-gray-800 mb-10"
        >
          Contact With Me
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

            <h2 className="text-xl font-semibold text-gray-800">Nevine Acotanza</h2>
            <p className="text-sm text-gray-500 mb-4">Chief Operating Officer</p>
            <p className="text-gray-600 mb-2">
              I am available for freelance work. Connect with me via and call in to my account.
            </p>
            <p className="text-gray-600 text-sm">Phone: (555) 345 678 90</p>
            <p className="text-gray-600 text-sm mb-4">Email: admin@example.com</p>

            <p className="text-gray-700 text-sm mb-2">FIND WITH ME</p>
            <div className="flex flex-wrap gap-4 text-white">
              {[
                { icon: <FaFacebookF />, link: 'https://facebook.com/yourprofile', color: '#3b5998' },
                { icon: <FaWhatsapp />, link: 'https://wa.me/155534567890', color: '#25D366' },
                { icon: <MdEmail />, link: 'mailto:admin@example.com', color: '#EA4335' },
                { icon: <FaGlobe />, link: 'https://yourportfolio.com', color: '#0A66C2' },
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
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-600">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Subject</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Your Message</label>
              <textarea
                rows="6"
                className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-gray-100 to-white rounded-lg text-sm font-medium text-gray-700 shadow hover:shadow-md transition"
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
