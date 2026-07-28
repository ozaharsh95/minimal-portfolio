import { useState } from 'react';
import { CodeIcon } from './Icons';

const skills = [
  { name: 'ReactJS', category: 'frontend' },
  { name: 'NextJS', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5 & CSS3', category: 'frontend' },
  { name: 'TailwindCSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'ExpressJS', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Vite', category: 'tools' },
];

export default function SkillsList() {
  const [skillFilter, setSkillFilter] = useState('all');

  const filteredSkills = skillFilter === 'all' 
    ? skills 
    : skills.filter(s => s.category === skillFilter);

  return (
    <section className="bento-card col-span-2 skills-card" id="skills">
      <div className="spotify-header">
        <h3 className="card-title">
          <CodeIcon /> Tech Stack
        </h3>
        <div className="skills-filter">
          {['all', 'frontend', 'backend', 'tools'].map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${skillFilter === cat ? 'active' : ''}`}
              onClick={() => setSkillFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-tag">
            <span className="skill-icon">●</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
