import { ThemeIcon } from './Icons';

export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <section className="bento-card theme-card">
      <h3 className="card-title">
        <ThemeIcon /> Theme Selection
      </h3>
      <div className="theme-options">
        <button 
          className={`theme-btn ${theme === 'slate-cyber' ? 'active' : ''}`}
          onClick={() => setTheme('slate-cyber')}
        >
          <span>Slate Cyber</span>
          <span className="theme-color-preview" style={{ background: '#3b82f6' }}></span>
        </button>
        <button 
          className={`theme-btn ${theme === 'cyberpunk' ? 'active' : ''}`}
          onClick={() => setTheme('cyberpunk')}
        >
          <span>Cyberpunk Neon</span>
          <span className="theme-color-preview" style={{ background: '#ff007f' }}></span>
        </button>
        <button 
          className={`theme-btn ${theme === 'emerald' ? 'active' : ''}`}
          onClick={() => setTheme('emerald')}
        >
          <span>Earthy Emerald</span>
          <span className="theme-color-preview" style={{ background: '#10b981' }}></span>
        </button>
        <button 
          className={`theme-btn ${theme === 'light-minimalist' ? 'active' : ''}`}
          onClick={() => setTheme('light-minimalist')}
        >
          <span>Light Minimalist</span>
          <span className="theme-color-preview" style={{ background: '#4f46e5' }}></span>
        </button>
      </div>
    </section>
  );
}
