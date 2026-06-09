// src/components/Experience/ExperienceTimeline.jsx

import styles from './ExperienceTimeline.module.css';
import { FaBriefcase, FaBuilding } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 0,
      role: "Remote Web Developer Intern",
      company: "Oasis Infobyte",
      period: "May 2023 - July 2023",
      description: "Worked on web development projects, applying frontend technologies to build responsive and user-friendly applications.",
      achievements: [
        "Developed responsive and visually appealing user interfaces using HTML, CSS and JavaScript.",
        "Built interactive web components, implemented client-side functionality, and optimized user experience across devices.",
        "Applied modern frontend development practices, including responsive design, component-based architecture, and UI optimization."
      ]
    },
  ];

  return (
    <div className={styles.timelineContainer}>
      {experiences.map((exp, _) => (
        <div key={exp.id} className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <FaBriefcase />
          </div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <h3 className={styles.timelineRole}>{exp.role}</h3>
              <div className={styles.timelineCompany}>
                <FaBuilding /> {exp.company}
              </div>
              <div className={styles.timelinePeriod}>{exp.period}</div>
            </div>
            <p className={styles.timelineDescription}>{exp.description}</p>
            <ul className={styles.achievementsList}>
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className={styles.achievementItem}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;