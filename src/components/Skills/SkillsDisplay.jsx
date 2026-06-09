// src/components/Skills/SkillsDisplay.jsx

import React from 'react';
import styles from './SkillsDisplay.module.css';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaRobot,
  FaLanguage,
  FaDatabase,
  FaJava,
  FaChartBar
} from 'react-icons/fa';
import {
  SiPython,
  SiJavascript,
  SiDjango,
  SiMysql,
  SiOllama,
  SiChatbot,
  SiPandas,
  SiNumpy
} from 'react-icons/si';
import { IoLogoTableau } from "react-icons/io5";
import { SiGo } from "react-icons/si";

const SkillsDisplay = () => {
  const skillCategories = [
    {
      category: "Languages and Frameworks and Libraries",
      skills: [
        {name : "Java", icon: <FaJava />, level: "Intermediate"},
        { name: "Python", icon: <SiPython />, level: "Intermediate"},
        { name: "Javascript", icon: <SiJavascript />, level: "Intermediate"},
        { name: "React", icon: <FaReact />, level: "Intermediate"},
        { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate"},
        { name: "GoLang", icon: <SiGo />, level: "Beginner"},
        { name: "Pandas", icon: <SiPandas />, level: "Intermediate" },
        { name: "Numpy", icon: <SiNumpy />, level: "Intermediate" }
        
      ]
    },
    {
      category: "Data and Cloud",
      skills: [
        { name: "SQL", icon: <SiMysql />, level: "Advanced"},
        { name: "AWS", icon: <FaAws />, level: "Intermediate" },
        { name: "Docker", icon: <FaDocker />, level: "Intermediate"},
        { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
        {name: "Tableau", icon: <IoLogoTableau />, level: "Intermediate" },
      ]
    },
    {
      category: "AI and ML",
      skills: [
        { name: "Data Analytics", icon: <FaChartBar />, level: "Intermediate" },
        { name: "Data Science", icon: <FaDatabase />, level: "Beginner"},
        { name: "Machine Learning", icon: <FaRobot />, level: "Beginner"},
        { name: "LLM", icon: <SiOllama />, level: "Beginner"},
        { name: "NLP", icon: <FaLanguage />, level: "Beginner"},
      ]
    }
  ];

  return (
    <div className={styles.skillsContainer}>
      {skillCategories.map((category, index) => (
        <div key={index} className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>

          <div className={styles.skillsGrid}>
            {category.skills.map((skill, idx) => (
              <div key={idx} className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  {skill.icon || skill.name.charAt(0)}
                </div>

                <div className={styles.skillInfo}>
                  <div className={styles.skillName}>
                    {skill.name}
                  </div>

                  <div className={styles.skillMeta}>
                    <span className={styles.skillLevel}>
                      {skill.level}
                    </span>

                    <span className={styles.skillYears}>
                      {skill.years}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDisplay;