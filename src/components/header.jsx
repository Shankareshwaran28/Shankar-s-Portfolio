import React, { useEffect, useState } from "react";
import logo from "../assests/sk.png";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Sticky header
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShow(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // ✅ Nav items (same for desktop & mobile)
  const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <header
      className={`w-full left-0 z-[100] transition-all duration-300 ${
        sticky
          ? "fixed top-0 bg-white dark:bg-black shadow-[0_0_30px_rgba(135,80,247,0.2)] py-2"
          : "absolute top-0 bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a href="#about" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="
              text-2xl font-extrabold tracking-wide
              bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600
              bg-clip-text text-transparent drop-shadow-sm
            ">
              Portfolio
            </span>
          </a>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-indigo-600 transition
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-indigo-600
                    hover:after:w-full after:transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-center w-10 h-10 rounded-full
                bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* HIRE ME */}
            <a
              href="#contact"
              className="hidden lg:inline-block text-white text-sm font-medium
                px-5 py-2 rounded-md
                bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600
                hover:opacity-90 transition"
            >
              Hire Me
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-2xl text-white
                bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600
                px-3 py-1 rounded-md z-50"
              onClick={() => setShow(!show)}
            >
              {show ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 flex justify-center items-start pt-24 bg-black/20 backdrop-blur-sm"
            onClick={() => setShow(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-64 bg-white dark:bg-black/60 rounded-xl shadow-lg p-5 flex flex-col gap-4"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setShow(false)}
                  className="text-center py-2 rounded-md
                    text-gray-700 dark:text-gray-300
                    hover:text-indigo-600 transition font-medium"
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setShow(false)}
                className="text-white px-4 py-2 rounded-md text-center
                  bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
