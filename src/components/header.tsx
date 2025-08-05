// src/components/Header.tsx
import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        <div className="header-graphic">
          <h1 className="portfolio-word">Port<span>f</span>olio</h1>
          <span className="header-year">’25</span>
        </div>
        <img src="/my avatar.png" alt="Aiman Avatar" className="header-avatar" />
        <h2 className="header-name">Aiman Pashtun</h2>
        <p className="header-bio">
          I’m a Computer Science student passionate about building helpful, interactive websites
          and solving real-world problems with clean, thoughtful design and code.
        </p>
      </div>
    </header>
  );
};

export default Header;
