import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/Shankareshwaran28" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/shankareshwaran28-p" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/_mr__shankar.__?igsh=YTQwOGxhdWxrNmZj" },
    { icon: <Mail size={18} />, href: "mailto:shankareshwaran28@gmail.com" },
  ];

  return (
    <footer
      className="
        bg-white dark:bg-[#151824]
        pt-16 pb-10 text-center
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        

        {/* Tagline */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
          Frontend Developer crafting modern, scalable, and user-focused web experiences.
        </p>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          {[
            { label: "About Me", id: "about" },
            { label: "Skills", id: "skills" },
            { label: "Projects", id: "projects" },
            { label: "Education", id: "education" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="
                text-gray-700 dark:text-gray-300
                hover:text-purple-500 dark:hover:text-white
                transition-colors
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-700 dark:text-gray-300
                hover:text-purple-500 dark:hover:text-white
                transition-transform hover:scale-110
              "
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Shankareshwaran — Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
