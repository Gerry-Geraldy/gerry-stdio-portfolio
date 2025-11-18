import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeaturedCards from "./sections/FeaturedCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeaturedCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
