import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fireCelebration } from '../utils/confetti';

const Celebration = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Fire confetti immediately
    fireCelebration();

    // Show message after a short delay
    const timer = setTimeout(() => setShowMessage(true), 500);

    // Continue periodic confetti
    const confettiInterval = setInterval(() => {
      fireCelebration();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(confettiInterval);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] overflow-hidden"
    >
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: '100vh',
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: '-100vh',
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
            className="absolute text-2xl md:text-4xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {['💜', '💗', '💕', '💖', '✨'][Math.floor(Math.random() * 5)]}
          </motion.span>
        ))}
      </div>

      {/* Main celebration content */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        className="text-center z-10 px-4 max-w-3xl"
      >
        {/* Big heart animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-8xl md:text-9xl mb-8"
        >
          💜
        </motion.div>

        {/* YES! text */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-animated mb-8"
        >
          YES!!!
        </motion.h1>

        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl text-purple-light font-elegant"
            >
              You've made me the happiest person! 🥹
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-purple-light/80 font-script"
            >
              I can't wait to spend Valentine's Day with you
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="pt-8"
            >
              <div className="inline-block bg-gradient-to-r from-purple/20 to-pink/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-light/30">
                <p className="text-lg md:text-xl text-white/90 font-elegant leading-relaxed">
                  "In all the world, there is no heart for me like yours.
                  <br />
                  In all the world, there is no love for you like mine."
                </p>
                <p className="text-purple-light/60 mt-4 italic">
                  — Maya Angelou
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-3xl md:text-4xl font-script text-gradient mt-8"
            >
              I love you, Tatianna 💜
            </motion.p>
          </motion.div>
        )}
      </motion.div>

      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            className="text-xl md:text-2xl"
          >
            ✨
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default Celebration;
