// src/pages/EducationPage/EducationPage.jsx

import React from 'react';
import EducationCards from '../../components/Education/EducationCards';
import styles from './EducationPage.module.css';

const EducationPage = () => {
  return (
    <div className={styles.educationPage}>
      <h1 className={styles.pageTitle}>Education</h1>
      <EducationCards />
    </div>
  );
};

export default EducationPage;