import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaGraduationCap,
  FaLanguage,
  FaCode,
  FaUserTie,
  FaChalkboardTeacher,
  FaHeadset,
  FaComments,
  FaBriefcase,
  FaLaptopCode,
  FaChild,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const services: Service[] = [
    {
      icon: FaGraduationCap,
      title: "IELTS",
      description: "Comprehensive IELTS preparation with expert guidance",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Competitive Exam Coaching",
      description: "Expert coaching for all competitive examinations",
    },
    {
      icon: FaBuilding,
      title: "Distance Education",
      description: "Learn from anywhere with our distance education programs",
    },
    {
      icon: FaBriefcase,
      title: "Placement & Training",
      description: "Including onsite training and job placement assistance",
    },
    {
      icon: FaLanguage,
      title: "Spoken Hindi",
      description: "Master Hindi language with native-like fluency",
    },
    {
      icon: FaHeadset,
      title: "Call Centre Training",
      description: "Professional training for call center operations",
    },
    {
      icon: FaComments,
      title: "Commercial Communication",
      description: "Enhance your business communication skills",
    },
    {
      icon: FaUserTie,
      title: "Corporate Communication",
      description: "Professional communication for corporate environments",
    },
    {
      icon: FaBriefcase,
      title: "Personality Development",
      description: "Build confidence and develop your personality",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Professional Training",
      description: "Industry-standard professional training programs",
    },
    {
      icon: FaLaptopCode,
      title: "Programming Languages",
      description: "Learn popular programming languages from scratch",
    },
    {
      icon: FaChild,
      title: "Montessori Training",
      description: "Professional Montessori teacher training programs",
    },
    {
      icon: FaHome,
      title: "Home Tuition",
      description: "All syllabus and all subjects covered at home",
    },
    {
      icon: FaCode,
      title: "Spoken English",
      description: "English for all - from kids to professionals",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Comprehensive educational services tailored to meet diverse learning
            needs across all age groups
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = ["primary", "secondary", "accent"];
            const color = colors[index % 3];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center text-${color} text-xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon />
                </div>
                <h3 className="text-lg font-bold mb-2 text-dark">
                  {service.title}
                </h3>
                <p className="text-gray text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            Enquire Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
