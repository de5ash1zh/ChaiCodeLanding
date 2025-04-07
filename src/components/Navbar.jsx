import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {/* Logo */}
        <div className="text-xl font-semibold">
          <img
            src="https://ik.imagekit.io/de5ash1zh/chai-assets/chaicode-white.svg?updatedAt=1744020228718"
            alt="ChaiCode Logo"
            className="h-8"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <a href="#cohorts" className="hover:text-orange-400">
              Cohorts <span className="text-red-500 text-xs animate-pulse">●</span>
            </a>
          </li>
          <li><a href="#udemy" className="hover:text-orange-400">Udemy</a></li>
          <li><a href="#docs" className="hover:text-orange-400">Docs</a></li>
          <li><a href="#reviews" className="hover:text-orange-400">Reviews</a></li>
        </ul>

        {/* Login Button (Desktop) */}
        <a
          href="https://courses.chaicode.com/learn/account/signin"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="border border-white hover:bg-white hover:text-black text-sm px-4 py-2 rounded transition">
            Login
          </button>
        </a>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black/95 border-l border-white/10 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 text-white text-base font-medium">
          <li>
            <a
              href="#cohorts"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-400 transition"
            >
              Cohorts{" "}
              <span className="text-red-500 text-sm ml-1 animate-pulse">●</span>
            </a>
          </li>
          <li>
            <a
              href="#udemy"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-400 transition"
            >
              Udemy
            </a>
          </li>
          <li>
            <a
              href="#docs"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-400 transition"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-400 transition"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="https://courses.chaicode.com/learn/account/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full mt-4 bg-white text-black hover:bg-orange-200 transition px-4 py-2 rounded-md text-base font-semibold">
                Login
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm md:hidden"
        />
      )}
    </motion.header>
  );
}

export default Navbar;
