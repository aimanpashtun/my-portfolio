import { useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="App">
          <Navbar onBack={() => setShowIntro(true)} />

          <main>
            <Header />
            <About />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;