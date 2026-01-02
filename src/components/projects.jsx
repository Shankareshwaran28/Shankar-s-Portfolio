import React, { useState } from "react";
import { Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TiltedCard from "./TiltedCard";

/* LOCAL IMAGES */
import img03 from "../assests/alukasjewellery.jpg";
import classPep from "../assests/Screenshot 2025-12-30 232653.png";
import logo from "../assests/titan.jpg";
import portrait from "../assests/Screenshot 2025-12-30 234801.png";
import sk from "../assests/Screenshot 2025-12-30 233723.png";
import por from "../assests/Screenshot 2025-12-30 234939.png";

/* 🔥 ACTIVE GRADIENT */
const activeGradient = "from-indigo-600 via-purple-500 to-indigo-600";

/* PROJECT DATA */
const projects = [
  {
    title: "JosAlukkas Clone",
    image: img03,
    github: "https://github.com/Shankareshwaran28/JosAlukkas_Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals.",
    tags: ["html", "scss", "javascript"],
    category: "frontend",
  },
  {
    title: "Titan Watch Clone",
    image: logo,
    github: "https://github.com/Shankareshwaran28/Titan_clone",
    description:
      "A responsive frontend clone of the Titan watch website built using HTML, CSS, and JavaScript.",
    tags: ["html", "scss", "javascript"],
    category: "frontend",
  },
  {
    title: "Coffee Shop Clone",
    image: portrait,
    github: "https://github.com/Shankareshwaran28/Coffe-Shop-Website",
    description:
      "A responsive coffee shop website with modern UI and smooth interactions.",
    tags: ["html", "css", "javascript"],
    category: "frontend",
  },
  {
    title: "Personal Portfolio Website",
    image: por,
    github: "https://github.com/yourusername/trip-guide",
    description:
      "A personal portfolio showcasing creative UI, animations, and modern web experiences.",
    tags: ["html", "tailwind", "javascript", "react"],
    category: "frontend",
  },
  {
    title: "Nestasia Website Clone",
    image: classPep,
    github: "https://github.com/Shankareshwaran28/Nestasia_clone/tree/master",
    description:
      "E-commerce clone with authentication, product management, and MySQL backend.",
    tags: ["html", "tailwind", "javascript", "mysql", "php"],
    category: "full-stack",
  },
  {
    title: "SilverStore Clone",
    image: sk,
    github: "https://github.com/Shankareshwaran28/Silverstore_clone/tree/master",
    description:
      "Full-stack e-commerce website with JWT authentication and admin features.",
    tags: ["html", "tailwind", "javascript", "mysql", "php"],
    category: "full-stack",
  },
];

const filters = ["all", "frontend", "full-stack"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  /* ANIMATION VARIANTS */
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Projects
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Frontend & Full Stack projects built with real-world use cases.
          </motion.p>
        </div>

        {/* FILTER PANEL */}
        <div className="flex justify-center mb-14">
          <div className="flex gap-2 p-2 rounded-full bg-gray-100 border border-gray-200 dark:bg-black/40 dark:border-white/10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  activeFilter === filter
                    ? `bg-gradient-to-r ${activeGradient} text-white scale-105 shadow-lg`
                    : `text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white`
                }`}
              >
                {filter === "full-stack"
                  ? "Full Stack"
                  : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <TiltedCard imageSrc={project.image}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-indigo-600 transition"
                  >
                    <Github size={16} className="text-white" />
                  </a>

                  {/* 🔥 CARD TEXT (ALWAYS WHITE) */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm mt-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-indigo-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltedCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
