import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaClock, FaUsers, FaCertificate, FaStar } from "react-icons/fa";

interface Course {
  title: string;
  category: string;
  duration: string;
  students: string;
  rating: number;
  description: string;
  features: string[];
  icon: string;
}

const Courses: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = [
    "All",
    "Language",
    "Technology",
    "Professional",
    "Competitive",
  ];

  const courses: Course[] = [
    {
      title: "IELTS Preparation",
      category: "Language",
      duration: "3 months",
      students: "100+",
      rating: 4.9,
      description: "Comprehensive IELTS coaching for all modules",
      features: ["Speaking", "Writing", "Reading", "Listening"],
      icon: "🎓",
    },
    {
      title: "Spoken English",
      category: "Language",
      duration: "4 months",
      students: "200+",
      rating: 4.8,
      description: "Master English communication from basics to advanced",
      features: ["Grammar", "Vocabulary", "Pronunciation", "Fluency"],
      icon: "💬",
    },
    {
      title: "Programming Languages",
      category: "Technology",
      duration: "6 months",
      students: "150+",
      rating: 4.9,
      description: "Learn Python, Java, JavaScript and more",
      features: ["Python", "Java", "Web Dev", "Projects"],
      icon: "💻",
    },
    {
      title: "Competitive Exam Coaching",
      category: "Competitive",
      duration: "6-12 months",
      students: "300+",
      rating: 4.7,
      description: "Coaching for all government competitive exams",
      features: [
        "Study Material",
        "Mock Tests",
        "Expert Faculty",
        "Current Affairs",
      ],
      icon: "📚",
    },
    {
      title: "Personality Development",
      category: "Professional",
      duration: "2 months",
      students: "80+",
      rating: 4.8,
      description: "Build confidence and professional persona",
      features: ["Communication", "Leadership", "Grooming", "Interview Skills"],
      icon: "🌟",
    },
    {
      title: "Corporate Communication",
      category: "Professional",
      duration: "3 months",
      students: "120+",
      rating: 4.7,
      description: "Professional communication for workplace",
      features: [
        "Business English",
        "Presentations",
        "Email Writing",
        "Meetings",
      ],
      icon: "💼",
    },
  ];

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section id="courses" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Popular <span className="text-primary">Courses</span>
          </h2>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Choose from our wide range of courses designed to help you achieve
            your goals
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === category
                  ? "bg-primary text-white shadow-sm"
                  : "bg-light text-gray hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
            >
              {/* Course Icon/Header */}
              <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-6xl">{course.icon}</span>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-semibold">
                    {course.category}
                  </span>
                  <div className="flex items-center text-amber-500">
                    <FaStar />
                    <span className="ml-1 text-sm font-semibold text-dark">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-dark">
                  {course.title}
                </h3>
                <p className="text-gray text-sm mb-4">{course.description}</p>

                {/* Course Info */}
                <div className="flex items-center justify-between text-sm text-gray mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <FaClock className="mr-1 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1 text-secondary" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-light px-3 py-1 rounded-lg text-xs text-gray"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Enroll Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors"
                >
                  <FaCertificate />
                  <span>Enroll Now</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
