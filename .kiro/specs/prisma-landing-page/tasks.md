# Implementation Plan: Prisma Landing Page

## Overview

This implementation plan breaks down the Prisma landing page into discrete coding tasks. The page is a React + TypeScript + Vite single-page application with three main sections (Hero, About, Features), sophisticated framer-motion animations, and a dark cinematic design with Tailwind CSS.

The implementation follows a bottom-up approach: starting with project setup, then building reusable animation components, followed by section-specific components, and finally integrating everything together.

## Tasks

- [x] 1. Initialize project and configure build tools
  - Create new Vite + React + TypeScript project
  - Install dependencies: tailwindcss, framer-motion, lucide-react
  - Configure Tailwind CSS with custom theme extensions (primary color #DEDBC8, serif font family)
  - Set up TypeScript configuration for React
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 2. Set up fonts and custom CSS utilities
  - Add Google Fonts links to index.html for Almarai (weights: 300, 400, 700, 800) and Instrument Serif (italic)
  - Set Almarai as global default font family in index.css
  - Create noise-overlay CSS utility class using SVG data URI with feTurbulence filter
  - Create bg-noise CSS utility class with pseudo-element for background noise texture
  - _Requirements: 1.6, 1.7, 1.8, 1.9_

- [ ] 3. Implement animation components
  - [ ] 3.1 Create WordsPullUp component
    - Implement text splitting by spaces into individual words
    - Wrap each word in motion.span with overflow hidden
    - Animate from y:20, opacity:0 to y:0, opacity:1 with 0.08s stagger
    - Add useInView hook to trigger animation once on viewport entry
    - Support optional showAsterisk prop for superscript asterisk rendering
    - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7_
  
  - [ ] 3.2 Write unit tests for WordsPullUp
    - Test text splitting into words
    - Test asterisk rendering when showAsterisk is true
    - Test custom className application
    - Test animation trigger on viewport entry
  
  - [ ] 3.3 Create WordsPullUpMultiStyle component
    - Accept array of segment objects with text and className properties
    - Split all segments into words while preserving each word's className
    - Wrap words in inline-flex flex-wrap justify-center container
    - Animate each word from y:20, opacity:0 to y:0, opacity:1 with 0.08s stagger
    - Add useInView hook to trigger animation once
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6_
  
  - [ ] 3.4 Write unit tests for WordsPullUpMultiStyle
    - Test segment processing and word splitting
    - Test className preservation per word
    - Test animation stagger across all words
  
  - [ ] 3.5 Create AnimatedLetter component
    - Accept character, index, and totalChars as props
    - Use useScroll hook with target offset ['start 0.8', 'end 0.2']
    - Calculate character progress as index / totalChars
    - Map scroll progress to opacity using range [charProgress - 0.1, charProgress + 0.05]
    - Transition opacity from 0.2 to 1.0 based on scroll position
    - Render character in motion.span
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6_
  
  - [ ] 3.6 Write unit tests for AnimatedLetter
    - Test character rendering
    - Test scroll progress calculation
    - Test opacity range mapping

- [ ] 4. Checkpoint - Ensure animation components work
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Implement Hero section components
  - [ ] 5.1 Create VideoBackground component
    - Accept videoUrl prop
    - Render video element with autoPlay, loop, muted, playsInline attributes
    - Apply object-cover for full container fill
    - Add noise overlay layer with 70% opacity and mix-blend-overlay
    - Add gradient overlay (from-black/30 via-transparent to-black/60)
    - Implement error handling for video loading failures with fallback background
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  
  - [ ] 5.2 Create Navbar component
    - Position absolutely at top center with black background
    - Apply rounded bottom corners (rounded-b-2xl md:rounded-b-3xl)
    - Render five navigation items: "Our story", "Collective", "Workshops", "Programs", "Inquiries"
    - Use responsive text sizing (text-[10px] sm:text-xs md:text-sm)
    - Use responsive gaps (gap-3 sm:gap-6 md:gap-12 lg:gap-14)
    - Implement hover state color transition from rgba(225, 224, 204, 0.8) to #E1E0CC
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_
  
  - [ ] 5.3 Create CTAButton component
    - Accept text and optional onClick props
    - Render pill-shaped button (rounded-full) with Primary_Color background
    - Add right-aligned circle containing ArrowRight icon from lucide-react
    - Implement hover animations: increase gap and scale circle to 110%
    - Use framer-motion for smooth transitions
    - _Requirements: 6.4, 6.5, 6.6_
  
  - [ ] 5.4 Create HeroSection component
    - Set up full viewport height container (min-h-screen)
    - Apply padding for inset effect (p-4 md:p-6)
    - Create rounded container (rounded-2xl md:rounded-[2rem]) with overflow hidden
    - Implement 12-column grid layout with content at bottom (items-end)
    - Integrate VideoBackground with hero video URL
    - Integrate Navbar component
    - Render "Prisma" heading using WordsPullUp with showAsterisk prop
    - Apply responsive heading sizing (text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw])
    - Style heading with font-medium, leading-[0.85], tracking-[-0.07em], color #E1E0CC
    - Add description text with animation (fade in from y:20 with 0.5s delay)
    - Integrate CTAButton with "Join the lab" text and animation (fade in from y:20 with 0.7s delay)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.7_
  
  - [ ] 5.5 Write integration tests for Hero section
    - Test video background loads and plays
    - Test navbar renders with correct items
    - Test CTA button click handler
    - Test animations trigger on viewport entry

- [ ] 6. Checkpoint - Ensure Hero section renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Implement About section
  - [ ] 7.1 Create AboutSection component
    - Set up black background with appropriate padding
    - Create centered card with background #101010 and max-width 6xl
    - Display "Visual arts" label at top in Primary_Color (text-[10px] sm:text-xs)
    - Create three-segment heading using WordsPullUpMultiStyle
    - Segment 1: "I am Marcus Chen," in font-normal
    - Segment 2: "a self-taught director." in italic font-serif
    - Segment 3: "I have skills in color grading, visual effects, and narrative design." in font-normal
    - Apply responsive heading sizing (text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl)
    - Style heading with leading-[0.95] sm:leading-[0.9] and max-width 3xl
    - Split body paragraph into individual characters
    - Wrap each character with AnimatedLetter component
    - Style paragraph with color #DEDBC8 and responsive sizing (text-xs sm:text-sm md:text-base)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_
  
  - [ ] 7.2 Write integration tests for About section
    - Test heading segments render in correct order
    - Test scroll animations initialize correctly
    - Test character opacity changes with scroll

- [ ] 8. Implement Features section components
  - [ ] 8.1 Create base FeatureCard component
    - Accept title, number, children, and optional backgroundColor props
    - Render card container with rounded corners and overflow hidden
    - Apply background color if provided
    - Position title text at bottom
    - _Requirements: 11.1_
  
  - [ ] 8.2 Create VideoFeatureCard component
    - Extend base FeatureCard structure
    - Accept videoUrl and title props
    - Render full background video with autoPlay, loop, muted, playsInline, object-cover
    - Display title at bottom in color #E1E0CC
    - Implement error handling for video loading failures
    - _Requirements: 12.1, 12.2, 12.3_
  
  - [ ] 8.3 Create InfoFeatureCard component
    - Extend base FeatureCard structure with background #212121
    - Accept iconUrl, title, number, and checklist array props
    - Display small icon image (10x10 sm:12x12 rounded)
    - Render title with number
    - Display checklist items with green Check icons from lucide-react in Primary_Color
    - Style checklist descriptions in text-gray-400
    - Add "Learn more" link with ArrowRight icon rotated -45 degrees
    - Implement error handling for icon image loading failures
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6_
  
  - [ ] 8.4 Create FeaturesSection component
    - Set up minimum 100vh height with black background
    - Apply bg-noise class for subtle noise texture overlay (15% opacity)
    - Create two-line header using WordsPullUpMultiStyle
    - Line 1: "Studio-grade workflows for visionary creators." in cream color
    - Line 2: "Built for pure vision. Powered by art." in text-gray-500
    - Apply responsive header sizing (text-xl sm:text-2xl md:text-3xl lg:text-4xl)
    - Set up responsive grid: 1-column (mobile) → 2-column (md) → 4-column (lg)
    - Set grid height to 480px on lg breakpoint
    - Use gap-3 sm:gap-2 md:gap-1 between cards
    - Render VideoFeatureCard for "Your creative canvas." with video URL
    - Render InfoFeatureCard for "Project Storyboard." with icon and 4 checklist items
    - Render InfoFeatureCard for "Smart Critiques." with icon and 3 checklist items
    - Render InfoFeatureCard for "Immersion Capsule." with icon and 3 checklist items
    - Animate cards scaling from 0.95 to 1.0 with 0.15s stagger delay
    - Trigger animations once with -100px viewport margin
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_
  
  - [ ] 8.5 Write integration tests for Features section
    - Test all four feature cards render with correct data
    - Test video card plays video
    - Test info cards display checklists
    - Test grid layout responds to viewport size
    - Test card entrance animations

- [ ] 9. Checkpoint - Ensure Features section renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Integrate all sections in App component
  - [ ] 10.1 Create main App component
    - Import and render HeroSection component
    - Import and render AboutSection component
    - Import and render FeaturesSection component
    - Ensure sections stack vertically with proper spacing
    - Verify all animations work correctly in sequence
    - _Requirements: All sections integrated_
  
  - [ ] 10.2 Write end-to-end integration tests
    - Test all three sections render in correct order
    - Test scroll behavior across sections
    - Test animations trigger at appropriate scroll positions

- [ ] 11. Implement responsive design verification
  - [ ] 11.1 Verify responsive breakpoints
    - Test hero heading scales from 26vw (mobile) to 19vw (2xl)
    - Test navbar gaps adjust from gap-3 (mobile) to gap-14 (lg)
    - Test feature cards transition from 1-column to 2-column to 4-column
    - Test all font sizes scale appropriately across breakpoints
    - Test padding and spacing adjustments across all sections
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 19.6_
  
  - [ ] 11.2 Write visual regression tests
    - Test desktop viewports (1920x1080, 1440x900)
    - Test tablet viewports (768x1024)
    - Test mobile viewports (375x667, 414x896)
    - Capture screenshots for each section at each breakpoint

- [ ] 12. Implement accessibility and performance optimizations
  - [ ] 12.1 Add accessibility features
    - Add appropriate alt text for all images (icon images in feature cards)
    - Ensure all interactive elements (navbar links, CTA button, "Learn more" links) are keyboard accessible
    - Verify color contrast ratios meet WCAG AA standards
    - Use semantic HTML elements (nav, section, article, button)
    - Add ARIA labels where needed for screen readers
    - _Requirements: 20.1, 20.2, 20.3, 20.4_
  
  - [ ] 12.2 Optimize performance
    - Verify video elements use appropriate attributes (autoPlay, muted, playsInline)
    - Test animation performance maintains 60fps
    - Optimize framer-motion animations with will-change CSS property
    - Implement reduced motion support for users with motion preferences
    - _Requirements: 20.5, 20.6_
  
  - [ ] 12.3 Write accessibility tests
    - Run axe-core automated accessibility tests
    - Test keyboard navigation through all interactive elements
    - Verify focus indicators are visible
    - Test with screen reader (manual verification)
  
  - [ ] 12.4 Write performance tests
    - Measure First Contentful Paint (FCP) < 1.8s
    - Measure Largest Contentful Paint (LCP) < 2.5s
    - Measure Cumulative Layout Shift (CLS) < 0.1
    - Verify 60fps during scroll animations

- [ ] 13. Final checkpoint - Complete testing and verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- The design uses TypeScript, so all implementation will be in TypeScript + React
- No property-based tests are included because this is a UI/animation/styling feature
- Unit tests and integration tests validate component behavior and interactions
- Visual regression tests validate UI appearance across breakpoints
- Accessibility tests ensure WCAG compliance
- Performance tests ensure smooth animations and fast load times
