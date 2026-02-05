import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RunawayButtonProps {
  onClick?: () => void;
}

const RunawayButton = ({ onClick }: RunawayButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [isGone, setIsGone] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const runAway = useCallback(() => {
    if (!buttonRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();

    // Calculate max movement within container
    const maxX = container.width - button.width;
    const maxY = container.height - button.height;

    // Generate random position, getting more erratic with attempts
    const speedMultiplier = Math.min(1 + attempts * 0.2, 2);
    const newX = (Math.random() - 0.5) * maxX * speedMultiplier;
    const newY = (Math.random() - 0.5) * maxY * speedMultiplier;

    // Clamp to container bounds
    const clampedX = Math.max(-maxX / 2, Math.min(maxX / 2, newX));
    const clampedY = Math.max(-maxY / 2, Math.min(maxY / 2, newY));

    setPosition({ x: clampedX, y: clampedY });
    setAttempts((prev) => prev + 1);

    // After enough attempts, button disappears
    if (attempts >= 5) {
      setIsGone(true);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  }, [attempts]);

  const handleClick = () => {
    if (onClick) onClick();
  };

  if (isGone) {
    return (
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center"
          >
            <span className="text-purple-light/80 text-lg italic">
              The "No" button ran away... 💨
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-24 flex items-center justify-center"
    >
      <motion.button
        ref={buttonRef}
        animate={{
          x: position.x,
          y: position.y,
          scale: 1 - attempts * 0.08,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        onMouseEnter={runAway}
        onTouchStart={runAway}
        onClick={handleClick}
        className="px-8 py-3 bg-gradient-to-r from-gray-600/50 to-gray-700/50 backdrop-blur-sm rounded-full text-gray-300 text-lg font-elegant border border-gray-500/30 hover:border-gray-400/50 transition-all duration-200 cursor-pointer select-none"
        style={{ touchAction: 'none' }}
      >
        No
      </motion.button>
    </div>
  );
};

export default RunawayButton;
