import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
