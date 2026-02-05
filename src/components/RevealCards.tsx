import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CardContent {
  front: string;
  back: string;
  emoji: string;
}

const cardContents: CardContent[] = [
  {
    front: 'Your Eyes',
    back: 'The look in your eyes makes my heart skip a beat every single time.',
    emoji: '😊',
  },
  {
    front: 'Your Laugh',
    back: "Your laugh is my favorite sound in the world. I'd do anything to hear it.",
    emoji: '💜',
  },
  {
    front: 'Your Heart',
    back: 'You have the kindest, most beautiful heart. I envy the way you care for others.',
    emoji: '💗',
  },
  {
    front: 'Your Spirit',
    back: 'Your energy and passion for life are contagious.',
    emoji: '✨',
  },
  {
    front: 'Us Together',
    back: 'When I\'m with you, you make me a better person little by little.',
    emoji: '💑',
  },
  {
    front: 'The Future',
    back: 'I can\'t wait to create more memories with you. Every moment with you is a gift.',
    emoji: '🌟',
  },
];

const RevealCard = ({
  card,
  index,
}: {
  card: CardContent;
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, rotateY: 0 }
          : {}
      }
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full aspect-[3/4] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-purple/30 to-pink/30 backdrop-blur-sm border border-purple-light/30 flex flex-col items-center justify-center p-6 shadow-glow-purple"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              {card.emoji}
            </motion.span>
            <h3 className="font-script text-2xl md:text-3xl text-gradient text-center">
              {card.front}
            </h3>
            <p className="text-purple-light/60 text-sm mt-4">Tap to reveal</p>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-pink/30 to-purple/30 backdrop-blur-sm border border-pink/30 flex flex-col items-center justify-center p-6 shadow-glow-pink"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <span className="text-3xl mb-4">{card.emoji}</span>
            <p className="text-white/90 text-center text-base md:text-lg leading-relaxed font-elegant">
              {card.back}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const RevealCards = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 md:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-gradient mb-4">
          Reasons I Love You
        </h2>
        <p className="text-purple-light/70 text-lg md:text-xl mb-4">
          Tap each card to reveal something special
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto rounded-full" />
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {cardContents.map((card, index) => (
          <RevealCard key={index} card={card} index={index} />
        ))}
      </div>

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple/5 to-pink/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default RevealCards;
