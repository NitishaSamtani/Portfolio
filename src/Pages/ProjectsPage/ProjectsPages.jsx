// src/pages/ProjectsPage/ProjectsPage.jsx

import React from 'react';
import ProjectCards from '../../components/Projects/ProjectCards';
import styles from './ProjectsPages.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <ProjectCards />
    </div>
  );
};

export default ProjectsPage;