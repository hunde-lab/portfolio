import { motion } from "framer-motion";
import "../About/About.css";
import profileImg from "../../assets/pp.png"; 
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

function About() {
  const skills = [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />];

  return (
    <section id="about" className="about">
      {/* Profile Image */}
      <motion.div 
        className="about-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={profileImg} alt="About Me" />
      </motion.div>

      {/* Text */}
      <motion.div 
        className="about-text"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          Hi! I’m [Hunde Garoma], a frontend developer passionate about building clean and responsive web applications with React.
        </p>
        <p>
          I enjoy turning ideas into functional, modern interfaces that users love.
        </p>

        {/* Skills */}
        <div className="skills">
          {skills.map((icon, idx) => (
            <div className="skill-icon" key={idx}>
              {icon}
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <a href="#contact" className="about-btn">Hire Me</a>
      </motion.div>
    </section>
  );
}

export default About;