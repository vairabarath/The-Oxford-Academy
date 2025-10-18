import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Courses", to: "courses" },
    { name: "Contact", to: "contact" },
  ];

  const popularCourses = [
    "IELTS Coaching",
    "Spoken English",
    "Programming Languages",
    "Competitive Exams",
    "Personality Development",
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">OA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">The Oxford Academy</h3>
                <p className="text-sm text-gray-400">The Future</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Education is the expression of the perfection that already exists
              in man. Empowering students from kids to professionals.
            </p>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-primary cursor-pointer transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <a
                    href="#courses"
                    className="text-gray-400 hover:text-secondary transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  MM Building 1st Floor, Aishwarya Store Opp Road, Edamal
                  Street, Theni
                </span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaPhone className="text-secondary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:7010507288" className="hover:text-primary block">
                    70105 07288
                  </a>
                  <a href="tel:9342624259" className="hover:text-primary block">
                    93426 24259
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/917010507288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <FaWhatsapp />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} The Oxford Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
