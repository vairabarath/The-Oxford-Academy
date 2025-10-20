import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");

    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    setIsSubmitting(false);
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
    <div className="pt-20 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <FaPhone size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">Call Us</h3>
            <p className="text-gray text-sm mb-4">Mon-Sat from 9am to 7pm</p>
            <a
              href="tel:7010507288"
              className="text-primary hover:underline block font-semibold"
            >
              70105 07288
            </a>
            <a
              href="tel:9342624259"
              className="text-primary hover:underline block font-semibold"
            >
              93426 24259
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <FaWhatsapp size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">WhatsApp</h3>
            <p className="text-gray text-sm mb-4">Quick replies available</p>
            <a
              href="https://wa.me/917010507288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline font-semibold"
            >
              Chat with us now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">Visit Us</h3>
            <p className="text-gray text-sm mb-4">Come say hello</p>
            <p className="text-dark font-medium text-sm">
              MM Building 1st Floor,
              <br />
              Aishwarya Store Opp Road,
              <br />
              Edamal Street, Theni
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-dark mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="[email protected]"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select a course</option>
                    <option value="ielts">IELTS</option>
                    <option value="spoken-english">Spoken English</option>
                    <option value="programming">Programming Languages</option>
                    <option value="competitive">Competitive Exams</option>
                    <option value="personality">Personality Development</option>
                    <option value="corporate">Corporate Communication</option>
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <FaPaperPlane />}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Google Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.7326!2d77.4762!3d9.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMDAuMSJOIDc3wrAyOCczNC4zIkU!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Oxford Academy Location"
                className="w-full"
              />
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <FaClock size={20} />
                </div>
                <h3 className="text-xl font-bold text-dark">Office Hours</h3>
              </div>
              <div className="space-y-3 text-dark">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:7010507288"
                className="bg-primary text-white p-4 rounded-xl text-center font-semibold hover:bg-primary/90 transition-colors shadow-sm flex flex-col items-center justify-center space-y-2"
              >
                <FaPhone size={24} />
                <span className="text-sm">Call Now</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/917010507288"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4 rounded-xl text-center font-semibold hover:bg-green-600 transition-colors shadow-sm flex flex-col items-center justify-center space-y-2"
              >
                <FaWhatsapp size={24} />
                <span className="text-sm">WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What are the class timings?",
                a: "We offer flexible timings - morning, afternoon, and evening batches to suit your schedule.",
              },
              {
                q: "Do you provide study materials?",
                a: "Yes, all courses include comprehensive study materials and resources.",
              },
              {
                q: "Is there a demo class available?",
                a: "Yes, we offer free demo classes for all our courses. Contact us to schedule one.",
              },
              {
                q: "What is the batch size?",
                a: "We maintain small batch sizes (8-12 students) to ensure personalized attention.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
