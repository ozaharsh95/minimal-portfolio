import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LocalTime from './LocalTime';
import SkillsList from './SkillsList';
import ProjectsGrid from './ProjectsGrid';
import SpotifyPlayer from './SpotifyPlayer';
import HistoryTimeline from './HistoryTimeline';
import ContactBlock from './ContactBlock';
import Navbar from './Navbar';

export default function PortfolioMain() {
  // Theme state: slate-cyber, cyberpunk, emerald, light-minimalist
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'slate-cyber';
  });

  // Sync theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      <div className="portfolio-wrapper">
        <div className="bento-grid">
          
          {/* Row 1: Hero Block */}
          <section className="bento-card col-span-2 hero-card" id="about">
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Available for new projects</span>
          </div>
          <div>
            <h1 className="hero-title">Harsh Oza</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
          </div>
          <p className="hero-desc">
            Building premium, performance-first web platforms. Focused on modular architecture, intuitive design details, and reliable full-stack applications.
          </p>
        </section>

        {/* Row 1: Theme Switcher Block */}
        <ThemeSwitcher theme={theme} setTheme={setTheme} />

        {/* Row 2: Live clock widget */}
        <LocalTime />

        {/* Row 2: Interactive Tech Stack */}
        <SkillsList />

        {/* Row 3: Project grid */}
        <ProjectsGrid />

        {/* Row 3: Mock Spotify Player */}
        <SpotifyPlayer />

        {/* Row 4: Experience / Timeline */}
        <HistoryTimeline />

        {/* Row 4: Contact links */}
        <ContactBlock />

      </div>

      <footer className="bento-footer">
        <div>Designed &amp; Built in 2026 by Harsh Oza</div>
        <div>
          Powered by React • Vite • Vanilla CSS. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );
}
