# Prisma Creative Studio Landing Page

## Overview
A dark, cinematic landing page for Prisma creative studio featuring three main sections: Hero, About, and Features. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Design System

### Colors
- **Background**: Black (#000000) globally
- **Card Backgrounds**: 
  - About section: #101010
  - Feature cards: #212121
- **Primary Text**: #E1E0CC (inline styles)
- **Tailwind Primary**: #DEDBC8 (utility classes)
- **Gray Text**: text-gray-400, text-gray-500

### Typography
- **Primary Font**: Almarai (weights: 300, 400, 700, 800)
- **Accent Font**: Instrument Serif (italic only)
- Loaded via Google Fonts in `index.html`

### Visual Effects
- **Noise Overlays**: Two custom SVG noise textures
  - `.noise-overlay`: Hero video overlay (baseFrequency: 0.85, opacity: 0.7)
  - `.bg-noise`: Features section background (baseFrequency: 0.9, opacity: 0.15)

## Sections

### 1. Hero Section
- Full viewport height with inset padding effect
- Background video with noise and gradient overlays
- Floating navbar with 5 navigation items
- Giant "Prisma" heading with animated pull-up effect and superscript asterisk
- Description text and CTA button in 12-column grid layout
- Responsive typography scaling from 26vw to 19vw

### 2. About Section
- Centered card with dark background (#101010)
- Three-part heading with mixed typography:
  - Regular text in Almarai
  - Italic text in Instrument Serif
  - Animated word-by-word pull-up effect
- Body paragraph with scroll-linked character opacity animation
  - Each character fades from 0.2 to 1 opacity based on scroll position
  - Progressive text reveal effect

### 3. Features Section
- Subtle noise background texture
- Two-line animated header
- 4-column responsive grid (1-col mobile → 2-col tablet → 4-col desktop)
- Card types:
  1. **Video Card**: Full background video with overlay text
  2. **Project Storyboard**: Icon, title, 4 checklist items, "Learn more" link
  3. **Smart Critiques**: Icon, title, 3 checklist items, "Learn more" link
  4. **Immersion Capsule**: Icon, title, 3 checklist items, "Learn more" link
- Staggered entrance animations (scale + fade)

## Animation Components

### WordsPullUp
- Splits text by spaces into individual words
- Each word slides up from y:20 with staggered delay (0.08s)
- Optional superscript asterisk on final "a" character
- Triggered by `useInView` (once: true)

### WordsPullUpMultiStyle
- Accepts array of text segments with individual className
- Splits all segments into words while preserving styles
- Same pull-up animation as WordsPullUp
- Supports inline-flex flex-wrap layout

### AnimatedLetter
- Individual character wrapper for scroll-linked opacity
- Used in About section body text
- Transforms opacity based on scroll progress

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## File Structure
```
src/
├── components/
│   ├── animations/
│   │   ├── AnimatedLetter.tsx
│   │   ├── WordsPullUp.tsx
│   │   └── WordsPullUpMultiStyle.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Hero.tsx
│   └── PrismaLanding.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Key Features
- Fully responsive across all breakpoints
- Smooth scroll-linked animations
- Cinematic video backgrounds
- Custom SVG noise textures
- Staggered entrance animations
- Progressive text reveal effects
- Hover interactions on buttons and links

## Running the Project
```bash
# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Browser Compatibility
- Modern browsers with ES2020+ support
- Requires JavaScript enabled for animations
- Video autoplay support required for full experience
