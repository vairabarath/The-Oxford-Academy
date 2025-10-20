import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaCalendar,
} from "react-icons/fa";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  education: string;
  preferredStartDate: string;
  message: string;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  courseName,
}) => {
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    education: "",
    preferredStartDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Enrollment data:", { ...formData, course: courseName });

    // Success message
    alert(
      `Thank you for enrolling in ${courseName}! We will contact you soon.`,
    );

    // Reset form and close modal
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      education: "",
      preferredStartDate: "",
      message: "",
    });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-t-2xl relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Enroll Now
                </h2>
                <p className="text-white/90">
                  Course: <span className="font-semibold">{courseName}</span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
                    <FaUser className="mr-2 text-primary" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-dark mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="dateOfBirth"
                        className="block text-sm font-semibold text-dark mb-2"
                      >
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
                    <FaEnvelope className="mr-2 text-secondary" />
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                </div>

                {/* Educational Background */}
                <div>
                  <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
                    <FaGraduationCap className="mr-2 text-accent" />
                    Educational Background
                  </h3>
                  <div>
                    <label
                      htmlFor="education"
                      className="block text-sm font-semibold text-dark mb-2"
                    >
                      Highest Education Level *
                    </label>
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select your education level</option>
                      <option value="high-school">High School</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Course Preferences */}
                <div>
                  <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
                    <FaCalendar className="mr-2 text-primary" />
                    Course Preferences
                  </h3>
                  <div>
                    <label
                      htmlFor="preferredStartDate"
                      className="block text-sm font-semibold text-dark mb-2"
                    >
                      Preferred Start Date *
                    </label>
                    <input
                      type="date"
                      id="preferredStartDate"
                      name="preferredStartDate"
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your learning goals or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;
