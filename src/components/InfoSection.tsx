// src/components/InfoSection.tsx
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section id="info" className="section-box info-section">
      <h2 className="fancy-heading">Background</h2>
      <div className="info-grid">
        <div className="info-column">
          <h3>📚 Education</h3>
          <ul>
            <li>Kardan International School</li>
            <li>Ayse Erkan Kız Imam Hatip High School</li>
            <li>Irvine Valley College – Computer Science</li>
          </ul>
        </div>

        <div className="info-column">
          <h3>🌟 Extracurriculars</h3>
          <ul>
            <li>President – Book Club</li>
            <li>Staff Editor – The Ear (Literary Journal)</li>
            <li>Secretary – Girls Who Code Club</li>
          </ul>
        </div>

        <div className="info-column">
          <h3>📬 Contact</h3>
          <ul>
            <li>Email: <a href="mailto:apashtun1@ivc.edu">apashtun1@ivc.edu</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/aiman-p/" target="_blank" rel="noreferrer">/aimanpashtun</a></li>
            <li>GitHub: <a href="https://github.com/aimanpashtun" target="_blank" rel="noreferrer">/aimanpashtun</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
