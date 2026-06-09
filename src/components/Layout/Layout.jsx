// src/components/Layout/Layout.jsx

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleQuestionSelect = (question) => {
    navigate(`/chat?q=${encodeURIComponent(question)}`);
  };

  return (
    <div className={styles.layout}>
      <Sidebar onQuestionSelect={handleQuestionSelect} />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;