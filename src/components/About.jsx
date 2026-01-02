import React, { useEffect, useState, useRef } from "react";
import { Instagram, Github, Linkedin, Mail, Eye, ChevronDown } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";

import heroImg from "../assests/portrait-programmer-working-with-pc.png";
import resumePDF from "../assests/Shankar_Resume.pdf";

const roles = ["Frontend Developer", "Full Stack Developer"];

/* FRAMER VARIANTS */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item3D = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* SOCIAL ICON */
const SocialLink = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="p-3 rounded-full border border-gray-300
    text-gray-600 hover:text-indigo-600 hover:border-indigo-600
    dark:border-gray-700 dark:text-gray-400 dark:hover:text-indigo-400"
  >
    {children}
  </motion.a>
);

const About = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* TYPING EFFECT */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  /* Scroll-triggered animation */
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1.05,
        rotateY: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <section
      className="min-h-screen flex items-center justify-center
      transition-colors duration-700
      bg-gradient-to-br from-indigo-50 via-white to-purple-50
      dark:bg-gradient-to-br dark:from-[#020617] dark:to-[#020617]
      overflow-hidden relative"
    >
      <div className="max-w-7xl w-full px-4 sm:px-6 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center lg:text-left"
            style={{ perspective: 1000 }}
          >
            <motion.span
              variants={item3D}
              className="inline-block mb-3 px-3 py-1 text-xs font-semibold
              text-indigo-600 bg-indigo-100 rounded-full
              dark:bg-indigo-500/10 dark:text-indigo-400"
            >
              👋 About Me
            </motion.span>

            <motion.h1
              variants={item3D}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3
              text-gray-900 dark:text-white"
            >
              Hey I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600
                bg-clip-text text-transparent">
                Shankareshwaran
              </span>
            </motion.h1>

            <motion.p
              variants={item3D}
              className="text-lg sm:text-xl font-semibold mb-4
              text-gray-800 dark:text-gray-200"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.p
              variants={item3D}
              className="text-gray-600 dark:text-gray-400 max-w-lg
              mb-6 mx-auto lg:mx-0"
            >
              A Frontend Developer specializing in modern, scalable web applications
              with a strong emphasis on clean architecture, responsive UI, and
              user-centric design, continuously evolving toward Full Stack development
            </motion.p>

            {/* RESUME + SOCIAL */}
            <motion.div
              variants={item3D}
              className="flex flex-wrap items-center gap-4
              justify-center lg:justify-start"
            >
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                px-7 py-3 text-sm font-semibold
                rounded-lg
                bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600
                text-white hover:opacity-90 transition"
              >
                <Eye size={18} />
                View Resume
              </a>

              <div className="flex gap-3">
                <SocialLink href="https://github.com/Shankareshwaran28">
                  <Github size={20} />
                </SocialLink>

                <SocialLink href="https://www.linkedin.com/in/shankareshwaran28-p">
                  <Linkedin size={20} />
                </SocialLink>

                <SocialLink href="mailto:shankareshwaran28@gmail.com">
                  <Mail size={20} />
                </SocialLink>

                <SocialLink href="https://www.instagram.com/_mr__shankar.__?igsh=YTQwOGxhdWxrNmZj">
                  <Instagram size={20} />
                </SocialLink>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            ref={imageRef}
            animate={controls}
            initial={{ scale: 0.95, opacity: 0, rotateY: -10 }}
            className="flex justify-center"
            style={{ perspective: 1200 }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              glareEnable
              glareMaxOpacity={0.2}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg"
            >
              <img
                src={heroImg}
                alt="Programmer"
                className="rounded-2xl w-full h-auto"
              />
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.button
        onClick={() =>
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8"
      >
        <ChevronDown size={30} className="text-indigo-600 dark:text-indigo-300" />
      </motion.button>
    </section>
  );
};

export default About;
