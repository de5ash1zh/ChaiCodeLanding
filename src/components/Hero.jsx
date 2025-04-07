import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen pt-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Optional Top Tagline */}
        {/* <p className="text-orange-400 text-sm uppercase mb-2">Your Learning Partner</p> */}

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold leading-tight mb-4"
        >
          Consistency and Community <br /> Learning for coding courses.
        </motion.h1>

        {/* Subtext */}
        <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
          ChaiCode is where learners get access to structured cohort classes,
          personalized support, real-world projects, and a community that keeps
          you accountable. Learn faster, better, and together.
        </p>

        {/* CTA Button */}
        <motion.a
          href="#cohorts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded hover:bg-orange-400 hover:text-white transition"
        >
          Check all Live Cohorts
          <span className="text-orange-400 text-sm animate-pulse">●</span>
        </motion.a>

        {/* Video Embed Placeholder */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-2xl rounded-xl p-[3px] bg-gradient-to-r from-orange-400 via-orange-400 to-orange-400 animate-borderPulse">
            <iframe
              src="https://www.youtube.com/embed/yG8JMlldoCE?si=2V-6d1PJ SjGIbC7r"
              title="ChaiCode Intro Video"
              className="w-full h-[360px] sm:h-[420px] rounded-xl"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
