import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is ChaiCode and how does it work?",
    answer:
      "ChaiCode is a live coding accountability cohort where learners commit to daily goals, join live sessions, and build projects in public with a community.",
  },
  {
    question: "Do I need to be an expert to join?",
    answer:
      "Not at all! We welcome beginners, intermediates, and pros alike. Everyone grows together.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "No worries — replays are shared, and you can catch up anytime. But consistency is 🔑 so we encourage showing up live!",
  },
  {
    question: "How is this different from a course?",
    answer:
      "This isn’t a course. It’s a **cohort experience** focused on real-time growth, accountability, and community — much more motivating than watching videos alone.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) =>
    setOpenIndex(index === openIndex ? null : index);

  return (
    <section className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-orange-400">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="px-6 pb-4 text-gray-300 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-400">
          Still got questions?{" "}
          <span className="text-orange-400 underline cursor-pointer">
            Contact us
          </span>
        </p>
      </div>
    </section>
  );
}

export default Faq;
