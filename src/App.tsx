import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import LoveStorySection from './components/LoveStorySection';
import RevealCards from './components/RevealCards';
import PhotoGallery from './components/PhotoGallery';
import BigQuestion from './components/BigQuestion';
import Celebration from './components/Celebration';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYes = () => {
    setShowCelebration(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Music player */}
      <MusicPlayer />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <LoveStorySection />
        <RevealCards />
        <PhotoGallery />
        <BigQuestion onYes={handleYes} />
      </main>

      {/* Celebration overlay */}
      <AnimatePresence>
        {showCelebration && <Celebration />}
      </AnimatePresence>
    </div>
  );
}

export default App;
