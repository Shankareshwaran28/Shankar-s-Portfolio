import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// 👉 IMAGES
import contactImg from "../assests/new-message-concept-landing-page.png";
import overlayImg from "../assests/email-with-bell.webp";

/* ================= FORM ANIMATION ================= */
const formContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const formItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
/* ================================================= */

const Contact = () => {
  const formRef = useRef();

  const whatsappLink =
    "https://wa.me/919003769309?text=Hi%20I%20would%20like%20to%20contact%20you";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_xxxxxx",     // 🔹 Replace
        "template_xxxxxx",    // 🔹 Replace
        templateParams,
        "your_public_key"     // 🔹 Replace
      )
      .then(
        () => {
          setLoading(false);
          alert("Email sent successfully ✅");

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Failed to send email ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-white dark:bg-[#050816] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Feel free to get in touch with me if you have any inquiries or opportunities!
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={contactImg}
              alt="Contact Illustration"
              className="w-[520px] max-w-full rounded-2xl drop-shadow-2xl"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto w-full lg:max-w-xl relative
              bg-white dark:bg-black/40
              border border-gray-200 dark:border-white/10
              rounded-2xl p-10 shadow-xl backdrop-blur-md"
          >
            <h3 className="text-gray-900 dark:text-white font-semibold mb-6">
              Email Me 🚀
            </h3>

            <img
              src={overlayImg}
              alt="decorative"
              className="pointer-events-none hidden md:block absolute -top-8 -right-8 w-28 rotate-6"
            />

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={formContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.input
                variants={formItem}
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg bg-gray-100 dark:bg-white/10
                border border-gray-300 dark:border-gray-600
                px-4 py-3 text-gray-900 dark:text-white"
              />

              <motion.input
                variants={formItem}
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg bg-gray-100 dark:bg-white/10
                border border-gray-300 dark:border-gray-600
                px-4 py-3 text-gray-900 dark:text-white"
              />

              <motion.input
                variants={formItem}
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg bg-gray-100 dark:bg-white/10
                border border-gray-300 dark:border-gray-600
                px-4 py-3 text-gray-900 dark:text-white"
              />

              <motion.textarea
                variants={formItem}
                rows="5"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full rounded-lg bg-gray-100 dark:bg-white/10
                border border-gray-300 dark:border-gray-600
                px-4 py-3 text-gray-900 dark:text-white resize-none"
              />

              <motion.div
                variants={formItem}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-fuchsia-600 to-purple-600
                  text-white font-semibold py-3 rounded-lg
                  hover:opacity-90 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Email"}
                </button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-green-500
                  text-white font-semibold py-3 rounded-lg
                  hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
              </motion.div>
            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
