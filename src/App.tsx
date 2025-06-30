import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import Blog from './components/Blog';
import { Certifications } from './components/Certifications';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { ThemeProvider } from './utils/ThemeContext';
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <div className="flex flex-col items-center justify-center w-full h-screen bg-[#1a1a2e] text-white">
      <div className="text-2xl font-bold mb-4">
        Deploying Cloud Infrastructure...
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-[#FF9900] animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
    </div>;
  }
  return <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-[#1a1a2e] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Certifications />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>;
}