import { motion } from "framer-motion";
import "../Contact/Contact.css";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Social Media */}
        <div className="contact-social">
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" target="_blank"><FaFacebookF /></motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" target="_blank"><FaInstagram /></motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" target="_blank"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href="#" target="_blank"><FaLinkedinIn /></motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;