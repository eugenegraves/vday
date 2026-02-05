import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import RunawayButton from './RunawayButton';

interface BigQuestionProps {
  onYes: () => void;
}

const BigQuestion = ({ onYes }: BigQuestionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Decorative hearts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isVisible
                ? {
                    opacity: 0.2 + Math.random() * 0.3,
                    scale: 1,
                    y: [0, -20, 0],
                  }
                : {}
            }
            transition={{
              delay: i * 0.2,
              duration: 3,
              y: { repeat: Infinity, duration: 2 + Math.random() * 2 },
            }}
            style={{
              position: 'absolute',
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              fontSize: `${1.5 + Math.random() * 2}rem`,
            }}
            className="text-purple"
          >
            💜
          </motion.span>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-2xl"
      >
        {/* Build up text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-purple-light/70 text-lg md:text-xl mb-6 tracking-wide"
        >
          I have something important to ask you...
        </motion.p>

        {/* The big question */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-animated mb-4 leading-tight"
        >
          Will you be my
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8, type: 'spring' }}
          className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-animated mb-12"
        >
          Valentine? 💜
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="space-y-6"
        >
          {/* YES button */}
          <motion.button
            onClick={onYes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)',
                '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
                '0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)',
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity },
            }}
            className="w-full sm:w-auto px-16 py-5 bg-gradient-to-r from-purple via-pink to-purple rounded-full text-white text-2xl md:text-3xl font-script tracking-wide transition-all duration-300 border-2 border-white/20"
          >
            Yes! 💜
          </motion.button>

          {/* NO button (runaway) */}
          <RunawayButton />
        </motion.div>
      </motion.div>

      {/* Subtle hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="absolute bottom-8 text-purple-light/40 text-sm italic"
      >
        (There's only one right answer here... 💜)
      </motion.p>
    </section>
  );
};

export default BigQuestion;
