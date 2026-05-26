import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 relative">
      {/* Ambient background */}
      <ParticleBackground />
      <CursorGlow />

      {/* Fixed top-level background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pointer-events-none z-0" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <CodingProfiles />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}
