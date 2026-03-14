import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../Hero/Hero.css";
import profileImg from "../../assets/pp.png";

const roles = ["React Developer", "UI/UX Enthusiast", "Frontend Developer"];

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Floating blobs */}
      <motion.div className="blob blob1" animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="blob blob2" animate={{ y: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity }} />

      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Hunde Garoma
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build modern and responsive web applications using React, HTML, CSS, and JavaScript.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="hero-btn">View Projects</a>
            <a href="#" className="hero-btn secondary">Download CV</a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedinIn /></a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={profileImg} alt="Profile" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓
      </motion.div>
    </section>
  );
}

export default Hero;