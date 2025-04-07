import { useEffect } from 'react';
import { Navbar, Footer } from './components';
import { HeroSection,ProjectsSection, AboutSection, Experience, SkillsSection } from './sections';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#1c1d1e]" id='inicio'>
      <Navbar />
      <HeroSection />
      <main className='w-full bg-[#161719] flex flex-col items-center'>
        <ProjectsSection />
        <AboutSection />
        <Experience />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
