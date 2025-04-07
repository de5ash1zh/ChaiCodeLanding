import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "ChaiCode helped me stay consistent and accountable. The community vibe is amazing and kept me going every day!",
    avatar: "/images/students/aarav.jpg",
  },
  {
    name: "Sneha Patel",
    text: "The cohorts and real-world projects made a huge difference. I finally built the confidence to apply for jobs!",
    avatar: "/images/students/sneha.jpg",
  },
  {
    name: "Rohan Verma",
    text: "Live classes + amazing mentors = growth unlocked! 10/10 recommend to any coding learner out there.",
    avatar: "/images/students/rohan.jpg",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-play every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          What Our Learners Say
        </h2>

        <div className="relative h-[280px] sm:h-[260px] mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md flex flex-col justify-center items-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full mb-4 object-cover border-2 border-orange-400"
              />
              <p className="text-sm text-gray-300 mb-4 text-center">
                "{testimonial.text}"
              </p>
              <p className="text-orange-400 font-medium">{testimonial.name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={prev}
            className="bg-white/10 hover:bg-orange-400 text-white px-4 py-2 rounded transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="bg-white/10 hover:bg-orange-400 text-white px-4 py-2 rounded transition"
          >
            →
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                idx === current
                  ? "bg-orange-400 scale-110"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-500 italic">
          Loved by <span className="text-orange-400 font-bold">1000+</span>{" "}
          learners 💛
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
