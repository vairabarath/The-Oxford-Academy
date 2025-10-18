import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                Led by M.Sneha - ME Comms
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-dark"
            >
              Education is the
              <br />
              <span className="text-primary">Expression</span> of
              <br />
              Perfection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray text-lg mb-8 leading-relaxed max-w-xl"
            >
              From IELTS to Programming Languages, from Competitive Exams to
              Personality Development - We offer comprehensive education for all
              ages and aspirations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#courses"
                className="flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <span>Explore Courses</span>
                <FaArrowRight />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/917010507288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp Us</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <div>
                <h3 className="text-4xl font-bold text-primary mb-1">15+</h3>
                <p className="text-gray text-sm">Course Categories</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-secondary mb-1">500+</h3>
                <p className="text-gray text-sm">Students Enrolled</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-accent mb-1">10+</h3>
                <p className="text-gray text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">
                      IELTS & Competitive Exams
                    </h3>
                    <p className="text-sm text-gray">
                      Expert coaching with proven track record
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-secondary hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">
                      Programming Languages
                    </h3>
                    <p className="text-sm text-gray">
                      Learn modern tech skills from basics to advanced
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-accent hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">
                      Professional Development
                    </h3>
                    <p className="text-sm text-gray">
                      Build confidence and leadership skills
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
