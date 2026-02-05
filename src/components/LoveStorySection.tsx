import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StoryPanel {
  title: string;
  content: string;
  emoji: string;
}

const storyPanels: StoryPanel[] = [
  {
    title: 'The Beginning',
    content: 'From the moment I met you, I knew there was something special about you. Your smile lit up the room and captured my heart.',
    emoji: '✨',
  },
  {
    title: 'Every Moment',
    content: 'Every laugh we share, every conversation, every quiet moment together - they all mean the world to me.',
    emoji: '💜',
  },
  {
    title: 'What You Mean to Me',
    content: "You're not just someone I care about - you're one of my favorite people, my best friend, and the one who lights up my life.",
    emoji: '💗',
  },
  {
    title: 'And Now...',
    content: "I have something special to ask you. Keep scrolling to find out what it is...",
    emoji: '💌',
  },
];

const StoryPanel = ({ panel, index }: { panel: StoryPanel; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex items-center gap-6 md:gap-12 ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Emoji decoration */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isVisible ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
        className="hidden md:flex w-24 h-24 rounded-full bg-gradient-to-br from-purple/20 to-pink/20 items-center justify-center text-4xl flex-shrink-0 shadow-glow-purple"
      >
        {panel.emoji}
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex-1 bg-gradient-to-br from-purple/10 to-pink/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-light/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="md:hidden text-2xl">{panel.emoji}</span>
          <h3 className="font-script text-2xl md:text-3xl text-gradient">
            {panel.title}
          </h3>
        </div>
        <p className="text-purple-light/80 text-base md:text-lg leading-relaxed font-elegant">
          {panel.content}
        </p>
      </motion.div>
    </motion.div>
  );
};

const LoveStorySection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-gradient mb-4">
          Our Story
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto rounded-full" />
      </motion.div>

      {/* Story panels */}
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        {storyPanels.map((panel, index) => (
          <StoryPanel key={index} panel={panel} index={index} />
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={sectionVisible ? { opacity: 0.1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-1/4 left-4 text-8xl text-purple/20 pointer-events-none"
      >
        💜
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={sectionVisible ? { opacity: 0.1 } : {}}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-1/4 right-4 text-7xl text-pink/20 pointer-events-none"
      >
        💗
      </motion.div>
    </section>
  );
};

export default LoveStorySection;
