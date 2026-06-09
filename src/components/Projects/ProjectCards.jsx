// src/components/Projects/ProjectCards.tsx
import styles from './ProjectCards.module.css';
import { FaGithub, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';

const ProjectCards = () => {
  const projects = [
    {
      id: 0,
      title: "CampusConnect",
      description: " a real-time student community platform that enables users to share interview experiences, discuss company-specific hiring processes, and collaborate through live doubt-solving discussions.",
      technologies: ["React.js", "Node.js", "Express.js", "JavaScript", "Socket.io"],
      image: "https://i.ibb.co/d4YvL6Nx/Campus-Connect.png",
      github: "https://github.com/NitishaSamtani/CampusConnect",
      liveDemo: "null"
    },
    {
      id: 1,
      title: "HI2SQL: AI-Powered SQL Query Generator",
      description: " an AI-powered platform that converts natural language into SQL queries and visualizes their execution flow through interactive flowcharts, helping users understand and learn database querying with ease.",
      technologies: ["MERN Stack","Groq API"],
      image: "https://i.ibb.co/HLGGxpv8/HI2SQL.png",
      github: "https://github.com/NitishaSamtani/HI2SQL",
      liveDemo: "null"
    },
    {
      id: 2,
      title: "Nitisha's AI Chat Porfolio",
      description:
        "A portfolio site built using React and creative mind. Combines clean design with conversational UI to make exploring my work as fun as chatting with people (but better looking).",
      technologies: ["React", "CSS", "Creativity"],
      image: "https://i.ibb.co/whxs0hqN/Chat-GPT-Image-Jun-7-2026-05-08-45-AM.png",
      github: "https://github.com/NitishaSamtani/Portfolio",
      liveDemo: "null",
    },
    {
      id: 3,
      title: "Telemedicine",
      description: "a MERN-based telemedicine platform that enables patients to book appointments, consults verified doctors online video, checks symptoms with AI, supports multilingual and receive healthcare services, Verified doctors connects to patients while admin manages patients, doctors to approve or disapprove according to sumited legal documents.",
      technologies: ["MERN Stack", "Groq API"],
      image: "https://i.ibb.co/2zBjb5S/Telemedicine.png",
      github: "https://github.com/NitishaSamtani/Telemedicine-app",
      liveDemo: "null"
    },
  ];
  return (
    <div className={styles.projectsContainer}>
      {projects.map(project => (
        <div key={project.id} className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              {project.github && (
                <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
              {project.conference && (
                <a href={project.conference} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  <FaNewspaper /> Publication
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;