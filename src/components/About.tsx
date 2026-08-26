// src/components/About.tsx
import { motion } from 'framer-motion';
import InfoSection from './InfoSection';
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="section-box"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Subheading */}
      <h2 className="about-name-heading">About Me</h2>

      {/* Bio */}
      <p className="about-bio">
        Hi there! I'm Aiman Pashtun, a Linguistics & Computer Science Honors student currently studying at UCLA.
        I'm a Junior working on my side projects whilst balancing my academics and personal life.
        I enjoy coding in my free time by constantly exploring new languages and tools as the 
        tech world keeps evolving. I keep up with up-to-date trends in the industry. Outside of coding,
        I'm involved in GWC, RTC, and women-supporting organizations in tech. When I'm not 
        doing any of the above, you’ll probably find me reading books, rewatching my comfort shows, 
        catching up with Formula 1, going to the beach, chasing sunsets, spending time with family and friends, 
        or video editing.
      </p>

      {/* Resume Button */}
      <a
        href="/Aiman's Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        View My Resume
      </a>

      {/* Embedded Info Section */}
      <div className="info-wrapper">
        <InfoSection />
      </div>
    </motion.section>
  );
};

export default About;