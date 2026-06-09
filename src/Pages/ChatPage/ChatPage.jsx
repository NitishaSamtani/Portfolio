// src/pages/ChatPage/ChatPage.jsx

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ChatPage.module.css';
import { FaUser } from 'react-icons/fa';
import SearchBar from '../../components/SearchBar/SearchBar';

const ChatPage = () => {
  const location = useLocation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      setQuestion(decodeURIComponent(query));
      fetchAnswer(decodeURIComponent(query));
    }
  }, [location.search]);

  const fetchAnswer = (q) => {
    setLoading(true);

    // Simulate API call with predefined answers
    setTimeout(() => {
      let response = '';

      if (q.includes('projects') || q.includes('project')) {
        response = "Oh, where do I start? Nitisha has built some pretty cool stuff—like HI2SQL (Text to SQL), CampusConnect (a real-time student community platform), and telemedicine (users to consult doctors online). Whether it’s ML, full-stack dev, or clever use of LLMs, Nitisha loves turning ideas into real-world tools.";
      } else if (q.includes('experience') || q.includes('work') || q.includes('job')) {
        response ="Frontend Developer with experience at Oasis Infobyte, focused on building engaging and user-friendly web applications.Equipped with MERN Stack and Data Analytics fundamentals, and actively seeking opportunities to apply and expand my skills.";
      } else if ( q.includes('university') || q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('studied') || q.includes('study')) {
        response = "Nitisha pursued a Master’s of Computer Applications (MCA) at University of Mumbai(VESIT), where she learned fundamentals of AI/Ml, data analytics. She also completed a Bachelor's of Science in Information Technology from the University of Mumbai (VESAC), where she developed a strong foundations in programming, data structures, and computer networks.";
      } else if (q.includes('technologies') || q.includes('tech') || q.includes('tools')) {
        response = "Nitisha is highly skilled in technologies like Java, AWS, Docker, React, and Node.js. She has built full-stack applications, and deploying scalable solutions.";
      } else if (q.includes('freelance')) {
        response = "Yes, Nitisha is open to freelance opportunities-especially ones involving AI/ML, chatbot development, or full-stack applications. If you're working on something innovative or challenging, feel free to reach out!";
      } else if (q.includes('skills') || q.includes('tech stack')) {
        response = "Nitisha’s core skills include frontend and backend development (React, Node.js), Data Scientist (Matplotlib, Pandas), and cloud infrastructure (AWS, Docker). She has developed projects involving Large Language Models (LLMs), RESTful APIs, WebSocket-based real-time systems, and scalable AI-driven applications.";
      } else if (q.includes('working') || q.includes('current')) {
        response = "Nitisha is currently working on personal and academic projects while continuously expanding her knowledge in software development and data analytics. She is open to internships, full-time roles, and opportunities that provide meaningful challenges and professional growth.";      
      } else if (q.includes('best')) {
          response = "No doubt. Nitisha Samtani. She is the best!";
      } else if (q.includes('opportunities') || q.includes('internship')) {
        response = "Nitisha is looking for opportunities that challenge her and allow her to grow. She’s particularly interested in roles that involve Analytics, full-stack development, data science or innovative tech solutions. If you have something in mind, don’t hesitate to reach out!";
      } else if (q.includes('contact') || q.includes('reach out')) {
        response = "You can reach out to Nitisha via LinkedIn or email. She’s always open to discussing new ideas, collaborations, or just having a good tech chat!";
      } else if (q.includes('hobbies') || q.includes('travel') || q.includes('interests')) {
        response = "Nitisha’s hobbies? Oh, just the usual things— traveling, cooking, painting, and of course, coding to escape reality. Basically, if you ever find her, she’s either exploring new places, experimenting in the kitchen, adding accidental modern art to a canvas, or debugging her way through life. 😄";
      } else {
        response = "Hey! Thanks for exploring this portfolio. Feel free to ask about Nitisha's projects, experience, education, or anything tech-related!";
      }

      setAnswer(response);
      setLoading(false);
    }, 1000);
  };

  const handleQuestionSelect = (q) => {
    setQuestion(q);
    fetchAnswer(q);
  };

  return (
    <div className={styles.chatPage}>
      <div className={styles.chatContainer}>
        {question && (
          <div className={styles.messageContainer}>
            <div className={styles.userMessage}>
              <div className={styles.userAvatar}>
                <FaUser />
              </div>
              <div className={styles.messageContent}>
                <div className={styles.messageSender}>You</div>
                <div className={styles.messageText}>{question}</div>
              </div>
            </div>

            {loading ? (
              <div className={styles.botMessage}>
                <div className={styles.botAvatar}>
                  <img src="https://i.ibb.co/39xphJk6/N.png" alt="Logo" />
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.messageSender}>Nitisha</div>
                  <div className={styles.loadingDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            ) : answer && (
              <div className={styles.botMessage}>
                <div className={styles.botAvatar}>
                  <img src="https://i.ibb.co/39xphJk6/N.png" alt="Logo" />
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.messageSender}>Nitisha</div>
                  <div className={styles.messageText}>{answer}</div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className={styles.searchBarContainer}>
          <SearchBar onQuestionSelect={handleQuestionSelect} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;