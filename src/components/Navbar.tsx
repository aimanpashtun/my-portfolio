import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onBack: () => void;
}

const Navbar = ({ onBack }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-left">
          <button className="back-button" onClick={onBack} aria-label="Back to start">
            ← Back
          </button>
          <img src="/My PFP.jpg" alt="Aiman" className="nav-avatar" />
          <a href="#" className="nav-name">Aiman Pashtun</a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#info" onClick={() => setMenuOpen(false)}>Background</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="nav-right">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;