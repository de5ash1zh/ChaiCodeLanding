import { motion } from "framer-motion";

function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1a1a] to-black py-20 px-6 overflow-hidden">
      {/* Animated blob background */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: 1.2, opacity: 0.15 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-orange-500 blur-3xl opacity-30"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to transform your tech journey?
        </h2>
        <p className="text-gray-300 mb-10">
          Join a cohort of 1000+ motivated coders building in public, together.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-400 transition text-white font-semibold rounded-xl text-lg"
        >
          Join In
        </a>
      </div>
    </section>
  );
}

export default FinalCTA;
