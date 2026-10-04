import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      {!introFinished && <Intro onComplete={() => setIntroFinished(true)} />}
      
      <div style={{
        opacity: introFinished ? 1 : 0,
        transform: introFinished ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
        visibility: introFinished ? 'visible' : 'hidden'
      }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <footer style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <p>© {new Date().getFullYear()} Samiksha Burte. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
