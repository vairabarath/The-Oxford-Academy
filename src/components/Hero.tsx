import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Lottie from "lottie-react";
import FeatherAnimation from "../animations/Feather Writing.json";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-light pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Animation - FIRST on mobile, SMALLER and LESS SPACING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center order-1 md:order-2"
          >
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] flex items-center justify-center">
              <Lottie
                animationData={FeatherAnimation}
                loop={true}
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Content - SECOND on mobile, FIXED OVERFLOW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-4"
            >
              <span className="bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold">
                Led by M.Sneha - ME Comms
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-dark break-words"
            >
              Education is the
              <br />
              <span className="text-primary">Expression</span> of
              <br />
              Perfection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
            >
              From IELTS to Programming Languages, from Competitive Exams to
              Personality Development - We offer comprehensive education for all
              ages and aspirations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#courses"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm text-sm md:text-base"
              >
                <span>Explore Courses</span>
                <FaArrowRight size={14} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/917010507288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-green-500 text-green-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors text-sm md:text-base"
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp Us</span>
              </motion.a>
            </motion.div>

            {/* Stats - More compact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-3 md:gap-8 mt-8 md:mt-12"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 md:mb-1">
                  15+
                </h3>
                <p className="text-gray text-[10px] sm:text-xs md:text-sm leading-tight">
                  Course Categories
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-0.5 md:mb-1">
                  500+
                </h3>
                <p className="text-gray text-[10px] sm:text-xs md:text-sm leading-tight">
                  Students Enrolled
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-0.5 md:mb-1">
                  10+
                </h3>
                <p className="text-gray text-[10px] sm:text-xs md:text-sm leading-tight">
                  Years Experience
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
