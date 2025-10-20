import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
