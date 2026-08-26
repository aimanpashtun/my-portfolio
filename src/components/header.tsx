// src/components/Header.tsx
import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        <div className="header-graphic">
          <h1 className="portfolio-word">Port<span>f</span>olio</h1>
          <span className="header-year">’26</span>
        </div>

        <div className="header-avatar-container">
          <img src="/my avatar.png" alt="Aiman Avatar" className="header-avatar" />
          <img src="/UCLA-flag.png" alt="UCLA Go Bruins flag" className="header-flag" />
        </div>

        <h2 className="header-name">Aiman Pashtun</h2>

        <div className="social-row">
          <a href="https://www.linkedin.com/in/aiman-p/" target="_blank" rel="noreferrer" className="social-circle" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
          </a>

          <a href="mailto:aimanpashtun@ucla.edu" className="social-circle" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z"/>
            </svg>
          </a>

          <a href="https://github.com/aimanpashtun" target="_blank" rel="noreferrer" className="social-circle" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z"/>
            </svg>
          </a>
        </div>

        <p className="header-bio">
          I’m a Computer Science student passionate about building helpful, interactive websites/applications,
          and solving real-world problems with clean, thoughtful design and code.
        </p>
      </div>
    </header>
  );
};

export default Header;