import confetti from 'canvas-confetti';

export const fireConfetti = () => {
  const duration = 5000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#9333ea', '#ec4899', '#c084fc', '#f472b6', '#ef4444'],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#9333ea', '#ec4899', '#c084fc', '#f472b6', '#ef4444'],
    });
  }, 250);
};

export const fireHearts = () => {
  const heartShape = confetti.shapeFromPath({
    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  });

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 20,
    shapes: [heartShape],
    colors: ['#9333ea', '#ec4899', '#ef4444', '#c084fc'],
    scalar: 2,
  };

  confetti({
    ...defaults,
    particleCount: 30,
    origin: { x: 0.5, y: 0.5 },
  });

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 20,
      origin: { x: 0.3, y: 0.6 },
    });
  }, 200);

  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 20,
      origin: { x: 0.7, y: 0.6 },
    });
  }, 400);
};

export const fireCelebration = () => {
  fireConfetti();
  setTimeout(fireHearts, 500);
  setTimeout(fireHearts, 1500);
  setTimeout(fireHearts, 2500);
};
