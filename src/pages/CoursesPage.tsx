import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-light">
      <Courses />
      <Testimonials />
    </div>
  );
};

export default CoursesPage;
