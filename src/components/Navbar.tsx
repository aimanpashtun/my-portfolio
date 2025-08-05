import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#" style={{ fontWeight: 800 }}>Aiman</a>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
