import Faq from "../components/Faq";
import Features from "../components/Features";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import JoinCTA from "../components/JoinCTA";
import CohortTimeline from "../components/CohortTimeline";
import LiveSessions from "../components/LiveSessions";
// import Footer from "../components/Footer";


function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials /> 
      <LiveSessions />
      <JoinCTA />
      <CohortTimeline />
      <Faq />
      <Cta/>
      {/* <Footer /> */}
    </>
  );
}
export default HomePage;
