import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const FloatingHearts = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    background: {
      opacity: 0,
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ['#9333ea', '#ec4899', '#c084fc', '#f472b6', '#ef4444'],
      },
      move: {
        direction: 'top',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 30,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      shape: {
        type: 'heart',
      },
      size: {
        value: { min: 8, max: 20 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 5,
      },
      rotate: {
        value: { min: 0, max: 360 },
        direction: 'random',
        animation: {
          enable: true,
          speed: 5,
        },
      },
    },
    detectRetina: true,
  };

  if (!init) {
    return null;
  }

  return <Particles id="tsparticles" options={options} />;
};

export default FloatingHearts;
