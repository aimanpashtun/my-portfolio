import './Intro.css';
import ThemeToggle from './ThemeToggle';

interface IntroProps {
  onComplete: () => void;
}

function Intro({ onComplete }: IntroProps) {
  return (
    <section className="intro-screen">
      <div className="intro-theme-toggle">
        <ThemeToggle />
        </div>
        
        <div className="intro-stage">
            <div className="character-container">
            <img
                src="/avatar.png"
                alt="Aiman avatar"
                className="intro-avatar"
            />

          <img
            src="/UCLA-flag.png"
            alt="UCLA Go Bruins flag"
            className="ucla-flag-image"
          />
        </div>

        <div className="intro-text">
          <h1>Aiman Pashtun</h1>
          <p>Linguistics & Computer Science @ UCLA</p>
        </div>

        <button className="enter-button" onClick={onComplete}>
          Enter Portfolio
        </button>
      </div>
    </section>
  );
}

export default Intro;