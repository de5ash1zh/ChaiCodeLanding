import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Optional scroll effect
  window.onscroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center text-white">
        <div className="text-xl font-semibold">
          <img
            src="https://ik.imagekit.io/de5ash1zh/chai-assets/chaidocs-white.svg?updatedAt=1744020228724"
            alt="ChaiCode Logo"
            className="h-8"
          />
        </div>

        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <a href="#cohorts" className="hover:text-orange-400">
              Cohorts{" "}
              <span className="text-red-500 text-xs animate-pulse">●</span>
            </a>
          </li>

          <li>
            <a href="#udemy" className="hover:text-orange-400">
              Udemy
            </a>
          </li>
          <li>
            <a href="#docs" className="hover:text-orange-400">
              Docs
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-orange-400">
              Reviews
            </a>
          </li>
        </ul>

        <a
          href="https://courses.chaicode.com/learn/account/signin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-white hover:bg-white hover:text-black text-sm px-4 py-2 rounded transition">
            Login
          </button>
        </a>
      </nav>
    </motion.header>
  );
}

export default Navbar;
