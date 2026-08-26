// src/components/InfoSection.tsx
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section id="info" className="section-box info-section">
      <h2 className="background-heading">Background</h2>
      <div className="info-grid">

        <div className="info-column">
          <h3>Education</h3>
          <ul className="edu-list">
            <li>
              <span className="edu-degree">B.A. Linguistics & Computer Science</span>
              <span className="edu-school">University of California, Los Angeles (UCLA)</span>
              <span className="edu-date">Expected June 2028</span>
            </li>
            <li>
              <span className="edu-degree">A.A. Liberal Arts</span>
              <span className="edu-school">Irvine Valley College</span>
              <span className="edu-date">Completed May 2026</span>
            </li>
            <li>
              <span className="edu-degree">High School Diploma</span>
              <span className="edu-school">Ayse Erkan Kız Imam Hatip High School</span>
              <span className="edu-date">Completed 2024</span>
            </li>
            <li>
              <span className="edu-degree">Secondary Education</span>
              <span className="edu-school">Kardan International School</span>
              <span className="edu-date">Completed 2021</span>
            </li>
          </ul>
        </div>

        <div className="info-column">
          <h3>Experience</h3>
          <ul>
            <li>Full Stack Developer – CodeBase</li>
            <li>Mentor & Club Secretary – Girls Who Code</li>
            <li>Senior Staff Editor – The Ear (Literary Journal)</li>
            <li>President – Book Club</li>
            <li>Writer – Honors Newsletter</li>
          </ul>
        </div>

        <div className="info-column">
          <h3>Languages</h3>
          <ul>
            <li>English — Fluent</li>
            <li>Turkish — Fluent</li>
            <li>Persian — Fluent</li>
            <li>Pashto — Native</li>
            <li>Urdu - Conversational</li>
            <li>Arabic — Beginner</li>
            <li></li>
          </ul>
        </div>

        <div className="info-column">
          <h3>Skills & Tools</h3>
          <ul>
            <li>Python, Java, JavaScript/TypeScript</li>
            <li>HTML, CSS, React</li>
            <li>SQL, Git/GitHub, Agile</li>
            <li>VS Code, Figma, Node.js, Eclipse, QT</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;