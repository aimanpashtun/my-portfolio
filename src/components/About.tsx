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
        Hi! I'm Aiman Pashtun, a Computer Science student currently studying at Irvine Valley College.
        I'm a sophomore who also serves as the secretary of the Girls Who Code Club and the president of 
        the Book Club. I love coding in my free time and constantly explore new languages and tools as the 
        tech world keeps evolving. Outside of coding, I'm really passionate about literature. I'm part of 
        the honors newsletter team and the editing staff for our literary journal, The Ear. When I'm not 
        studying, you’ll probably find me reading fantasy or romance books, rewatching my comfort shows, 
        watching Formula 1, going to the beach, chasing sunsets, spending time with family and friends, 
        or video editing.
      </p>

      {/* Resume Button */}
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        View My Resume →
      </a>

      {/* Embedded Info Section */}
      <div className="info-wrapper">
        <InfoSection />
      </div>
    </motion.section>
  );
};

export default About;