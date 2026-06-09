// src/components/SearchBar/SearchBar.jsx

import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch, FaLaptop, FaCode, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onQuestionSelect }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const suggestedQuestions = [
    "What are the interesting projects Nitisha has worked on?",
    "What are her past experiences?",
    "What kind of opportunities is she looking for?",
    "Which college did she attend?",
    "What technologies does Nitisha know?",
    "Is Nitisha available for freelance?",
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery('');

    if (query.trim()) {
      navigate(`/chat?q=${encodeURIComponent(query)}`);
    }
  };

  const handleQuestionClick = (question) => {
    if (onQuestionSelect) {
      onQuestionSelect(question);
    } else {
      navigate(`/chat?q=${encodeURIComponent(question)}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form
        onSubmit={handleSubmit}
        className={`${styles.searchForm} ${isFocused ? styles.focused : ''}`}
      >
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Ask anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={styles.searchInput}
            autoComplete="off"
          />
        </div>

        <div className={styles.searchTools}>
          <button
            type="button"
            className={styles.toolButton}
            title="Projects"
            onClick={() => handleNavigation('/projects')}
          >
            <FaLaptop />
          </button>

          <button
            type="button"
            className={styles.toolButton}
            title="Skills"
            onClick={() => handleNavigation('/skills')}
          >
            <FaCode />
          </button>

          <button
            type="button"
            className={styles.toolButton}
            title="Experience"
            onClick={() => handleNavigation('/experience')}
          >
            <FaBriefcase />
          </button>

          <button
            type="submit"
            className={styles.searchButton}
            title="Search"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      <div className={styles.questionsContainer}>
        <h3 className={styles.questionsTitle}>Suggested Questions</h3>

        <div className={styles.questionsList}>
          {suggestedQuestions.map((q, index) => (
            <div
              key={index}
              className={styles.questionItem}
              onClick={() => handleQuestionClick(q)}
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.suggestedQuestions}>
        {suggestedQuestions.map((question, index) => (
          <div
            key={index}
            className={styles.questionItem}
            onClick={() => handleQuestionClick(question)}
          >
            {question}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SearchBar;