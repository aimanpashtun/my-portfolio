import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-inner">
        {/* Left - Avatar + Name */}
        <div className="nav-left">
          <img src="/My PFP.jpg" alt="Aiman" className="nav-avatar" />
          <a href="#" className="nav-name">Aiman Pashtun</a>
        </div>

        {/* Middle - Centered Links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#info">Background</a> {/* scrolls to InfoSection */}
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right - Theme toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
