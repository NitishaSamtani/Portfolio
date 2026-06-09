// src/pages/HomePage/HomePage.jsx

import { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import InfoCards from '../../components/InfoCards/InfoCards';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import profileImage from '../../assets/nitisha.png';
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Data Analyst",
    "Software Developer",
    "Traveler",
    "Tech Enthusiast",
    "Foodie",
    "Artist"
  ];

  const navigate = useNavigate();

  const handleQuestionSelect = (question) => {
    navigate(`/chat?q=${encodeURIComponent(question)}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.headerActions}>
        <ThemeToggle />
      </div>

      <div className={styles.heroSection}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageContainer}>
            <img
              src={profileImage}
              alt="Profile"
              className={styles.profileImage}
            />
          </div>

          <h1 className={styles.profileName}>
            Nitisha Samtani
          </h1>

          <div className={styles.profileTitle}>
            {titles[titleIndex]}
          </div>
        </div>

        <h2 className={styles.heroTitle}>
          What do you want to know?
        </h2>

        <SearchBar onQuestionSelect={handleQuestionSelect} />
      </div>

      <InfoCards />

      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <a
            href="https://www.linkedin.com/in/nitisha-samtani-a79ab826a/"
            className={styles.profileLink}
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/NitishaSamtani/NitishaSamtani"
            className={styles.profileLink}
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="mailto:samtaninitisha@gmail.com"
            className={styles.profileLink}
            title="Mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} />
          </a>

          <a
            href="tel:+918805122808"
            className={styles.profileLink}
            title="Call"
            rel="noopener noreferrer"
          >
            <FaPhone size={24} />
          </a>
        </div>

        <div className={styles.lastUpdated}>
          <span>Last Updated: May 2026</span>
        </div>

        <div className={styles.language}>
          <span>© Nitisha's AI Chat Kernel</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;