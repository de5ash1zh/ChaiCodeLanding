import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Join the Cohort", description: "Apply & join your tribe of motivated coders." },
  { title: "Set Daily Goals", description: "Stay accountable with small wins every day." },
  { title: "Live Coding Sessions", description: "Collaborate & code in real-time." },
  { title: "Build in Public", description: "Share your progress and projects online." },
  { title: "Grow with Community", description: "Level up with feedback & support." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

function CohortTimeline() {
  return (
    <section className="py-20 px-6 bg-[#0e0e0e] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Your ChaiCode Journey
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative z-10 md:w-1/5 text-center flex flex-col items-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold mb-4 shadow-lg">
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CohortTimeline;
