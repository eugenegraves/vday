# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

v-day is a Valentine's Day website for Tatianna. It's a mobile-first, interactive React application featuring animated storytelling, reveal cards, particle effects, background music, and a playful "No" button that dodges clicks.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Architecture

### Tech Stack
- **Vite + React + TypeScript** - Build tool and framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and gestures
- **canvas-confetti** - Confetti explosions
- **@tsparticles** - Floating hearts background
- **Howler.js** - Background music

### Color Palette
- Purple shades (#9333ea, #a855f7, #c084fc) - Primary
- Valentine pink (#ec4899, #f472b6) - Accent
- Romantic red (#ef4444) - Hearts
- Deep purple-black gradient (#1a0a2e → #2d1b4e) - Background

### File Structure
```
src/
├── main.tsx                    # App entry point
├── App.tsx                     # Main app component
├── index.css                   # Tailwind + custom styles
├── components/
│   ├── HeroSection.tsx         # Animated intro with name
│   ├── LoveStorySection.tsx    # Scroll-triggered story panels
│   ├── RevealCards.tsx         # Flip cards with messages
│   ├── PhotoGallery.tsx        # Photo grid with lightbox
│   ├── BigQuestion.tsx         # "Be my Valentine?" section
│   ├── RunawayButton.tsx       # Dodging "No" button
│   ├── Celebration.tsx         # Confetti finale on "Yes"
│   ├── FloatingHearts.tsx      # Particle background
│   └── MusicPlayer.tsx         # Music controls
├── hooks/
│   └── useScrollAnimation.ts   # Intersection observer hook
└── utils/
    └── confetti.ts             # Confetti helper functions
```

### Customization
- Add photos to `public/photos/` (photo1.jpg through photo6.jpg)
- Add background song to `public/music/song.mp3`
- Edit messages in RevealCards.tsx and LoveStorySection.tsx
