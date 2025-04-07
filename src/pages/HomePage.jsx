import Faq from "../components/Faq";
import Features from "../components/Features";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";


function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials /> 
      <Faq />
    </>
  );
}
export default HomePage;
