import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            About <span className="text-primary">The Oxford Academy</span>
          </h1>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Empowering students since 2015 with quality education and
            personalized attention
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-12 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6 text-dark">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray">
            <p className="mb-4">
              Founded by M.Sneha (ME Comms), The Oxford Academy has been a
              beacon of quality education in Theni for over a decade. Our
              journey began with a simple vision: to make quality education
              accessible to everyone, from kids to professionals.
            </p>
            <p className="mb-4">
              Located at MM Building 1st Floor, Aishwarya Store Opp Road, Edamal
              Street, Theni, we have grown from a small coaching center to a
              comprehensive educational institution offering 15+ course
              categories.
            </p>
            <p>
              "Education is the expression of the perfection that already exists
              in man." - This philosophy drives everything we do at The Oxford
              Academy.
            </p>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            {
              icon: FaChalkboardTeacher,
              title: "Expert Faculty",
              description: "Highly qualified and experienced instructors",
            },
            {
              icon: FaBookOpen,
              title: "Comprehensive Curriculum",
              description: "Industry-relevant and updated course content",
            },
            {
              icon: FaUsers,
              title: "Small Batches",
              description: "Personalized attention for every student",
            },
            {
              icon: FaAward,
              title: "Proven Results",
              description: "500+ successful students and counting",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-2xl mb-4">
                <item.icon />
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark">{item.title}</h3>
              <p className="text-gray text-sm">{item.description}</p>
            </div>
          ))}
        </motion.section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-dark">Our Mission</h2>
            <p className="text-gray leading-relaxed">
              To provide accessible, high-quality education that empowers
              individuals to achieve their full potential through personalized
              learning experiences and expert guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-dark">Our Vision</h2>
            <p className="text-gray leading-relaxed">
              To become the leading educational institution in Tamil Nadu,
              recognized for excellence in teaching, innovative learning
              methods, and transforming lives through education.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
