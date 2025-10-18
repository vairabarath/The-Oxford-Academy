import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="bg-light rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-dark">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Address</h4>
                      <p className="text-gray">
                        MM Building 1st Floor,
                        <br />
                        Aishwarya Store Opp Road,
                        <br />
                        Edamal Street, Theni
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">Phone</h4>
                      <a
                        href="tel:7010507288"
                        className="text-primary hover:underline block"
                      >
                        70105 07288
                      </a>
                      <a
                        href="tel:9342624259"
                        className="text-primary hover:underline block"
                      >
                        93426 24259
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                      <FaWhatsapp size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/917010507288"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:7010507288"
                  className="bg-primary text-white p-4 rounded-lg text-center font-semibold hover:bg-primary/90 transition-colors flex flex-col items-center justify-center space-y-2"
                >
                  <FaPhone size={20} />
                  <span>Call Now</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/917010507288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold hover:bg-green-600 transition-colors flex flex-col items-center justify-center space-y-2"
                >
                  <FaWhatsapp size={20} />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-light rounded-xl p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Interested Course *
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a course</option>
                  <option value="ielts">IELTS</option>
                  <option value="spoken-english">Spoken English</option>
                  <option value="programming">Programming Languages</option>
                  <option value="competitive">Competitive Exams</option>
                  <option value="personality">Personality Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-white"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors shadow-sm"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
