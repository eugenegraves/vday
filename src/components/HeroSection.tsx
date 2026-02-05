import { motion } from 'framer-motion';

const HeroSection = () => {
  const nameLetters = 'Tatianna'.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkleVariants}
          animate="animate"
          style={{
            position: 'absolute',
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.3}s`,
          }}
          className="text-2xl md:text-3xl"
        >
          ✨
        </motion.div>
      ))}

      {/* Decorative hearts */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-20 left-10 text-6xl md:text-8xl text-purple/30"
      >
        💜
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-32 right-10 text-5xl md:text-7xl text-pink/30"
      >
        💗
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-purple-light/80 text-lg md:text-xl mb-4 tracking-widest uppercase"
        >
          For Someone Special
        </motion.p>

        {/* Animated name */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6"
        >
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block text-gradient-animated"
              style={{ textShadow: '0 0 40px rgba(147, 51, 234, 0.5)' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-xl md:text-2xl text-purple-light/60"
        >
          <span>💜</span>
          <span className="font-elegant italic">This is for you</span>
          <span>💜</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-purple-light/60 text-sm tracking-widest uppercase">
            Scroll Down
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-2xl"
          >
            💜
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
