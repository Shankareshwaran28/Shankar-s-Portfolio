import React from "react";
import { motion } from "framer-motion";

// ✅ IMAGES
import stthomas from "../assests/logo.webp";
import stjohns from "../assests/school.png";
import vimala from "../assests/ClassPepRecLogo.png";
import eduImage from "../assests/Adobe Express - file.png";

const educationData = [
  {
    institute: "Erode Sengunthar Engineering College, Erode",
    degree: "Bachelor of Engineering - Computer Science and Engineering",
    duration: "Oct 2021 - Aug 2025",
    grade: "6.9 CGPA",
    description:
      "I completed my Bachelor's degree in Computer Science and Engineering at Erode Sengunthar Engineering College, Erode.",
    logo: stthomas,
  },
  {
    institute:
      "Velammal Memorial Matriculation Higher Secondary School, Madurai",
    degree: "HSC (XII), Computer Science",
    duration: "June 2020 - April 2021",
    grade: "63.5%",
    description:
      "I completed my class 12 education at Velammal Memorial Matriculation Higher Secondary School, Madurai.",
    logo: stjohns,
  },
  {
    institute: "St. Michael Matriculation Higher Secondary School, Madurai",
    degree: "SSLC (X), General Education",
    duration: "June 2018 - April 2019",
    grade: "52.5%",
    description:
      "I completed my class 10 education at St. Michael Matriculation Higher Secondary School, Madurai.",
    logo: vimala,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.25,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-[#050816] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Education is not the learning of facts, but the training of the mind
            to think.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT — TIMELINE */}
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

            <div className="space-y-14">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  <span className="absolute left-[13px] top-8 w-4 h-4 rounded-full bg-white dark:bg-[#050816] border-2 border-indigo-500 shadow-md" />

                  <div className="max-w-3xl bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-lg dark:shadow-none hover:shadow-[0_20px_50px_rgba(99,102,241,0.25)] dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] backdrop-blur-lg transition">
                    <div className="flex gap-4 items-start">
                      <img
                        src={edu.logo}
                        alt={edu.institute}
                        className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 p-1 object-contain border border-gray-200 dark:border-white/20"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.institute}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{edu.duration}</p>
                      </div>
                    </div>

                    <div className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      <p>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Grade:
                        </span>{" "}
                        {edu.grade}
                      </p>
                      <p className="mt-3">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE WITH FILTER AND DROP SHADOW */}
          <motion.div
            className="hidden lg:flex justify-center sticky top-32"
            style={{ perspective: 1200 }}
          >
            <motion.img
              src={eduImage}
              alt="Education Illustration"
             
              onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateY = ((x / rect.width) - 0.5) * 18;
                const rotateX = ((y / rect.height) - 0.5) * -18;

                e.currentTarget.style.transform = `
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  scale(1.05)
                `;
              }}
              onPointerLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
