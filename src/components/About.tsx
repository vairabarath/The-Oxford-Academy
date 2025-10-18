import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  FaAward,
  FaBookOpen,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const features: Feature[] = [
    {
      icon: FaChalkboardTeacher,
      title: "Expert Faculty",
      description:
        "Learn from M.Sneha (ME Comms) and experienced professionals",
      color: "primary",
    },
    {
      icon: FaBookOpen,
      title: "Comprehensive Curriculum",
      description: "15+ course categories covering all educational needs",
      color: "secondary",
    },
    {
      icon: FaUsers,
      title: "Small Batch Size",
      description: "Personalized attention with limited students per batch",
      color: "accent",
    },
    {
      icon: FaAward,
      title: "Proven Results",
      description: "500+ successful students with excellent outcomes",
      color: "primary",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            About <span className="text-primary">The Oxford Academy</span>
          </h2>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Located at MM Building 1st Floor, Aishwarya Store Opp Road, Edamal
            Street, Theni. We are committed to providing quality education
            across multiple disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-light rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-14 h-14 bg-${feature.color}/10 rounded-lg flex items-center justify-center text-${feature.color} text-2xl mb-4`}
                >
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {feature.title}
                </h3>
                <p className="text-gray">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-dark">Our Vision</h3>
              <p className="text-gray text-lg leading-relaxed">
                "Education is the expression of the perfection that already
                exists in man." We believe in nurturing potential and
                transforming lives through quality education accessible to
                everyone - from kids to professionals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <span className="text-dark font-medium">
                  All syllabus and all subjects covered
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <span className="text-dark font-medium">
                  Distance education available
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <span className="text-dark font-medium">
                  Placement and training (including onsite)
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
