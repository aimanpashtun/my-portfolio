import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onBack: () => void;
}

const Navbar = ({ onBack }: NavbarProps) => {
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

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#info">Background</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;