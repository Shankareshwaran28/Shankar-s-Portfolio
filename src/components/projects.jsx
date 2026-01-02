import React, { useState } from "react";
import { Github } from "lucide-react";
import TiltedCard from "./TiltedCard";
import { motion } from "framer-motion";
/* LOCAL IMAGES */
import img03 from "../assests/alukasjewellery.jpg";
import classPep from "../assests/Screenshot 2025-12-30 232653.png";
import logo from "../assests/titan.jpg";
import portrait from "../assests/Screenshot 2025-12-30 234801.png";
import sk from "../assests/Screenshot 2025-12-30 233723.png";
import por from "../assests/Screenshot 2025-12-30 234939.png";

/* 🔥 SHARED GRADIENT */
const activeGradient = "from-indigo-600 via-purple-500 to-indigo-600";

/* PROJECT DATA */
const projects = [
  {
    title: "JosAlukkas Clone",
    image: img03,
    github: "https://github.com/Shankareshwaran28/JosAlukkas_Clone",
    description: "Web-based platform that allows users to search, book, and manage car rentals.",
    tags: ["html", "scss", "javascript"],
    category: "frontend",
  },
  {
    title: "Titan Watch Clone",
    image: logo,
    github: "https://github.com/Shankareshwaran28/Titan_clone",
    description: "A responsive frontend clone of the Titan watch website built using HTML, CSS, and JavaScript, featuring a clean layout, modern UI, and smooth interactions.",
    tags: ["html", "scss", "javascript"],
    category: "frontend",
  },
  {
    title: "Coffee Shop Clone",
    image: portrait,
    github: "https://github.com/Shankareshwaran28/Coffe-Shop-Website",
    description: "A responsive coffee shop website built using HTML, CSS, and JavaScript, featuring a modern UI, smooth animations, and an engaging user experience.",
    tags: ["html", "javascript", "css"],
    category: "frontend",
  },
  {
    title: "Personal Portfolio Website",
    image: por,
    github: "https://github.com/yourusername/trip-guide",
    description: "An AI-powered image generation feature integrated into my personal portfolio using HTML, TailwindCSS, JavaScript and React to showcase interactive and creative web experiences.",
    tags: ["html", "javascript", "Tailwind CSS", "react"],
    category: "frontend",
  },
  {
    title: "Nestasia Website Clone",
    image: classPep,
    github: "https://github.com/Shankareshwaran28/Nestasia_clone/tree/master",
    description: "A Nestasia e-commerce clone with JWT-based authentication, user authorization, product catalog, and MySQL-powered backend.",
    tags: ["html", "Tailwind CSS", "javascript", "mysql", "Php"],
    category: "full-stack",
  },
  {
    title: "SilverStore Clone",
    image: sk,
    github: "https://github.com/Shankareshwaran28/Silverstore_clone/tree/master",
    description: "A SilverStore e-commerce clone with JWT-based authentication, user authorization, product catalog, and MySQL-powered backend.",
    tags: ["html", "Tailwind CSS", "javascript", "mysql", "Php"],
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

  // Motion variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Frontend & Full Stack projects built with real-world use cases.
          </motion.p>
        </div>

        {/* FILTER BUTTONS */}
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
                {filter === "full-stack" ? "Full Stack" : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT GRID */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <TiltedCard imageSrc={project.image}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-indigo-600 transition"
                >
                  <Github size={16} className="text-white" />
                </a>

                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium text-indigo-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
