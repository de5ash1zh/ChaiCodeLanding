
import React from "react";
import { motion } from "framer-motion";

function JoinCTA() {
  return (
    <section className="py-20 px-6 bg-[#0e0e0e] text-white">
      <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Code With Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-gray-300 mb-6 text-sm md:text-base"
        >
          Join ChaiCode today and start your journey with 1000+ learners, daily goals,
          live sessions, and a powerful coding community.
        </motion.p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
        >
          Join the Cohort →
        </motion.a>

        <p className="text-gray-400 text-xs mt-4">Loved by 1000+ learners worldwide</p>
      </div>
    </section>
  );
}

export default JoinCTA;
