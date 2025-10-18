import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  course: string;
  rating: number;
  comment: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      course: "IELTS",
      rating: 5,
      comment:
        "The Oxford Academy helped me achieve a band score of 8.0 in IELTS. M.Sneha mam's teaching methodology is excellent!",
      avatar: "👩‍🎓",
    },
    {
      name: "Rajesh Kumar",
      course: "Programming",
      rating: 5,
      comment:
        "I learned Python and Java here. The practical approach and hands-on projects made learning easy and enjoyable.",
      avatar: "👨‍💻",
    },
    {
      name: "Anitha Lakshmi",
      course: "Competitive Exams",
      rating: 5,
      comment:
        "Excellent coaching for competitive exams. I cleared my bank exam in the first attempt. Thank you Oxford Academy!",
      avatar: "👩‍💼",
    },
    {
      name: "Mohammed Asif",
      course: "Spoken English",
      rating: 5,
      comment:
        "My English communication skills improved dramatically. Now I can confidently speak in any professional setting.",
      avatar: "👨‍🎓",
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Student <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Hear what our successful students have to say about their learning
            experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-primary font-semibold">
                        {testimonial.course}
                      </p>
                    </div>
                    <FaQuoteLeft className="text-primary text-2xl opacity-20" />
                  </div>
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray leading-relaxed">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
