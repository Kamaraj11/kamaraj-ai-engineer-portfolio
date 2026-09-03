import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EngineeringFocus from '@/components/EngineeringFocus';
import Metrics from '@/components/Metrics';
import ArchitectureLab from '@/components/ArchitectureLab';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import GitHub from '@/components/GitHub';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringFocus />
        <Metrics />
        <ArchitectureLab />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
