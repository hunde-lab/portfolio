import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Projects/Projects.css";
import projectImg from "../../assets/coder.webp";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const allProjects = [
  {
    title: "Project One",
    description: "A modern web app built with React and Tailwind.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "React"
  },
  {
    title: "Project Two",
    description: "Responsive website with interactive UI components.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "HTML/CSS"
  },
  {
    title: "Project Three",
    description: "Frontend project integrating APIs and animations.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "JavaScript"
  },
  {
    title: "Project Four",
    description: "Modern portfolio website with React and Framer Motion.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "React"
  },
  
    {
    title: "Project Five",
    description: "Modern portfolio website with React and Framer Motion.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "React"

  },
    {
    title: "Project Six",
    description: "Modern portfolio website with React and Framer Motion.",
    image: projectImg,
    github: "#",
    live: "#",
   category: "HTML/CSS"

  },
      {
    title: "Project Seven",
    description: "Modern portfolio website with React and Framer Motion.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "Javascript"

  },
    {
    title: "Project Eight",
    description: "Modern portfolio website with React and Framer Motion.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "Javascript"

  },
    {
    title: "Project Nine",
    description: "Modern portfolio website with React and Framer Motion.",
    image: projectImg,
    github: "#",
    live: "#",
    category: "HTML/CSS"

  },

];

const categories = ["All", "React", "HTML/CSS", "JavaScript"];

function Projects() {
  const [filter, setFilter] = useState("All");

const filteredProjects = filter === "All" 
  ? allProjects 
  : allProjects.filter(
      p => p.category.toLowerCase() === filter.toLowerCase()
    );
    
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Filter Tabs */}
      <div className="project-filters">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div 
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <span className="category-badge">{project.category}</span>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank"><FaGithub /></a>
                  <a href={project.live} target="_blank"><FaExternalLinkAlt /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;