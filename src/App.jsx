// src/App.jsx

import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import HomePage from './Pages/HomePage/HomePage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';
import EducationPage from './Pages/EducationPage/EducationPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPages';
import ChatPage from './Pages/ChatPage/ChatPage';

import { ThemeProvider } from './contexts/ThemeContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Layout>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;