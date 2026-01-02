import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGit, FaGithub, FaDatabase, FaCode } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiNetlify, SiTailwindcss } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
      { name: "MySQL", icon: <FaDatabase className="text-blue-500" /> },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", icon: <FaGit className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-white" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
    ],
  },
];

// Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-[#050816] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                className="h-full bg-white dark:bg-black/40 border rounded-xl p-5 shadow-sm dark:border-purple-500/30 flex flex-col justify-center"
              >
                <h3 className="text-center text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                  {group.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300 hover:scale-105 transition-transform"
                      variants={skillItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
