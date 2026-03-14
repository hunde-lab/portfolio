import { motion } from "framer-motion";
import "../Skills/Skills.css";
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3 />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "Python", icon: <FaPython />, level: 80 },
  { name: "Git", icon: <FaGitAlt />, level: 85 },
  { name: "Docker", icon: <FaDocker />, level: 70 },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <motion.div
            className="skill-card"
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <motion.div
                className="skill-level"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <span className="skill-percent">{skill.level}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;