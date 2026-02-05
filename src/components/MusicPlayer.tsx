import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/music/song.mp3'],
      loop: true,
      volume: 0.5,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const togglePlay = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setShowPrompt(false);
  };

  return (
    <>
      {/* Music prompt overlay */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center p-8 max-w-md"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                💜
              </motion.div>
              <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">
                Something Special Awaits
              </h2>
              <p className="text-purple-light/80 mb-8 text-lg">
                For the best experience, turn on the music
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="px-8 py-4 bg-gradient-to-r from-purple to-pink rounded-full font-elegant text-lg shadow-glow-purple hover:shadow-glow-pink transition-all duration-300"
                >
                  🎵 Play Music & Enter
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPrompt(false)}
                  className="px-8 py-4 border-2 border-purple-light/50 rounded-full font-elegant text-lg hover:border-pink transition-all duration-300"
                >
                  Enter Without Music
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music control */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={togglePlay}
        className={`fixed top-4 right-4 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying
            ? 'bg-gradient-to-r from-purple to-pink shadow-glow-purple'
            : 'bg-background-light/80 border border-purple-light/30'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            🎵
          </motion.div>
        ) : (
          <span className="text-purple-light/70">🔇</span>
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
