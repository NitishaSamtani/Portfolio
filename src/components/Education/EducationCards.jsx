// src/components/Education/EducationCards.jsx

import styles from './EducationCards.module.css';
import { FaGraduationCap, FaCalendarAlt, FaMedal } from 'react-icons/fa';

const EducationCards = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      specialization: "Computer Applications",
      institution: "University at Mumbai (VESIT)",
      period: "2025 - 2027",
      achievements: [
        "CGPA: 9.32/10.0",
        "Developed expertise in Data Analytics, Research Methods, and analytical problem-solving techniques",
        "Attended advanced Prompt Engineering workshops led by industry experts from Google",
        "Designed and implemented RAG pipelines from scratch using Large Language Models and vector search"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Information Technology (BSc IT)",
      specialization: "Information Technology",
      institution: "University at Mumbai (VESAC)",
      period: "2022 - 2025",
      achievements: [
        "CGPA: 8.28/10.0",
        "Studied core Computer Science concepts including Computer Networks, Databases, and Software Engineering",
        "Participated in technical workshops focused on emerging technologies and industry practices",
        "Explored Economics and its applications in business and technology decision-making",
        "Remote Web Development Intern at Oasis Infobyte, developing responsive web applications using HTML, CSS, JavaScript, and PHP",
        "Built projects including an E-Pharma Website that suggests medicines based on formula of the medicine, Portfolio Website",
        "Participated in technical and non-technical events to enhance problem-solving, teamwork, and communication skills"
      ]
    }
  ];

  return (
    <div className={styles.educationContainer}>
      {education.map((edu) => (
        <div key={edu.id} className={styles.educationCard}>
          <div className={styles.educationIcon}>
            <FaGraduationCap />
          </div>
          <div className={styles.educationContent}>
            <h3 className={styles.educationDegree}>{edu.degree}</h3>
            <div className={styles.educationSpecialization}>
              {edu.specialization}
            </div>
            <div className={styles.educationInstitution}>
              {edu.institution}
            </div>
            <div className={styles.educationPeriod}>
              <FaCalendarAlt /> {edu.period}
            </div>
            <div className={styles.educationAchievements}>
              <div className={styles.achievementsTitle}>
                <FaMedal /> Achievements
              </div>
              <ul className={styles.achievementsList}>
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCards;